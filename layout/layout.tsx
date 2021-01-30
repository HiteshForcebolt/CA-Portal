import React,{useState} from 'react';
import { Layout, Grid} from 'antd';
import "antd/dist/antd.css";
import DesktopSidebar  from '../components/desktopSidebar';
import MobileSidebar from '../components/mobileSidebar';
import Head from '../components/head';
import Foot from '../components/footer';



const {Content } = Layout;
const {useBreakpoint } = Grid;

 const layout =({children})=>{
    
    const screen = useBreakpoint();
    const [collapsed,setCollapsed]=useState(false);

    const toggle=()=>{
      setCollapsed(!collapsed);
    } 

    const [showMobileSidebar,setMobileSidebar]=useState({visible:false, placement:'left'});
  

    const showDrawer=()=>{
        setMobileSidebar({visible:true, placement:'left'});
    }

    const onClose=()=>{
        setMobileSidebar({visible:false, placement:'left'});
    }

    const onChange=()=>{
        setMobileSidebar({visible:true, placement:'left'});
    }

    return (
        <Layout style={{height:"100vh",overflow:'hidden'}}>


            { screen['lg'] ? <DesktopSidebar collapsed={collapsed} />:<MobileSidebar 
                placement={showMobileSidebar.placement}
                closable={showMobileSidebar.visible}
                onClose={onClose}
                visible={showMobileSidebar.visible}
                place={showMobileSidebar.placement}
               
            /> }

            <Layout className="site-layout">
                <Head clicked={toggle}  show={showDrawer} />           
            

            <Content className="site-layout-background"
                style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: '280',
                overflowY:'auto',
                }}>
                    {children}
    
            </Content>
            <Foot />
        </Layout>
        </Layout>
        
    );
}

export default layout;