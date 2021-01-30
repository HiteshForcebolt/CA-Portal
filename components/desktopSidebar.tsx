import React from 'react';
import {Layout, Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router'
import {
    HomeOutlined,
    CalendarOutlined,
    BarChartOutlined,
    SnippetsOutlined,
    PlusSquareOutlined,
    FileExcelOutlined,
    DesktopOutlined,
    MobileOutlined,
  } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

const desktopSidebar =(props)=>{
  const router = useRouter();
    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed} width={275} style={{height:'100vh'}}>
          <div className="logo" />
          { props.collapsed?
            <img src="/images/logo2.png" style={{height:'30px', width:'50px',margin:'20px'}} />:
            <img src="/images/logo.png" style={{height:'64px',width:'100%',backgroundColor:'white'}} />}

          <Menu theme="dark" mode="inline" defaultSelectedKeys={[router.pathname]}>
            <Menu.Item key="/home" icon={<HomeOutlined />}>
             <Link href="/home"> Home</Link>
            </Menu.Item>
           
            <Menu.Item key="/calender" icon={<CalendarOutlined />}>
            <Link href="/calender">Calender</Link>
            </Menu.Item>
            
            <Menu.Item key="/leave" icon={<BarChartOutlined />}>
            <Link href="/leave"> Leave</Link>
            </Menu.Item>
            <Menu.Item key="/salary" icon={<SnippetsOutlined />}>
            <Link href="/salary">Salary Slip</Link>
            </Menu.Item>
            <Menu.Item key="/reimbursement" icon={<PlusSquareOutlined />}>
            <Link href="/reimbursement">Reimbursement</Link>
            </Menu.Item>
            <Menu.Item key="/attendance" icon={<FileExcelOutlined />}>
            <Link href="/attendance">Manual Attendance</Link>
            </Menu.Item>              
            <SubMenu key="sub1" icon={<DesktopOutlined />} title="Device Management">
            <Menu.Item key="/device"><MobileOutlined />
            <Link href="/device">My Device</Link>
            </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
    );

}

export default desktopSidebar;