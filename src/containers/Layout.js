import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';


const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
    return(
      <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>{props.children}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content"></div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Corona Plots</Footer>
    </Layout>
    );
}



export default CustomLayout;

