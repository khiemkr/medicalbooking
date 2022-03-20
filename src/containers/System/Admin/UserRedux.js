import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { CRUD_ACTIONS, CommonUtils } from '../../../utils';
import './UserRedux.scss';
import TableManageUser from './TableManageUser';
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewImg: '',
            isOpen: false,
            password: '',
            email: '',
            name: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            avatar: '',
            userEditId: '',
            action: ''
        }
    }
    async componentDidMount() {
        this.props.getPositionStart();
    }
    componentDidUpdate(preProps, preState, snapshot) {
        if (preProps.listusers !== this.props.listusers) {
            this.setState({
                password: '',
                email: '',
                firstName: '',
                lastName: '',
                phonenumber: '',
                address: '',
                avatar: '',
                action: CRUD_ACTIONS.CREATE,
                previewImg: ''
            })
        }
    }
    handleOnchangeImage = async (e) => {
        let data = e.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
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
        let { action } = this.state;
            this.props.createNewUser({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                gender: this.state.gender,
                // roleId: this.state.role,
                // position: this.state.position,
                avatar: this.state.avatar
            })
        console.log(this.state)
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['email', 'password', 'name', 'phoneNumber', 'address']
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
    handleEditUserFromParent = (user) => {
        let imageBase64 = '';
        if (user.image) {
            imageBase64 = new Buffer(user.image, 'base64').toString('binary');
        }
        this.setState({
            password: 'hashcode',
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phonenumber: user.phonenumber,
            address: user.address,
            gender: user.gender,
            position: user.positionId,
            role: user.roleId,
            avatar: '',
            previewImg: imageBase64,
            action: CRUD_ACTIONS.EDIT,
            userEditId: user.id

        })
    }
    render() {
        let { password, email, name, phonenumber, address, gender, position } = this.state
        return (
            <div className='user-redux-container'>
                <div className="title" >
                    THÊM MỚI NGƯỜI DÙNG
                </div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-3'>
                                <label>Email</label>
                                <input className='form-control' type='email'
                                    value={email}
                                    onChange={(e) => { this.onChangeInput(e, 'email') }}
                                    disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Password</label>
                                <input className='form-control' type='password'
                                    value={password}
                                    onChange={(e) => { this.onChangeInput(e, 'password') }}
                                    disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Name</label>
                                <input className='form-control' type='text'
                                    value={name}
                                    onChange={(e) => { this.onChangeInput(e, 'name') }}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Address</label>
                                <input className='form-control' type='text'
                                    value={address}
                                    onChange={(e) => { this.onChangeInput(e, 'address') }}
                                />
                            </div>
                            <div className='col-3'>
                                <label>PhoneNumber</label>
                                <input className='form-control' type='text'
                                    value={phonenumber}
                                    onChange={(e) => { this.onChangeInput(e, 'phoneNumber') }}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Gender</label>
                                <select className='form-control'
                                    onChange={(e) => { this.onChangeInput(e, 'gender') }}
                                    value={gender}
                                >
                                    <option></option>
                                    <option>NAM</option>
                                    <option>NU</option>
                                </select>
                            </div>
                            <div className='col-3'>
                                <label>Vị Trí</label>
                                <select className='form-control'
                                    onChange={(e) => { this.onChangeInput(e, 'position') }}
                                    value={position}
                                    >
                                    {position && position.length > 0 &&
                                        position.map((item, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item.keyMap}
                                                >
                                                    {item.roleName}
                                                </option>
                                            )
                                        })}
                                </select>
                            </div>
                            {/* <div className='col-6'>
                                <label>roleId</label>
                                <select className='form-control'
                                    onChange={(e) => { this.onChangeInput(e, 'role') }}
                                    value={role}
                                    
                                >
                                    {roles && roles.length > 0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item.keyMap}
                                                >
                                                    {item.valueVi}
                                                </option>
                                            )
                                        })}
                                </select>
                            </div> */}
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
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles,
        listusers: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // getGenderStart: () => { dispatch(actions.fetchGenderStart()) },
        // getRoleStart: () => { dispatch(actions.fetchRoleStart()) },
        getPositionStart: () => { dispatch(actions.fetchPositionStart()) },
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        fetUserRedux: () => dispatch(actions.fetchAllUserStart()),
        editUserRedux: (data) => dispatch(actions.editUser(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
