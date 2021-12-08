import React from 'react'
import { Switch } from 'antd';
const Switchs = ({setToggle}) => {
    const onChange = (value) =>{
        setToggle(value);
    }
    return <Switch onChange={onChange} checkedChildren="Close" unCheckedChildren="Open"/>
}

export default Switchs;
