import React from 'react';
import {Card, Button} from 'antd';

const rules = () => {
    return (
        <Card
            title={
                <div style={{ display: 'flex' }}>
                    <img
                        src="/images/rules.jpg" style={{ height: '40px', width: '40px' }}
                    />
                    <h2 style={{ marginLeft: '10px' }}>COMPANY RULES</h2>
                </div>
            }
            bordered={false} style={{
                width: '100%',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                padding: '20px'
            }}>
            <ol type="1">
                <li> 9 Hours Daily is Mandatory for everyone in the Company.</li>
                <li>Saturday is half-day (those who completed training period) means 5hr is mandatory.</li>
            </ol>
            <div style={{ textAlign: 'center' }}>

                <Button type="primary" style={{ borderRadius: '20px' }}>Show More</Button>
            </div>
        </Card>

    );
}

export default rules;