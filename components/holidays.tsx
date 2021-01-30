import React from 'react';
import {Card, Table} from 'antd';

const columns = [
    {
      title: 'Holiday',
      dataIndex: 'holiday',
      key: 'holiday',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
    },
  ];

const holidays = () => {
    return (
        <Card
            title={
                <div style={{ display: 'flex' }}>
                    <img
                        src="/images/holidays.jpg" style={{ height: '40px', width: '40px' }}
                    />
                    <h2 style={{ marginLeft: '10px' }}>UPCOMING HOLIDAYS</h2>
                </div>
            }
            bordered={false} style={{
                width: '100%',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                padding: '20px'
            }}>
            <Table columns={columns} />;
        </Card>
    );
}

export default holidays;