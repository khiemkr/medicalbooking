import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import Slider from 'react-slick';
import sectionImg from "../../../assets/specialty/tieuhoa.jpg"
import {withRouter} from 'react-router'
class section extends Component {

    handleShow = () =>{
        this.props.history.push(`/specialty`)

    }
    render() {
        return (
           <div className='section-share section-specialty'>
               <div className='section-container'>
                   <div className='section-header'>
                       <span className='title-section'>Chuyên khoa phổ biến</span>
                       <button className='btn-section'>Xem thêm</button>
                   </div>
                   <div className='section-body'>
                        <Slider {...this.props.settings} >
                            <div className='section-customize' onClick={() => this.handleShow()}>
                                <div className='bg-image section-specialty'/>
                                <div className='specialty-title-popular'>Tiêu hóa</div>
                            </div >
                            <div className='section-customize' onClick={() => this.handleShow()}>
                                 <div className='bg-image section-specialty'/>
                                <div className='specialty-title-popular'>Tim mạch</div> 
                            </div >
                            <div className='section-customize' onClick={() => this.handleShow()}>
                                 <div className='bg-image section-specialty'/>
                                <div className='specialty-title-popular'>Thần kinh</div>
                            </div >
                            <div className='section-customize' onClick={() => this.handleShow()}>
                                 <div className='bg-image section-specialty'/>
                                <div className='specialty-title-popular'>Nội tổng hợp</div>
                            </div >
                            <div className='section-customize' onClick={() => this.handleShow()}>
                                <div className='bg-image section-specialty'/>
                                <div className='specialty-title-popular'>Xương khớp</div>
                            </div >
                            <div className='section-customize' onClick={() => this.handleShow()}>
                                 <div className='bg-image section-specialty'/>
                                <div className='specialty-title-popular'>Vật lí trị liệu</div>
                            </div >
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
        language: state.app.language,
    };
    
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(section));
