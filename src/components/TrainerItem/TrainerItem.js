import { render } from '@testing-library/react';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import './TrainerItem.css'





function TrainerItem() {

    const [items, setItems] = useState([])
    let url=`http://localhost:8080/cnpm/trainer`;
    useEffect(() => {

    fetch(url)
        .then (response =>response.json())
        .then (data => setItems(data.data))
    },[]);

    // console.log(items)

        return (
            <div className="row">                              
                    {items.map((item, index) =>
                            <div key ={index} classname="col-md-12">
                                
                                {localStorage.setItem('role',"trainer")}
                                <Link to={`detail/${item.id}`} className="trainer-link" onClick={()=>{localStorage.setItem('IDT',item.id);console.log("hello")}} >
                                
                                    <div className="col">
                                    <div className="trainer-wrapper ">
                                        
                                        <div className="trainer-infor" >
                                            <div className="trainer-name col">{item.name}</div>
                                            <div className="trainer-age col">{item.id}</div>
                                        </div>
                                    </div>
                                    </div>
                                </Link>
                            </div>
                    
                    )}
            </div>
                )
        
    


    
}
    
    // start();

   
    // function renderCourse(items){
    //     var ListTrainer = document.querySelector('list-trainer');
    //     //console.log(res)
        
    //     var htmls = items.map(function(item){
    //         return `
    //         <li>
    //             <h4>${item.name}</h4>
    //         </li>
    //         `;
            
            
    //     }
        
    //     ) ;
    //     // /ListTrainer.innerHTML = htmls.join('');
        
    // }
    // console.log(trainers)
    // return (
    //     <div className='list-trainer' id="list-trainer">
    //         <h2>Danh sach hlv</h2>
    //         {}
            
            
    //     </div>
    //         )
    //     }        
    



    
    // useEffect(() => {
    //     (async () => {
    //         let response = await userProfileAPI.getProfileTrainer().then(response=>setData(response.data));
            
    //     })()
    // }, [])
    
    
    // console.log(res)
    // //let url = `detail/${userProfile.data[0].id}`
    // function List(res){
    //     let index = 0;
    //     const listitems = res.data.map((index)=>{
    //         <div className="contrainer">
    //                             <div className="section">
    //                                 <div className="image-wrapper">
    //                                     {/* <img className="image_link" src={element.data[index].name} alt="" onClick={()=>{
    //                                          window.open('#');
    //                                     }}/>       */}
    //                                     Họ tên: {res.data[index].name}
    //                                 </div>
    //                                 <div className="info-wrapper">
    //                                     <div className="int">
    //                                         ID: {res.data[index].id}
    //                                     </div>
                                        
    //                                 </div>
    //                             </div>
    //         </div>
    //     })
    //     if(res){index++}
    //     return listitems}
    //     List(res);

    // //     return (
    // //         <div className="contrainer">
    // //             <div className="section">
                                    // <div className="image-wrapper">
                                    //     {/* <img className="image_link" src={element.data[index].name} alt="" onClick={()=>{
                                    //          window.open('#');
                                    //     }}/>       */}
                                    //     Họ tên: {res.data[index].name}
                                    // </div>
                                    // <div className="info-wrapper">
                                    //   <div className="int">
                                    //         ID: {res.data[index].id}
                                    //     </div>
                                        
                                    // </div>
    // //                             </div>
    // //         </div>
    // //     )
    // // }
    
    
    // return List(res)
    //     // <div className="col l-3 m-4 c-6">
    //     //     <Link to= 'detail/1' className="trainer-link">
    //     //         <div className="trainer-wrapper">
    //     //             {                       
    //     //                         <div className="section">
    //     //                             <div className="image-wrapper">
    //     //                                 {/* <img className="image_link" src={element.data[index].name} alt="" onClick={()=>{
    //     //                                      window.open('#');
    //     //                                 }}/>       */}
    //     //                                 Họ tên: {res.data[0].name}
    //     //                             </div>
    //     //                             <div className="info-wrapper">
    //     //                               <div className="int">
    //     //                                     ID: {res.data[0].id}
    //     //                                 </div>
                                        
    //     //                             </div>
    //     //                         </div>
                            
                        
    //     //                 }
                        
                    
                   
    //     //         </div>
    //     //     </Link>
    //     // </div>

export default TrainerItem
