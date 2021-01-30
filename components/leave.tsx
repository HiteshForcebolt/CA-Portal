import React from 'react';
import { Card, Button } from 'antd';

const leave = () => {
    return (
        <Card
            title={
                <div style={{ display: 'flex' }}>
                    <img
                        src="/images/leave.png" style={{ height: '40px', width: '40px' }}
                    />
                    <h2 style={{ marginLeft: '10px' }}>LEAVE</h2>
                </div>
            }
            bordered={false} style={{
                width: '100%',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                padding: '20px'
            }}>
            <div style={{ textAlign: 'center' }}>
                <div><h2 style={{ color: '#0398fc' }}>QUARTERLY LEAVE TAKEN</h2></div>
                <div>
                    <div style={{ textAlign: 'center', fontSize: '1.5em' }}>
                        <h1>0</h1>
                    </div>
                </div>
                <div>
                    <Button type="primary" style={{ borderRadius: '20px', marginTop: '30px' }}>Apply Leave</Button>
                </div>
            </div>
        </Card>
    );
}

export default leave;