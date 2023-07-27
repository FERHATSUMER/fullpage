import './header.css';
import {
  BellOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  LoginOutlined,
} from '@ant-design/icons';

const Header = () => {
  return (
    <header className='header-container'>
      <img
        className='logo'
        src='https://media.licdn.com/dms/image/D4D03AQFMfnp5H1M-vA/profile-displayphoto-shrink_800_800/0/1667210919849?e=2147483647&v=beta&t=SL-bp4f4k3ElkP3ot_ahz2KSGT-uH9OeKbtvYwBTajw'
        alt='logo'
      />
      <nav className='nav'>
        <ul>
          <li>
            <LinkedinOutlined />
            <a href='https://www.linkedin.com/in/ferhatsumer/' target='_blank'>
              <h4>Linkedin</h4>
            </a>
          </li>
          <li>
            <BellOutlined />
            <h4>Bildirimler</h4>
          </li>
          <li>
            <LoginOutlined />
            <h4>Çıkış Yap</h4>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
