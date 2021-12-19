import axiosClient from "./axiosClient"
import * as Actions from "./../store/actions"
import { store } from './../index'



const authAPI = {
    login: async (params) => {
        try {
            let url = '/authentication-admin';
            console.log(JSON.parse(params).role);
            if(JSON.parse(params).role==='admin'){
                if(JSON.parse(params).username==='admin'&&JSON.parse(params).password==='1'){
                    let respone = {"data":[{role: "admin"}],"error":"null"}
                    console.log(respone.error);
                    return respone;
                }
                else {
                    let respone = {"data":"null","error":"Sai tài khoản hoặc sai tên mật khẩu"}
                    return respone 
                }
            } 
            if(JSON.parse(params).role==='trainer'){
                url='/authentication-trainer';
            } 
            if(JSON.parse(params).role==='customer'){
                url='/authentication-student';
            } 
            
            
            let response = await axiosClient.post(url,params);
            console.log(response.data);
            
            //localStorage.setItem('account', JSON.stringify(response.data.data[0]));
            //console.log(localStorage.getItem('account'));
            store.dispatch(Actions.saveUserToRedux(localStorage.getItem('token')));                                 
            //console.log("dang nhap oke");
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },

    logout: async () => {
        try {
            const url = '/auth/logout'
            //const response = await axiosClient.post(url);
            localStorage.removeItem('account');
            localStorage.removeItem('datatrainer');
            store.dispatch(Actions.removeUserOutOfRedux(null))
        } catch (err) {
            alert(err.message);
        }

    }
}

export default authAPI;
