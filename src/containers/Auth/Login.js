import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLogin } from '../../services/userService';
import $ from 'jquery';
import { emitter } from '../../utils/emitter';
import { getAllUsers, createNewUserService, deleteUserService, editUserService } from '../../services/userService'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowpass: false,
            errMessage: ''
        }
    }
    componentDidMount() {
        $(document).ready(function () {
            $('.login-info-box').fadeOut();
            $('.login-show').addClass('show-log-panel');



            $('input[type="radio"]').on('change', function () {


                if ($('#log-reg-show').is(':checked')) {
                    $('.register-info-box').fadeIn();
                    $('.login-info-box').fadeOut();

                    $('.white-panel').removeClass('right-log');

                    $('.login-show').addClass('show-log-panel');
                    $('.register-show').removeClass('show-log-panel');
                }
                if ($('#log-login-show').is(':checked')) {
                    $('.register-info-box').fadeOut();
                    $('.login-info-box').fadeIn();

                    $('.white-panel').addClass('right-log');
                    $('.register-show').addClass('show-log-panel');
                    $('.login-show').removeClass('show-log-panel');

                }
            });
        });
    }
    handleOnChangeUserName = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    handleOnChangePassWord = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLogin(this.state.username, this.state.password);
            console.log('check',data)
            if (data && data.success !== true) {
                this.setState({
                    errMessage: data.message
                })

            }
            if (data && data.success === true) {
                this.props.userLoginSuccess(data.user);
                if(data.user.roleId === 'R4') {
                    console.log('check phan quyen',data.user.roleId)
                    window.location.replace('http://localhost:3000/home')
                }
            }
            
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
            console.log(error)
        }

    }
    handleShowPass = () => {
        this.setState({
            isShowpass: !this.state.isShowpass
        })
    }
    handleregister = async (data) => {
        try {
            let response = await createNewUserService(data);
            console.log(response)
            console.log(data)
            if (response && response.errCode !== 0) {
                alert(response.errMessage);
            } else {
                await this.getAllUserFromReact();
                this.setState({
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <div class="login-reg-panel">
                <div class="login-info-box">
                    <div className='logo'></div>
                    <h2>B???n ???? c?? t??i kho???n</h2>
                    <p>????ng nh???p t???i ????y</p>
                    <label id="label-register" for="log-reg-show">????ng Nh???p</label>
                    <input type="radio" name="active-log-panel" id="log-reg-show" value="log-reg-show" />
                </div>
                <div class="register-info-box">
                    <div className='logo'></div>
                    <h2>B???n ch??a c?? t??i kho???n</h2>
                    <p>????ng k?? t??i kho???n m???i t???i ????y</p>
                    <label id="label-login" for="log-login-show">????ng k??</label>
                    <input type="radio" name="active-log-panel" value="log-login-show" id="log-login-show" />
                </div>

                <div class="white-panel">
                    <div class="login-show">
                        <h2>????ng nh???p</h2>
                        <input
                            type='text'
                            className='form-control '
                            placeholder='enter your username'
                            value={this.state.username}
                            onChange={(e) => { this.handleOnChangeUserName(e) }}
                        />
                        <input

                            type={this.state.isShowpass ? 'text' : 'password'}
                            placeholder='enter your password'
                            onChange={(e) => { this.handleOnChangePassWord(e) }}

                        />
                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <input type="button" value="????ng Nh???p"
                            onClick={() => this.handleLogin()}
                        />

                    </div>
                    <div class="register-show">
                        <h2>????ng k??</h2>
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="M???t kh???u" />
                        <input type="text" placeholder="H??? v?? t??n" />
                        <input type="text" placeholder="S??? ??i???n tho???i" />
                        <input type="text" placeholder="?????a ch???" />
                        <input type="text" placeholder="Gi???i t??nh" />
                        <input type="button" value="????ng k??"
                            onClick={() => this.handleregister()}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
