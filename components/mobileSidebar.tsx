import { Drawer, Menu  } from 'antd';
import {
    HomeOutlined,
    CalendarOutlined,
    BarChartOutlined,
    SnippetsOutlined,
    PlusSquareOutlined,
    FileExcelOutlined,
    DesktopOutlined,
    MobileOutlined,
    MenuOutlined
  } from '@ant-design/icons';

const { SubMenu } = Menu;

const mobileSidebar =(props)=> {

    return (
      <>
       <Drawer
          title={<img src="/images/logo2.png" style={{height:'30px', width:'50px',margin:'auto 40%'}} />}
          placement={props.placement}
          closable={props.visible}
          onClose={props.onClose}
          visible={props.visible}
          key={props.place}
        >

          <Menu mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<CalendarOutlined />}>
              Calender
            </Menu.Item>
            <Menu.Item key="3" icon={<BarChartOutlined />}>
              Leave
            </Menu.Item>
            <Menu.Item key="4" icon={<SnippetsOutlined />}>
              Salary Slip
            </Menu.Item>
            <Menu.Item key="5" icon={<PlusSquareOutlined />}>
              Reimbursement
            </Menu.Item>
            <Menu.Item key="6" icon={<FileExcelOutlined />}>
              Manual Attendance
            </Menu.Item>              
            <SubMenu key="sub1" icon={<DesktopOutlined />} title="Device Management">
            <Menu.Item key="8"><MobileOutlined />My Device</Menu.Item>
            </SubMenu>
          </Menu>
          
        </Drawer>
      </>
    );
  
}

export default mobileSidebar;