import React from 'react'
import { Layout, Menu } from 'antd';
import './../../style/admin/admin.css';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

const Admin = () => {
    const [collapsed, setCollapsed] = React.useState(true);
    const [current, setCurrent] = React.useState(1);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    }
    const handleClick = (e) => {
        setCurrent(e.key);
    }
    console.log('current ' + current);
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} className='bcgB'>
                <div className="logo" ></div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[current]} onClick={handleClick} selectedKeys={[current]} className='bcgB'>
                    <Menu.Item key="1" icon={<UserOutlined />}>  Main        </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>  Add serials </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>  Users       </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout bcg">

                <Header className="site-layout-background bcgB" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, { className: 'toggle', onClick: toggleSidebar })}
                </Header>

                <Content className="site-layout-background_content">
                    {current}
                </Content>

            </Layout>
        </Layout>
    )
}

export default Admin
