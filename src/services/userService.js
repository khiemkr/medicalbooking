import axios from "../axios"

const handleLogin = (userEmail,userPassword) => {
    // return axios.post('/api/login',{email: userEmail,password: userPassword})
    return axios.post('/api/login/staff',{email: userEmail,password: userPassword})
} 
// const getAllUsers = (inputId) =>{
//     // return axios.get(`/api/get-all-users?id=${inputId}`)
//     // return axios.get(`/api/get-all-staff?idStaff=${inputId}`)
//     return axios.get(`/api/staff/getAll?id=${inputId}`)
// }
const getAllUsers = () =>{
    return axios.get(`/api/staff/getAll`)
}
const createNewUserService = (data) =>{ 
    // return axios.post('/api/create-new-user',data);
    return axios.post('/api/staff/create',data);

}
const deleteUserService = (userId) =>{
    return axios.delete('/api/delete-user',{
        data:{
            id: userId
        }
    })
}
const editUserService = (Inputdata) =>{
    return axios.put('api/edit-user',Inputdata)
}
// const getAllCodeService = (inputType)  =>{
//     // return axios.get(`/api/allcode?type=${inputType}`)
//     return axios.get(`/api/role//getAll?type=${inputType}`)

// }
const getAllCodeService = ()  =>{
    // return axios.get(`/api/allcode?type=${inputType}`)
    return axios.get(`/api/role//getAll`)

}

const getTopDoctorHomeService = (limit) =>{
    return axios.get(`/api/top-doctor-home?limit=${limit}`);
}

const getAllDoctors = () =>{
    return axios.get(`/api/get-all-doctors`);
}
const saveDetailDoctor = (data) =>{
    return axios.post('/api/save-info-doctor',data)
} 

const getDetailInfoDoctor = (inputId) =>{
    return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`)
}

export { 
    handleLogin,getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService,
    getAllCodeService,
    getTopDoctorHomeService,
    getAllDoctors,
    saveDetailDoctor,
    getDetailInfoDoctor
}