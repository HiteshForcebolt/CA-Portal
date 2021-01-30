import React from 'react';
import { Layout, Dropdown, Avatar, Grid,Menu, Row, Col } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    EditOutlined,
    DingdingOutlined,
    MenuOutlined
  } from '@ant-design/icons';
//import "../contents/node_modules/antd/dist/antd.css";

const { Header} = Layout;
const {useBreakpoint } = Grid;
const menu = (
    <Menu>
      <Menu.Item icon={<EditOutlined />}>
        <a target="_blank" rel="noopener noreferrer" href="#">
          Profile
        </a>
      </Menu.Item>
      <Menu.Item danger icon={<DingdingOutlined />}>
        <a target="_blank" rel="noopener noreferrer" href="#" style={{color:'red'}}>
          Logout
        </a>
      </Menu.Item>
  
    </Menu>
  );

const header =(props)=>{

  const screen  = useBreakpoint();
  console.log("header Click : ",props.Clicked)
    return (
        <Header className="site-layout-background">
            <Row>
               { !screen['lg'] ? 
                <Col span={10}><MenuOutlined onClick={props.show}/> </Col>:                 
                <Col span={10}>
                    {props.collapsed ?
                    <MenuUnfoldOutlined className={"trigger" } onClick={props.clicked}/>:
                    <MenuFoldOutlined className={"trigger" } onClick={props.clicked}/>}
                </Col>
                     }
                <Col span={12}>
                    <h1 style={{color:'#0398fc',fontSize:'2vw'}}>HITESH KUMAR</h1>
                </Col>
                <Col span={2}>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <Avatar size="large" icon={<UserOutlined />} /></a>
                    </Dropdown>
                </Col>
          </Row>
        </Header>
    );
}

export default header;