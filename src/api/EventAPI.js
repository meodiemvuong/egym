import axiosClient from "./axiosClient";

const getEvent = {

    addEvent: async(params)=>{
        try{
            let url = 'http://localhost:8080/cnpm/event';
            //post lần 1 để lấy thông tin id được khởi tạo                       
            let response = await axiosClient.post(url,params);
            
            return response.data;
        } catch(err){
            alert(err.message);
        }
    },
    deleteEvent: async(params)=>{
        try{
            
            let url = 'http://localhost:8080/cnpm/event';
            let response = await axiosClient.delete(url,{data: JSON.stringify(params)})
            return response
        } catch(e){
            alert(e.message)
        }
    },

    updateEvent: async(params)=>{
        let url ='/event'
        console.log(params)
        try{
            const response = await axiosClient.put(url,JSON.stringify(params));
            console.log(JSON.stringify(params))
            if(response.data.error=='null'){
                console.log("Cap nhat thanh cong");
            } else {
                console.log("Khong thanh cong");
            }

        } catch(e){
            alert(e.message);
            
        }

    },
    addReview: async(params)=>{
        try{
            let url = `http://localhost:8080/cnpm/review-student/${params.id}`;
            //post lần 1 để lấy thông tin id được khởi tạo                       
            let response = await axiosClient.post(url,JSON.stringify(params));
            
            return response.data;
        } catch(err){
            alert(err.message);
        }
    },
    

    

}
export default getEvent