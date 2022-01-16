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
            return response;

        } catch(err){
            alert(err.message);
        }
    },
    addService: async(params)=>{
        try{
            let url ='/account-student';
            console.log(params)
            let response = await axiosClient.put(url,params);
            console.log(response);
            return response
        }catch{

        }
    }
    

    

}
export default addProfile