import axiosClient from "./axiosClient";

const Review = {
    Accept: async(params)=>{
        let url = '/review-admin';
        try{              
            let response = await axiosClient.post(url,params);
            return response.data;
        } catch(err){
            alert(err.message);
        }
    },
    Deny: async(params)=>{
        let url = '/review-admin';
        try{              
            let response = await axiosClient.post(url,params);
            return response.data;
        } catch(err){
            alert(err.message);
        }
    }
}
export default Review