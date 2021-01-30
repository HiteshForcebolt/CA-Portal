import React from 'react';
import {Card, Table} from 'antd';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'DOB',
      dataIndex: 'dob',
      key: 'dob',
    },
    {
      title: 'DOJ',
      dataIndex: 'doj',
      key: 'doj',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

const birthday = () => {
    return (
        <Card
            title={
                <div style={{ display: 'flex' }}>
                    <img
                        src="/images/birthday.jpg" style={{ height: '40px', width: '40px' }}
                    />
                    <h2 style={{ marginLeft: '10px' }}>BIRTHDAY'S/ANNIVERSARY</h2>
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

export default birthday;