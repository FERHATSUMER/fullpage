import './sidebar.css';
import React, { useState } from 'react';
import { LinkOutlined, LoginOutlined  } from '@ant-design/icons';
import {
  MdAdminPanelSettings,
  MdNotifications,
  MdOutlineSecurity,
} from 'react-icons/md';
import { PiUsersLight, PiExamFill } from 'react-icons/pi';

import { Menu } from 'antd';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Kullanıcı Paneli', '2', <MdAdminPanelSettings />),
  getItem('Dersler ', 'sub1', <PiUsersLight />, [
    getItem('Gruplar', '3'),
    getItem('Tüm Dersler', '4'),
  ]),

  getItem('Sınavlar', 'sub2', <PiExamFill />),
  getItem('Güvenlik', 13, <MdOutlineSecurity />),
  getItem('Bildirimler', 6, <MdNotifications />),

  
];

function Sidebar() {
  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('dark');

  return (
    <div className='sidebar-container'>
      <div className='sidebar-header'>
        <img
          className='sidebar-logo'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbbaEKw0EDx8BuB2TkStKC3nUkH0nefumiw&usqp=CAU'
          alt='logo'
        />
       <h3>Arda Güler</h3>
      </div>

      <div className='sidebar-links'>
        <br />
        <br />
        <Menu
          style={{
            width: 245,
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={mode}
          theme={theme}
          items={items}
        />
      </div>
      <div className='sidebar-footer'>
      <h2>Çıkış Yap</h2>
        <LoginOutlined style={{
            fontSize: '25px',
        }}/>
        </div>
    </div>
  );
}

export default Sidebar;
