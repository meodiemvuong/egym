import React from "react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import styles from './Requirement.module.css'
import Schedule from "../../api/Schedule";
function Requirement(id, scheId, cate){
    let [req,setReq] = useState({
        id: parseInt(id),
        category: 1,
        newTime:{
            start: "05:00",
            finish: "06:00",
            dayOfWeek: 2
        }
        
    });
    let [loginFalse, setLoginFalse] = useState(false);
    let [err, setErr] = useState(null)
    let [finish, setFinish]= useState("");
    let [start, setStart]= useState("");
    let [ud, setUd] = useState(false)
    let [newTime, setNewTime] = useState({
        
    })
    let [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        if (showPopup) {
            var id1 = setTimeout(() => {
                setShowPopup(prev => !prev);
            }, 1000)
        }
        return () => {
            clearTimeout(id1);
        }
    }, [showPopup])
    if(ud){
        setNewTime({...newTime,finish:finish})
        if(scheId!==undefined && cate!==-1){
            
            setReq({...req, newTime,scheduleId: scheId,category:0});
        } 
        else{
            setReq({...req, newTime});
        }
        
        setUd(false)
    }
    const handleAddRequire = async(e)=>{
        console.log(req)
        setShowPopup(prev => !prev)
        const response = await Schedule.requirement(req)
        if(response.error[0]!=null){
            setErr(response.error[0]);
            setLoginFalse(true);
        }else{
            window.location.reload();
        }
    }
    const handleDelete = async(e)=>{
        let p = {category:-1,scheduleId:scheId,id: parseInt(id)}
        setShowPopup(prev => !prev)
        const response = await Schedule.requirement(p)
        if(response.error[0]!=null){
            setErr(response.error[0]);
            setLoginFalse(true);
        }else{
            window.location.reload();
        }
        console.log(loginFalse)
    }
    // console.log(req)
    return (
        <div className="grid">
                {!cate &&<div className="row">
                    <div className="col l-6">
                        <div className={clsx(styles.content)}>
                        <b className={clsx(styles.inforText)}>Thứ</b>
                            <div className={clsx(styles.contentField)}>
                                
                                <select
                                        className={clsx(styles.inforText)}
                                        name="dayOfWeek"
                                        id="dayOfWeek"
                                        placeholder="Thứ trong tuần"
                                        onChange={(e) => {
                                            const dayOfWeek = parseInt(e.target.value);
                                            setNewTime({...newTime, dayOfWeek})
                                            setUd(true);
                                            // setUserState({ ...userState, password });
                                        }}
                                    >
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        
                                    </select>
                                
                            </div>
                            

                            <div className={clsx(styles.content)}>
                            <b className={clsx(styles.inforText)}>Bắt đầu</b>
                                <div className={clsx(styles.contentField)}>

                            
                                <select
                                        className={clsx(styles.inforText)}
                                        name="start"
                                        id="start"
                                        placeholder="Bat dau"
                                        onChange={(e) => {
                                            let start = e.target.value;
                                            let finish ;
                                            
                                            setStart(start)
                                            if(start[0]==='0'){
                                                setFinish(('0'+(parseInt(start[0])*10+parseInt(start[1])+1)+":00"))
                                                finish =('0'+(parseInt(start[0])*10+parseInt(start[1])+1)+":00");
                                            }
                                            else{
                                                setFinish(((parseInt(start[0])*10+parseInt(start[1])+1)+":00"))
                                                finish = ((parseInt(start[0])*10+parseInt(start[1])+1)+":00")
                                            }
                                            setNewTime({...newTime, start,finish})
                                            setUd(true);
                                            
                                            
                                            // setUserState({ ...userState, password });
                                        }}
                                    >
                                        <option>05:00</option>
                                        <option>06:00</option>
                                        <option>07:00</option>
                                        <option>08:00</option>
                                        <option>09:00</option>
                                        <option>10:00</option>
                                        <option>11:00</option>
                                        <option>12:00</option>
                                        <option>13:00</option>
                                        <option>14:00</option>
                                        <option>15:00</option>
                                        <option>16:00</option>
                                        <option>17:00</option>
                                        <option>18:00</option>
                                        <option>19:00</option>
                                        
                                    </select>
                            </div>
                            </div>
                            <div className={clsx(styles.content)}>
                            <b className={clsx(styles.inforText)}>Kết thúc</b>
                                <div className={clsx(styles.contentField)}>
                                <select
                                        className={clsx(styles.inforText)}
                                        name="finish"
                                        disabled={false}
                                        id="finish"
                                        value={finish}
                                    >
                                        
                                        <option>06:00</option>
                                        <option>07:00</option>
                                        <option>08:00</option>
                                        <option>09:00</option>
                                        <option>10:00</option>
                                        <option>11:00</option>
                                        <option>12:00</option>
                                        <option>13:00</option>
                                        <option>14:00</option>
                                        <option>15:00</option>
                                        <option>16:00</option>
                                        <option>17:00</option>
                                        <option>18:00</option>
                                        <option>19:00</option>
                                        <option>20:00</option>
                                        
                                    </select>
                            </div>
                            </div>
                            {loginFalse && <h2 className="login-false">{err}</h2>}
                        </div>
                    </div>
                    <div className="col l-4">
                        <div className={clsx(styles.content)}>
                            <div className={clsx(styles.contentField)}>
                                
                                
                                <button
                                    onClick={() => {
                                        handleAddRequire();
                
                                    }}
                                    className={clsx(styles.trainerAddBtn)}>
                                    Gửi yêu cầu
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
}
{
    cate && <div className="col l-4">
    <div className={clsx(styles.content)}>
        <div className={clsx(styles.contentField)}>
            
            {loginFalse && <h2 className="login-false">{err}</h2>}
            <button
                onClick={() => {
                    setUd(true);
                    handleDelete();
                    
                }}
                className={clsx(styles.trainerAddBtn)}>
                Gửi yêu cầu
            </button>
        </div>
    </div>

</div>
}
            </div>
    )
}

export default Requirement