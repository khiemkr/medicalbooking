import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import * as actions from '../../../store/actions';
import { withRouter } from 'react-router';
class OutStandingDoctor extends Component {
    constructor(props){
        super(props)
        this.state ={
            arrDoctors: []
        } 
    }

    componentDidMount(){
        this.props.loadTopDotors();

    }
    componentDidUpdate(prevProps,prevState,snapshot){
        if(prevProps.topDoctorsRedux !== this.props.topDoctorsRedux){
            this.setState({
                arrDoctors: this.props.topDoctorsRedux
            })
        }
    }
    handleViewDetailDoctor = (doctor) =>{
        this.props.history.push(`/detail-doctor/${doctor.id}`) 
    }
    render() {
        let allDoctors = this.state.arrDoctors;
        return (
            <div  className='section-share section-outstanding-doctor'>
               <div className='section-container'>
                   <div className='section-header'>
                       <span className='title-section'>Bác sĩ nổi bậc</span>
                       <button className='btn-section'>Xem thêm</button>
                   </div>
                   <div className='section-body'>
                        <Slider {...this.props.settings} >
                            {allDoctors && allDoctors.length > 0 
                            && allDoctors.map((item,index) =>{
                                let imageBase64 = '';

                                if(item.image){
                                    imageBase64 = new Buffer(item.image,'base64').toString('binary')
                                }
                                let nameVi=`${item.positionData.valueVi}, ${item.firstName} ${item.lastName}`;
                                return(
                                    <div 
                                        className='section-customize' key ={index}
                                        onClick={() =>this.handleViewDetailDoctor(item)}
                                    >
                                        <div className='customize-border'>
                                            <div className='outer-bg'>
                                            <div className='bg-image section-outstanding-doctor'
                                                style={{ backgroundImage: `url(${imageBase64})`}}
                                            />
                                            </div>
                                            <div className='position text-center'>
                                                <div>{nameVi}</div>
                                                <div>Tieu hoa</div>
                                            </div>             
                                        </div>
                                    </div >         
                                )
                            })}
                        </Slider>
                   </div>
               </div>
           </div>
        );
    }

} 

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        topDoctorsRedux: state.admin.topDoctors

    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDotors: () => dispatch(actions.fetchTopDoctor())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor));
