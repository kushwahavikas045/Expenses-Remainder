import React from 'react';
import { Result, Button } from 'antd';
import {useNavigate} from 'react-router-dom';

const Errorui = () => {
const navigate = useNavigate();

const checkEvt = () =>{

    navigate('/formik');
    window.location.reload();
}

    return (
        <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
            extra={<Button type="primary" onClick={checkEvt}>Back Home</Button>}
        />
    )
}

export default Errorui;
