import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './DetailDoctor.scss'
import {getDetailInfoDoctor} from '../../../services/userService'
import HomeFooter from '../../HomePage/Section/HomeFooter';
import Booking from '../Booking/Booking';
import {withRouter} from 'react-router'
class DetailDoctor extends Component { 

    constructor(props){
        super(props);
        this.state = {
            detailDoctor: {}
        }
    }
    handleShow = () =>{
        this.props.history.push(`/booking`)
    }
    async componentDidMount(){
        if(this.props.match && this.props.match.params && this.props.match.params.id){
            let id = this.props.match.params.id;
            let res = await getDetailInfoDoctor(id);
            if(res && res.infor.errCode === 0){
                this.setState({
                    detailDoctor: res.infor.data
                })
            }
            console.log(res.infor.data)
        }
        
    }
    render() {
        console.log(this.state)
        let {detailDoctor} = this.state;
        let nameVi = ''
        if(detailDoctor && detailDoctor.positionData){
            nameVi = `${detailDoctor.positionData.valueVi},${detailDoctor.lastName} ${detailDoctor.firstName}`
        }
        return (
          <>
            <HomeHeader
                isShowBanner={false}
            />
            <div className='doctor-detail-container'>
                <div className='intro-doctor'>
                    <div
                        className='content-left'
                        style={{backgroundImage:`url(${detailDoctor && detailDoctor.image ? detailDoctor.image: ''})`}}
                    >

                    </div>
                    <div className='content-right'>
                        <div className='up'>
                            {nameVi}
                        </div>
                        <div className='down'>
                            {detailDoctor && detailDoctor.kMarkdown
                            && detailDoctor.kMarkdown.description
                            &&
                            <span>
                                {detailDoctor.kMarkdown.description}
                            </span>
                            }
                        </div>
                    </div>
                </div>
                <div className='schedule-doctor'> 

                </div>
                <div className='row'>
                    <div className=' col-6 '>
                        <div className='detail-infor-doctor'>
                            {detailDoctor && detailDoctor.kMarkdown && detailDoctor.kMarkdown.contentHTML
                                &&
                                <div dangerouslySetInnerHTML={{ __html: detailDoctor.kMarkdown.contentHTML}}>

                                </div>
                            }
                        </div>
                    </div>
                    <div className='col-6 detail-info-celendar'>
                        <div className='detail-infor-day'>
                            <select>
                                <option selected>10-10-2022</option>
                                <option>10-10-2022</option>
                                <option>10-10-2022</option>
                                <option>10-10-2022</option>
                            </select>
                        </div>
                        <div className='row specialty-content-item-celender-content'>
                                    <div className='col-3' onClick={() => this.handleShow()}>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3' onClick={() => this.handleShow()}>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3' onClick={() => this.handleShow()}>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3' onClick={() => this.handleShow()}>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                        </div>
                        <div className='row specialty-content-item-celender-content'>
                                    <div className='col-3' onClick={() => this.handleShow()}>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3' onClick={() => this.handleShow()}>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3' onClick={() => this.handleShow()}>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3' onClick={() => this.handleShow()}>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                        </div>
                        <div className='row specialty-content-item-celender-content'>
                                    <div className='col-3' onClick={() => this.handleShow()}>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3' onClick={() => this.handleShow()}>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3' onClick={() => this.handleShow()}>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3' onClick={() => this.handleShow()}>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                        </div>
                        <div className='row specialty-content-item-celender-content'>
                                    <div className='col-3' onClick={() => this.handleShow()}>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3' onClick={() => this.handleShow()}>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3' onClick={() => this.handleShow()}>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3' onClick={() => this.handleShow()}>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                        </div>
                        <div className='detail-info-address'>
                            <span> ĐỊA CHỈ PHÒNG KHÁM </span>
                            <p>Trường DHCT, 3/2 phường Xuân Khánh,quận Ninh Kiều, Thành phố Cần Thơ</p>
                            <p>Email: medicalbooking@gmail.com</p>
                            <p>SDT:038943476344</p>

                        </div>
                        <div className='detail-info-price'>
                          <span>GIÁ KHÁM BỆNH:</span>
                          <p>500.000 VND</p>
                        </div>
                    </div>
                </div>
            </div>
            <HomeFooter/>
          </>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailDoctor));
