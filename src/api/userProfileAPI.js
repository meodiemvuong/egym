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

    updateProfile: async(params) => {
        let url ='/trainer'
        if(localStorage.getItem('role')!='trainer'){
            url = '/student';
        }

        try{
            const response = await axiosClient.put(url,(params));
            console.log(response)
            if(response.data.error=='null'){
                console.log("Cap nhat thanh cong");
            } else {
                console.log("Khong thanh cong");
            }
        } catch(e){
            alert(e.message);
        }


    }
    

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
