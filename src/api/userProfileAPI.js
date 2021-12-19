import axiosClient from "./axiosClient"


const userProfileAPI = {
    
    getProfile: async (id) => {
        try {
            let url = `/trainer?id=${id}`;
            if(localStorage.getItem('role') != 'trainer'){
                url = `/student?id=${id}`;
            }
            
            
            let response = await axiosClient.get(url);         
            //console.log(typeof(response))

            
            //console.log(response.data.data[0]);
            return response;
        } catch (error) {
            alert(error.message)
        }
    },
    

    // getProfileTrainer: async () => {
    //     try{
    //     let url = '/trainer';
    //     let response = await axiosClient.get(url);
    //     //console.log(response.data.data)
    //     return response
        
    // } catch(e) {
    //     alert(e.message)
    // }

}
export default userProfileAPI
