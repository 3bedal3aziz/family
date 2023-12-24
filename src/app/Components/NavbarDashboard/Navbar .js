// Navbar.js

'use client'
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useAppContext } from '../../context/AppContext';
import { Avatar, Dropdown, Menu, Badge } from 'antd';
import { BellOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import Link from 'next/link';

const Navbar = () => {
  const { toggleSidebar } = useAppContext();

  const userMenu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        <Link href="/profile" passHref>
          <span style={{ cursor: 'pointer' }}>
            Diya Khasawneh
          </span>
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2" icon={<SettingOutlined />}>
        <Link href="/settings">
          <span style={{ cursor: 'pointer' }}>الإعدادات</span>
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" icon={<LogoutOutlined />}>
        <Link href="/logout">
          <span style={{ cursor: 'pointer' }}>تسجيل الخروج</span>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="topbar">
      <div className="toggle" onClick={toggleSidebar}>
        <FaBars />
      </div>

      <div className="notifications">
        <Badge count={5} size="small" offset={[10, 0]}>
          <BellOutlined style={{ fontSize: '18px', color: '#08c' }} />
        </Badge>
      </div>

      <div className="user">
        <Dropdown overlay={userMenu} placement="bottomRight">
          <Avatar src="https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-man-6-940x940.png" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
