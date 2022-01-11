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
                console.log(response.data.error[0]);
            }
        } catch(e){
            alert(e.message);
        }


    },
    getAccount: async(id)=>{
        let url =`/account-student?id=${id}`
        try{
            const response = await axiosClient.get(url);
            //console.log(response)
            if(response.data.error=='null'){
                //console.log("Cap nhat thanh cong");
                console.log(response)
            } else {
                //console.log("Khong thanh cong");
            }
            return response;
        } catch(e){
            alert(e.message);
        }
    }
}
export default userProfileAPI
