import React from 'react';
import {PageHeader} from 'antd';
const Header = ({title, subtitle}) => {


    return (
        <PageHeader
            title={title}
            subTitle={subtitle}
          />
    )
}

export default Header
