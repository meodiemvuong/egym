import axiosClient from "./axiosClient";

const addProfile = {
    
    addTrainer: async (params) => {
        try {
            let url = '/account-trainer';
                                   
            let response = await axiosClient.post(url,params);
            url = '/trainer';
            let responseID = await axiosClient.post(url,params);
            console.log(response);
            
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
    

    

}
export default addProfile