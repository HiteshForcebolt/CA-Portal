import React from 'react';
import UserLayout from '../../layout/layout';
import {Row,Col} from 'antd';
import Calender from '../../components/calender';
import Leave from '../../components/leave';
import Birthday from '../../components/birthday';
import Holidays from '../../components/holidays';
import Rules from '../../components/rules';

const cards=()=>{
    return (
        <UserLayout>
        <Row gutter={[16,16]}>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12}><Calender /></Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12}><Leave /></Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12}><Birthday /></Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12}><Holidays /></Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12}><Rules /></Col>
        </Row>
        </UserLayout>

    );
}

export default cards;