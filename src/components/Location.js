import React from 'react';
import { List, Divider, Card } from 'antd';

const Location = (props) => {
    return(
        <>
        <Divider orientation="left"></Divider>
            <List
              header={<div>Locations</div>}
              footer={<div></div>}
              bordered
              dataSource={props.data}
              renderItem={item => (
                <List.Item >
                    <Card title={item.friendly_name} extra={<a href="/">Info</a>} style={{ width: '100%' }}>
                        <p>{item.county}</p>
                        <p>{item.province_state}</p>
                        <p>{item.region_country}</p>
                        <p>{item.friendly_hash}</p>
                    </Card>
                </List.Item>
              )}
            /></>
    )
}

export default Location;