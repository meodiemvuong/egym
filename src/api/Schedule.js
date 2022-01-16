import axiosClient from "./axiosClient";

const Schedule = {
    
    changeContent: async(params)=>{
        try{
            let url = `http://localhost:8080/cnpm/period-trainer/${params.id}`;
            console.log(JSON.stringify(params))
            //post lần 1 để lấy thông tin id được khởi tạo                       
            let response = await axiosClient.put(url,JSON.stringify(params));
            
            return response.data;
        } catch(err){
            alert(err.message);
        }
    },
    addTrainerId: async(params)=>{
        try{
            console.log(params)
            let url = 'http://localhost:8080/cnpm/trainer-student';
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
            console.log("click delete")
            console.log(params)
            console.log(JSON.stringify(params));
            
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
    requirement: async(params)=>{
        try{
            let url = `http://localhost:8080/cnpm/requirement-student/${params.id}`;
            console.log(JSON.stringify(params))                    
            let response = await axiosClient.post(url,JSON.stringify(params));
            console.log(response)
            return response.data;
        } catch(err){
            alert(err.message);
        }
    },
    getTrainerStudent: async(url)=>{
        try{              
            let response = await axiosClient.get(url);
            console.log((response.data))
            return response.data;
        } catch(err){
            alert(err.message);
        }
    }
    

    

}
export default Schedule