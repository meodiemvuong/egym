import axiosClient from "./axiosClient";
const RequirementAPI = {
    Accept: async(params)=>{
        try{
            console.log(params)
            let url = `http://localhost:8080/cnpm/requirement-trainer/${params.id}`;
            let response = await axiosClient.delete(url,{data: JSON.stringify(params)});
            console.log(response)
            return response
        } catch(e){
            alert(e.message)
        }
    },
    Deny: async(params) =>{
        let url = `http://localhost:8080/cnpm/requirement-trainer/${params.id}`
        let response = await axiosClient.delete(url,{data: JSON.stringify(params)});
        return response;
    }
}

export default RequirementAPI