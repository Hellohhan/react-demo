import { useNavigate } from 'react-router-dom'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import './layout.css'
import React, { useState } from 'react';
import Logo from './../assets/logo.jpg'

const { Header, Sider, Content } = Layout;

const MyLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{ width: '100vw', height: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logoImg">
                    <img src={Logo} alt="" />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={({ key }) => {
                        //console.log(key)
                        navigate(key)
                    }}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: '学生管理',
                            children: [
                                {
                                    label: '学生分类',
                                    key: '/admin/student_type'
                                },
                                {
                                    label: '学生列表',
                                    key: '/admin/student_list'
                                }
                            ]
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: '班级管理',
                            children: [
                                {
                                    label: '班级分类',
                                    key: '/admin/class_type'
                                },
                                {
                                    label: '班级列表',
                                    key: '/admin/class_list'
                                }
                            ]
                        },
                        {
                            key: '/admin/course-menu',
                            icon: <UploadOutlined />,
                            label: '课程管理',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};
export default MyLayout;