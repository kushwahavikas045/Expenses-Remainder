import React,{useReducer} from 'react'
import styles from './Feedback.module.css';
import { Button, Card } from 'antd';
import UserList from './UserList';
const initReducers = (state, action) =>{
   if(action.type === "VIEW_MESSAGE"){
       return {msg: action.msg, loading:false}
   }
   return{msg: '', loading: true}
}

const Feedback = () => {

    //useReducers
    const[msgData, dispatchMsg] = useReducer(initReducers, {
        msg:'',
        loading: true
    });



    const handleMessage = () =>{
        dispatchMsg({
            type: 'VIEW_MESSAGE',
            msg:'Active user List are is demo.'
        })
    }

    return (
        <div className={styles.container}>
         <div className={styles.flexbox}>
             <div><Button primary onClick={handleMessage}>Load Message</Button></div>
             <div>
                 <Card style={{ width: 300 }}>
                    {msgData.loading ? 'No message found!' : <p>Message: {msgData.msg}</p>}
                </Card>
                </div>
         </div>
         <div className='activeUser'>
             <h3>Active User List:</h3>
             <UserList/>
         </div>

        </div>
    )
}

export default Feedback
