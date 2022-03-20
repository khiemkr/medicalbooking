import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './Profile.scss'
import HomeFooter from '../../HomePage/Section/HomeFooter';
class Booking extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detailDoctor: {}
        }
    }

    async componentDidMount() {
    }
    render() {
        return (
            <>
                <HomeHeader
                    isShowBanner={false}
                />
                <div className='booking-container'>
                    <div className='row booking-intro'>
                        <span className='booking-intro-item'>
                            THONG TIN CA NHAN
                        </span>
                        <div className='border'></div>
                    </div>
                    <div className='row'>
                        <div className='col-5 patient-container'>
                            <div className='patient-container-header'>
                                <b>SƠ YẾU LÝ LỊCH</b>
                            </div>
                            <div className='row patient-container-booking'>
                                <div className='col-7 patient-container-booking-info'>
                                    <p><b>Tên bệnh nhân</b>: Nguyễn Thế Vinh</p>
                                    <p><b>Email</b>: Vinh@gmail.com</p>
                                    <p><b>Giới tính</b> bê đê</p>
                                    <p><b>Số Điện Thoại</b>: 09946453454</p>
                                    <p><b>Ngày sinh</b>: bê đê</p>
                                    <p><b>Địa chỉ</b>:12 thốt nốt, Cần Thơ, Việt Nam</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-7 patient-container-header'>
                            <b>HỒ SƠ BỆNH ÁN</b>
                            <div className='row patient-container-information'>
                                <p>Lịch tái khám</p>
                                <table class="table table-striped patient-container-information-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Ma</th>
                                            <th scope="col">Ngày khám</th>
                                            <th scope="col">Bác sĩ</th>
                                            <th scope="col">Mô tả</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='row patient-container-information'>
                                <p>Lịch sử khám bệnh</p>
                                <table class="table table-striped patient-container-information-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Ma</th>
                                            <th scope="col">Bác sĩ phụ trách</th>
                                            <th scope="col">Nhân viên hỗ trợ</th>
                                            <th scope="col">Giờ khám bệnh</th>
                                            <th scope="col">Ngày khám bệnh</th>
                                            <th scope="col">Mô tả</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <HomeFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
