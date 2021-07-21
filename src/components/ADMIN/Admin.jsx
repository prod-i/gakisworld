import React from 'react'
import { Layout, Menu } from 'antd';
import './../../style/admin/admin.css';
import { AppstoreOutlined, PartitionOutlined, BuildOutlined, DotChartOutlined, UserOutlined, ContainerOutlined, FileAddOutlined, DatabaseOutlined, VideoCameraOutlined, VideoCameraAddOutlined, MailOutlined } from '@ant-design/icons';
import AdminPanel from './AdminPanels/AdminPanel';
const { Sider, Content } = Layout;


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
                        <Menu.Item key="analytics"  className='tA' icon={<DotChartOutlined       />}>  Analytics          </Menu.Item>
                        <Menu.Item key="control"    className='tA' icon={<PartitionOutlined      />}>  Control            </Menu.Item>
                        <Menu.Item key="users"      className='tA' icon={<UserOutlined           />}>  Users              </Menu.Item>
                        <Menu.Item key="serials"    className='tA' icon={<VideoCameraOutlined    />}>  Serials            </Menu.Item>
                        <Menu.Item key="addSerials" className='tA' icon={<VideoCameraAddOutlined />}>  Add content        </Menu.Item>
                        <Menu.Item key="news"       className='tA' icon={<ContainerOutlined      />}>  News               </Menu.Item>
                        <Menu.Item key="addNews"    className='tA' icon={<FileAddOutlined        />}>  Add new            </Menu.Item>
                        <Menu.Item key="servers"    className='tA' icon={<DatabaseOutlined       />}>  Servers            </Menu.Item>
                        <Menu.Item key="report"     className='tA' icon={<MailOutlined           />}>  Report             </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout bB">

                    <Content className="site-layout-background_content">
                        <AdminPanel 
                            PanelID         ={current} 
                            usersList       ={props.usersList}
                            catalogList     ={props.catalogList}
                            newsList        ={props.newsList}
                            changePost      ={props.changePost}
                        />
                    </Content>

                </Layout>
            </Layout>
        </div>
    )
}

export default Admin
