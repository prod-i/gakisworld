import React from 'react'
import { Layout, Menu } from 'antd';
import './../../style/admin/admin.css';
import { AppstoreOutlined, PartitionOutlined, BuildOutlined, DotChartOutlined, UserOutlined, ContainerOutlined, FileAddOutlined, DatabaseOutlined, VideoCameraOutlined, VideoCameraAddOutlined, MailOutlined , UploadOutlined } from '@ant-design/icons';
import AdminPanel from './AdminPanels/AdminPanel';
const { Header, Sider, Content } = Layout;


const Admin = (props) => {
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
                <Sider trigger={null} collapsible collapsed={collapsed} className='bE'>
                    <div className="admin_toggle" > {React.createElement(collapsed ? AppstoreOutlined : BuildOutlined, { className: 'admin_toggle_item tRP', onClick: toggleSidebar })}</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[current]} onClick={handleClick} selectedKeys={[current]} className='bE'>
                        <Menu.Item key="analytics"  icon={<DotChartOutlined       />}>  Analytics          </Menu.Item>
                        <Menu.Item key="control"    icon={<PartitionOutlined      />}>  Control            </Menu.Item>
                        <Menu.Item key="users"      icon={<UserOutlined           />}>  Users              </Menu.Item>
                        <Menu.Item key="serials"    icon={<VideoCameraOutlined    />}>  Serials            </Menu.Item>
                        <Menu.Item key="addSerials" icon={<VideoCameraAddOutlined />}>  Add content        </Menu.Item>
                        <Menu.Item key="news"       icon={<ContainerOutlined      />}>  News               </Menu.Item>
                        <Menu.Item key="addNews"    icon={<FileAddOutlined        />}>  Add new            </Menu.Item>
                        <Menu.Item key="servers"    icon={<DatabaseOutlined       />}>  Servers            </Menu.Item>
                        <Menu.Item key="report"     icon={<MailOutlined           />}>  Report             </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout bB">

                    {/* <Header className="site-layout-background bcgB" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, { className: 'toggle', onClick: toggleSidebar })}
                    </Header> */}

                    <Content className="site-layout-background_content">
                        <AdminPanel 
                            PanelID={current} 
                            usersList={props.usersList}
                        />
                    </Content>

                </Layout>
            </Layout>
        </div>
    )
}

export default Admin
