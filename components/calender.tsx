import React from 'react';
import {Card, Button} from 'antd';

const calender =()=>{
    return (
        <Card 
                title={
                  <div style={{display:'flex'}}> 
                  <img
                  src="/images/calender.png" style={{height:'40px',width:'40px'}}
                />
                <h2 style={{marginLeft:'10px'}}>CALENDER</h2>
                </div>
               }
               bordered={false} style={{ width: '100%',
               boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                padding:'20px'
               }}>
                
                <div style={{textAlign:'center'}}>
                    <div><h2 style={{color:'#0398fc'}}>27 JAN 2021 (WED)</h2></div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                      <div>
                        <h2>10:53 AM</h2>
                        <p>PUNCH-IN</p>
                      </div>
                      <div>
                        <h2>00:00</h2>
                        <p>PUNCH-OUT</p>
                      </div>
                    </div>
                    <div>
                    <Button type="primary" style={{borderRadius:'20px'}}>Calender</Button>
                    </div>
                </div>

              </Card>
    );
}

export default calender;