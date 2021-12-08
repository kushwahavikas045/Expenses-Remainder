import React from 'react';
import {Select} from 'antd';
import Grid from './Grid';

const {Option} = Select;

const SelectDropdown = ({filter}) => {

    const flexbox = {
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
    }

    const handleSelect = (value) =>{
        filter(value);
    }
    return (
        <Grid>
            <div style={flexbox}>
                <div>
                    <h4>Fliter By Year:</h4>
                </div>
                <div>
        <Select defaultValue="2021" style={{ width: 120 }} onChange = {handleSelect}>
            <Option value="2019">2019</Option>
            <Option value="2020">2020</Option>
            <Option value="2021">
                2021
            </Option>
            <Option value="2022">2022</Option>
        </Select>
        </div>
        </div>
        </Grid>
    )
}

export default SelectDropdown
