import React from 'react'
import { Layout, Menu } from 'antd';
import './../../style/admin/admin.css';
import { MenuUnfoldOutlined, MenuFoldOutlined,DotChartOutlined , UserOutlined,ContainerOutlined , VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import AdminPanelContent from './AdminPanels/AdminPanelContent';
const { Header, Sider, Content } = Layout;

const Admin = () => {
    const [collapsed, setCollapsed] = React.useState(true);
    const [current, setCurrent] = React.useState('analytics');

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    }
    const handleClick = (e) => {
        setCurrent(e.key);
    }
    return (
        <div className="admin">
            <Layout className='admin_layout'>
                <Sider trigger={null} collapsible collapsed={collapsed} className='bcgB'>
                    <div className="logo" ></div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[current]} onClick={handleClick} selectedKeys={[current]} className='bcgB'>
                        <Menu.Item key="analytics" icon={<DotChartOutlined    />}>  Analytics </Menu.Item>
                        <Menu.Item key="users"     icon={<UserOutlined        />}>  Users     </Menu.Item>
                        <Menu.Item key="serials"   icon={<VideoCameraOutlined />}>  Serials     </Menu.Item>
                        <Menu.Item key="news"      icon={<ContainerOutlined   />}>  News    </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout bcg">

                    <Header className="site-layout-background bcgB" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, { className: 'toggle', onClick: toggleSidebar })}
                    </Header>

                    <Content className="site-layout-background_content">
                        <AdminPanelContent PanelID={current}/>
                    </Content>

                </Layout>
            </Layout>
        </div>
    )
}

export default Admin
