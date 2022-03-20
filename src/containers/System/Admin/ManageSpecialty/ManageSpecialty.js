import React, { Component } from "react";
import { connect } from "react-redux";
import { dispatch } from "../../../../redux";
import * as actions from '../../../../store/actions';
import { CRUD_ACTIONS,CommonUtils } from '../../../../utils';
import './ManageSpecialty.scss'
class ManageSpecialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:'',
          price:'',
          previewImg: '',
          desc:''
        }
    }
    async componentDidMount() {
      
    }
    componentDidUpdate(preProps, preState, snapshot) {
       
    }
    handleOnchangeImage = async (e) => {
        let data = e.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            console.log('check img',base64)
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImg: objectUrl,
                avatar: base64
            })
        }
    }
    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) return;

        let {action} = this.state;
        if(action === CRUD_ACTIONS.CREATE){
            this.props.createNewUser({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phonenumber: this.state.phonenumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
                avatar: this.state.avatar
            })
        }
        if(action === CRUD_ACTIONS.EDIT){
            this.props.editUserRedux({
                id: this.state.userEditId,
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phonenumber: this.state.phonenumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
                avatar: this.state.avatar
            })
        }
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['name', 'price', 'img', 'desc']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('nhap day du thong tin')
                break
            }
        }
        return isValid
    }

    onChangeInput = (e, id) => {
        let copyState = { ...this.state }
        copyState[id] = e.target.value;
        this.setState({
            ...copyState
        })
    }
    handleEditUserFromParent = (user) =>{
        let imageBase64 = '';
        if(user.image){
            imageBase64 = new Buffer(user.image,'base64').toString('binary');
        }
        this.setState({
            password: 'hashcode',
            name: user.name,
            price: user.price,
            desc: user.desc,
            avatar:'' ,
            previewImg:imageBase64,
            action: CRUD_ACTIONS.EDIT,
            userEditId: user.id

        })
    }
    render() {
        let { password, email, firstName, lastName, phonenumber, address, gender, position, role, avatar } = this.state
        return (
            <div className='user-redux-container'>
                <div className="title" >
                    THÊM MỚI CHUYEN KHOA
                </div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6'>
                                <label>Ten khoa</label>
                                <input className='form-control' type='email'
                                    value={email}
                                    onChange={(e) => { this.onChangeInput(e, 'email') }}
                                    disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                />
                            </div>
                            <div className='col-6'>
                                <label>Gia dich vu</label>
                                <input className='form-control' type='password'
                                    value={password}
                                    onChange={(e) => { this.onChangeInput(e, 'password') }}
                                    disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                />
                            </div>
                            <div className='col-6'>
                                <label>Mo ta</label>
                                <input className='form-control' type='text'
                                    value={firstName}
                                    onChange={(e) => { this.onChangeInput(e, 'firstName') }}
                                />
                            </div>
                            <div className='col-6'>
                                <label>Image</label>
                                <div className='preview-img-container'>
                                    <input id='previewImg' type='file' hidden
                                        onChange={(e) => this.handleOnchangeImage(e)}
                                    />
                                    <label className='label-upload' htmlFor='previewImg'> Tải Ảnh <i className='fas fa-upload'></i></label>
                                    <div className='preview-image' style={{ backgroundImage: `url(${this.state.previewImg})` }}>

                                    </div>
                                </div>
                            </div>
                            <div className='col-12 mt-3'>
                                <button className={this.state.action === CRUD_ACTIONS.EDIT ? 'btn btn-warning' : 'btn btn-primary'}
                                    onClick={() => this.handleSaveUser()}
                                >
                                    {this.state.action === CRUD_ACTIONS.EDIT ? 'Save Change' : 'Save'}
                                </button>
                            </div>
                            <div className='col-12 mb-5'>
                                
                            </div>
                        </div>
                        <div className="row doctor-workshift-content ">
                        <div className="col-12">
                            <p><b> Danh sach chuyen khoa</b></p>
                            <table id="customers">
                                <tbody>
                                    <tr >
                                        <th>Ma chuyen khoa</th>
                                        <th>Ten chuyen khoa</th>
                                        <th>Mo ta</th>
                                        <th>Gia dich vu</th>
                                        <th>Hinh anh</th>
                                        <th>Tac vu</th>
                                    </tr>
                                    <tr>
                                        <td>h2326</td>
                                        <td>Than kinh</td>
                                        <td>tri than kinh</td>
                                        <td>500.000 VND</td>
                                        <td>img</td>
                                        <td>
                                        <button className='btn-edit'><i className='fas fa-pencil-alt'></i></button>
                                            <button className='btn-delete' ><i className='fas fa-trash'></i></button>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};
const mapDispatchToProps = dispatch => {
    return {

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageSpecialty)