import actionTypes from './actionTypes';
import { getAllCodeService,createNewUserService,getAllUsers,deleteUserService,editUserService,getTopDoctorHomeService, getAllDoctors,saveDetailDoctor } from '../../services/userService';
import { toast } from 'react-toastify';
// export const fetchGenderStart = () => {
//     return async (dispatch,getState)=>{
//         try {
//             dispatch({type: actionTypes.FETCH_GENDER_START})
//             let res = await getAllCodeService("GENDER");
//             if(res && res.errCode === 0){
//                 dispatch(fetchGenderSuccess(res.data));

//             }else{
//                 dispatch(fetchGenderFailed());
//             }
//         } catch (e) {
//             dispatch(fetchGenderFailed());
//             console.log(e)
//         }
//     }
// }
// export const fetchGenderSuccess = (genderData) => ({
//     type: actionTypes.FETCH_GENDER_SUCCESS,
//     data: genderData
// })
// export const fetchGenderFailed = () => ({
//     type: actionTypes.FETCH_GENDER_FAILED
// })



export const fetchPositionStart = () => {
    return async (dispatch,getState)=>{
        try {
            let res = await getAllCodeService();
            if(res && res.errCode === 0){
                dispatch(fetchPositionSuccess(res.data));
            }else{
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log(e)
        }
    }
}
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})
export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})



// export const fetchRoleStart = () => {
//     return async (dispatch,getState)=>{
//         try {
//             let res = await getAllCodeService("ROLE");
//             if(res && res.errCode === 0){
//                 dispatch(fetchRoleSuccess(res.data));

//             }else{
//                 dispatch(fetchRoleFailed());
//             }
//         } catch (e) {
//             dispatch(fetchRoleFailed());
//             console.log(e)
//         }
//     }
// }
// export const fetchRoleSuccess = (roleData) => ({
//     type: actionTypes.FETCH_ROLE_SUCCESS,
//     data: roleData
// })
// export const fetchRoleFailed = () => ({
//     type: actionTypes.FETCH_ROLE_FAILED
// })


export const createNewUser = (data) => {
    return async (dispatch,getState)=>{
        try {
            let res = await createNewUserService(data);
            console.log('check',res)
            if(res && res.success === true){
                toast.success('Create new user success')
                dispatch(saveUserSuccess());
                dispatch(fetchAllUserStart());
            }else{
                dispatch(saveUserFailed());
            }
        } catch (e) {
            dispatch(saveUserFailed());
            console.log(e)
        }
    }
}

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
})

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILD,
})


export const fetchAllUserStart = () => {
    return async (dispatch,getState)=>{
        try {
            let res = await getAllUsers("All");
            if(res && res.errCode === 0){
                dispatch(fetchAllUserSuccess(res.users.reverse()));
            }else{
                dispatch(fetchAllUserFailed());
            }
        } catch (e) {
            dispatch(fetchAllUserFailed());
            console.log(e)
        }
    }
}
export const fetchAllUserSuccess = (data) =>({
    type: 'FETCH_ALL_USER_SUCCESS',
    users: data
})
export const fetchAllUserFailed = () =>({
    type: 'FETCH_ALL_USER_FAILED',
})


export const deleteUser = (userId) => {
    return async (dispatch,getState)=>{
        try {
            let res = await deleteUserService(userId);
            console.log('check',res)
            if(res && res.errCode === 0){
                toast.success('Delete user success')
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUserStart());
            }else{
                toast.error('Delete user error')
                dispatch(deleteUserFailed());
            }
        } catch (e) {
            dispatch(deleteUserFailed());
            console.log(e)
        }
    }
}

export const deleteUserSuccess = () =>({
    type: 'DELETE_USER_SUCCESS',
})
export const deleteUserFailed = () =>({
    type: 'DELETE_USER_FAILD',
})

export const editUser = (data) => {
    return async (dispatch,getState)=>{
        try {
            let res = await editUserService(data);
            console.log('check',res)
            if(res && res.errCode === 0){
                toast.success('Update user success')
                dispatch(editUserSuccess());
                dispatch(fetchAllUserStart());
            }else{
                toast.error('Update user error')
                dispatch(editUserFailed());
            }
        } catch (e) {
            dispatch(editUserFailed());
            console.log(e)
        }
    }
}

export const editUserSuccess = () =>({
    type: 'EDIT_USER_SUCCESS',
})
export const editUserFailed = () =>({
    type: 'EDIT_USER_FAILD',
})


export const fetchTopDoctor = () =>{
    return async (dispatch,getState)=>{
        try {
            let res = await getTopDoctorHomeService('');
            if(res && res.errCode === 0){
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
                    dataDoctors: res.data
                })
            }else{
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTOR_FAILED,
                })
            }
        } catch (e) {
            console.log(e)
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTOR_FAILED,
            })
        }
    }
}

export const fetchAllDoctor = () =>{
    return async (dispatch,getState)=>{
        try {
            let res = await getAllDoctors('');
            if(res && res.errCode === 0){
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
                    dataAllDoctors: res.data
                })
            }else{
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTOR_FAILED,
                })
            }
        } catch (e) {
            console.log(e)
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTOR_FAILED,
            })
        }
    }
}

export const saveDetailInfoDoctor = (data) =>{
    return async (dispatch,getState)=>{
        try {
            let res = await saveDetailDoctor(data);
            if(res && res.errCode === 0){
                toast.success('user info detail doctor success')
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                })
            }else{
                toast.error('user info detail doctor fail')
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
                })
            }
        } catch (e) {
            console.log(e);
            toast.error('user info detail doctor fail')
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
            })
        }
    }
}

export const fetchAllScheduleHours = (type) =>{
    return async (dispatch,getState)=>{
        try {
            let res = await getAllCodeService('TIME');
            if(res && res.errCode === 0){
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_HOURS_SUCCESS,
                    dataTime: res.data
                })
            }else{
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_HOURS_FAILED,
                })
            }
        } catch (e) {
            console.log(e)
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_HOURS_FAILED,
            })
        }
    }
}
