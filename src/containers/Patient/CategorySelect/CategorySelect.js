import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './CategorySelect.scss'
import HomeFooter from '../../HomePage/Section/HomeFooter';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ab1 from '../../../assets/about/ab1.jpeg';
import ab2 from '../../../assets/about/ab2.jpeg';
import ab3 from '../../../assets/about/ab3.jpeg';
import ab4 from '../../../assets/about/ab4.jpeg';
const images = [
    ab1,ab2,ab3,ab4
  ];
class CategorySelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detailDoctor: {}
        }
    }
    handleview = () =>{
        this.props.history.push(`/specialty`)
    }

    async componentDidMount() {
    }
    render() {
        return (
            <>
                <HomeHeader
                    isShowBanner={false}
                />
                <div className='category-container'>
                    <div className='row category-intro'>
                        <span className='category-intro-item'>
                            <b>CÁC CHUYÊN KHOA PHỔ BIẾN</b>
                        </span>
                        <div className='border'></div>
                    </div>
                    <div className='category-intro-slide'>
                        <Zoom scale={0.4}>
                            {
                                images.map((each, index) => <img key={index} style={{ width: "100%", height: '200px', objectFit: 'cover' }} src={each} />)
                            }
                        </Zoom>
                    </div>
                    <div class="row">
                        <div className='col-3 category-sidebar'>
                            <nav class="category">
                                <h3 class="category-sidebar-heading">
                                    <i class="fas fa-align-justify"></i>
                                    Trang chủ
                                </h3>
                                <ul class="category-list">
                                    <li class="category-item ">
                                        <i class="fas fa-brain"></i>Than kinh
                                    </li>
                                    <li class="category-item ">
                                        noi tong hop
                                    </li>
                                    <li class="category-item ">
                                        noi tong hop
                                    </li>
                                    <li class="category-item ">
                                        noi tong hop
                                    </li>
                                    <li class="category-item ">
                                        noi tong hop
                                    </li>
                                    <li class="category-item ">
                                        noi tong hop
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='col-9 category-content-list' >
                            <div className='row category-content-list-item'>
                                <div className='col-5 category-content-list-item-img '>

                                </div>
                                <div className='col-7 category-content-list-item-desc'>
                                    <div className='category-content-list-item-desc-title'>
                                        Than kinh
                                    </div>
                                    <p>Hệ thống thần kinh ngoại biên là những phần của hệ
                                        thống thần kinh nằm ngoài não và tủy sống.
                                        Nó bao gồm các dây thần kinh sọ não và các dây thần kinh tủy sống từ nguyên ủy cho đến tận cùng. Các tế bào sừng trước tủy sống, mặc dù về nguyên lý là một phần của hệ thần kinh trung ương, nhưng đôi khi được cho rằng là một phần của hệ thống thần kinh ngoại biên
                                        bởi vì chúng là một phần của đơn vị vận động.
                                    </p>
                                    <button onClick={() => this.handleview()} className='category-content-list-item-desc-btn'> Xem chi tiet </button>
                                </div>
                            </div>
                            <div className='row category-content-list-item'>
                                <div className='col-5 category-content-list-item-img '>
                                </div>
                                <div className='col-7 category-content-list-item-desc'>
                                    <div className='category-content-list-item-desc-title'>
                                        Than kinh
                                    </div>
                                    <p>Hệ thống thần kinh ngoại biên là những phần của hệ
                                        thống thần kinh nằm ngoài não và tủy sống.
                                        Nó bao gồm các dây thần kinh sọ não và các dây thần kinh tủy sống từ nguyên ủy cho đến tận cùng. Các tế bào sừng trước tủy sống, mặc dù về nguyên lý là một phần của hệ thần kinh trung ương, nhưng đôi khi được cho rằng là một phần của hệ thống thần kinh ngoại biên
                                        bởi vì chúng là một phần của đơn vị vận động.
                                    </p> 
                                    <button className='category-content-list-item-desc-btn'> Xem chi tiet </button>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect);
