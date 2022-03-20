import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TableManageUser.scss'
import * as actions from '../../../store/actions'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'
import './ManageDoctor.scss'
import Select from 'react-select'
import {getDetailInfoDoctor} from '../../../services/userService'
const mdParser = new MarkdownIt();
class ManageDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contentMarkdown: '',
            contentHTML:'',
            selectedDoctor:'',
            description:'',
            listDoctors:[],
            hasOldData: false
        }
    }
    componentDidMount(){
        this.props.fetAllDoctorsRedux();
    }
    buildDataInputSelect = (inputData) =>{
        let result = [];
        if(inputData && inputData.length > 0 ) {
            inputData.map((item,index) =>{
                let object ={};
                object.label = `${item.lastName} ${item.firstName}`;
                object.value = item.id;
                result.push(object)
            })
        }
        return result
    }
    componentDidUpdate(prevProps,prevState,snapshot){
      if(prevProps.allDoctors !== this.props.allDoctors){
        let dataSelect = this.buildDataInputSelect(this.props.allDoctors)  
        this.setState({
              listDoctors: dataSelect
          })
      }
    } 
    handleEditorChange = ({html,text}) => {
        this.setState({
            contentMarkdown:text,
            contentHTML:html
        })
    }

    handleSaveContentMarkdown = () =>{
        let {hasOldData} = this.state
        this.props.saveDetailDoctorRedux({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            doctorId: this.state.selectedDoctor.value,
            // action: hasOldData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE
        })
    }
    handleChange = async (selectedDoctor) =>{
        this.setState({
            selectedDoctor
        })
        let res = await getDetailInfoDoctor(selectedDoctor.value);
        if(res && res.infor.errCode === 0 && res.infor.data && res.infor.data.kMarkdown){
            let markdown = res.infor.data.kMarkdown;
            this.setState({
                contentHTML: markdown.contentHTML,
                contentMarkdown: markdown.contentMarkdown,
                description: markdown.description,
                hasOldData: true
            })
            console.log('check res',this.state.contentMarkdown)
        } else{
            this.setState({
                contentHTML: '',
                contentMarkdown: '',
                description: '',
                hasOldData: false

            })
        }
    }
    handleOnChangeDesc = (e) =>{
        this.setState({
            description: e.target.value
        })
    }
    render() { 
        let {hasOldData} = this.state;
        return (
            <div className='manage-doctor-container'>
                <div className='manage-doctor-title'>
                    tao them thong tin doctor
                </div> 
                <div className='more-info'>
                    <div className='content-left form-group'>
                        <label>Chon bac si</label>
                        <Select
                            value={this.state.selectedDoctor}
                            onChange={this.handleChange}
                            options={this.state.listDoctors}
                        />
                    </div>
                    <div className='content-right'>
                        <label>Thong tin gioi thieu:</label>
                        <textarea 
                            className='form-control' 
                            rows='4'
                            onChange={(e) => this.handleOnChangeDesc(e)}
                            value = {this.state.description}
                        >                       
                        </textarea>
                    </div>
                </div>
                <div className='manage-doctor-editor'>
                    <MdEditor 
                        style={{height:'500px'}} 
                        renderHTML={text =>mdParser.render(text)}
                        onChange={this.handleEditorChange}
                        value={this.state.contentMarkdown}
                    />
                </div>
                <button 
                    onClick={()=> this.handleSaveContentMarkdown()}
                    className={hasOldData === true ? 'save-content-doctor' : 'create-content-doctor'}
                >
                   {hasOldData === true ? 
                        <span>Luu thong tin</span> : <span>Tao thong tin</span>
                    }
                </button>
            </div>
        );
    }

}
const mapStateToProps = state => {
    return {
        allDoctors: state.admin.allDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetAllDoctorsRedux: () => dispatch(actions.fetchAllDoctor()),
        saveDetailDoctorRedux: (data) => dispatch(actions.saveDetailInfoDoctor(data))
     };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
