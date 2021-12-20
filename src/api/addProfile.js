import axiosClient from "./axiosClient";

const addProfile = {
    
    addTrainer: async (params) => {
        try {
            let url = '/account-trainer';
            //post lần 1 để lấy thông tin id được khởi tạo                       
            let response = await axiosClient.post(url,params);
            let ID = response.data.data[0].id;
            console.log(ID);
            url = '/trainer';
            params = {...params, account_trainer_id: ID};
            //post lần 2 để tạo thông tin account trainer id
            let responseID = await axiosClient.post(url,params);
            console.log(responseID);
            
            
            //localStorage.setItem('account', JSON.stringify(response.data.data[0]));
            //console.log(localStorage.getItem('account'));
            //store.dispatch(Actions.saveUserToRedux(localStorage.getItem('token')));                                 
            //console.log("dang nhap oke");
            return response;
        } catch (err) {
            //console.log("khong oke");
            alert(err.message)
        }
    },
    addStudent: async(params)=>{
        try{
            let url = '/account-student';
            //post lần 1 để lấy thông tin id được khởi tạo                       
            let response = await axiosClient.post(url,params);
            let ID = response.data.data[0].id;
            console.log(ID);
            url = '/student';
            params = {...params, account_student_id: ID};
            //post lần 2 để tạo thông tin account student id
            let responseID = await axiosClient.post(url,params);
            console.log(responseID);
            
            
            //localStorage.setItem('account', JSON.stringify(response.data.data[0]));
            //console.log(localStorage.getItem('account'));
            //store.dispatch(Actions.saveUserToRedux(localStorage.getItem('token')));                                 
            //console.log("dang nhap oke");
            return response;

        } catch(err){
            alert(err.message);
        }
    }
    

    

}
export default addProfile