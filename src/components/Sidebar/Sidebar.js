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
  getItem('Sınavlar', 'sub2', <PiExamFill />),
  getItem('Güvenlik', 13, <MdOutlineSecurity />),
  getItem('Bildirimler', 6, <MdNotifications />),
  getItem('Dersler ', 'sub1', <PiUsersLight />, [
    getItem('Gruplar', '3'),
    getItem('Tüm Dersler', '4'),
  ]),
  
];

function Sidebar() {
  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('dark');

  return (
    <div className='sidebar-container'>
      <div className='sidebar-header'>
        <img
          className='sidebar-logo'
          src='https://media.licdn.com/dms/image/C560BAQG50mwENt9gSQ/company-logo_400_400/0/1632727910976?e=2147483647&v=beta&t=0w36fnGQ37PWTm253SLL0PVTr2ziC_mzcyO71DlLIDc'
          alt='logo'
        />
       <h3>Kullanıcı Paneli</h3>
      </div>

      <div className='sidebar-links'>
        <br />
        <br />
        <Menu
          style={{
            display: 'flow',
            width: 245,
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={mode}
          theme={theme}
          items={items}
        />
      </div>
  
    </div>
  );
}

export default Sidebar;
