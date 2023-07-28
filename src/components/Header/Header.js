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
        src='https://media.licdn.com/dms/image/C560BAQG50mwENt9gSQ/company-logo_400_400/0/1632727910976?e=2147483647&v=beta&t=0w36fnGQ37PWTm253SLL0PVTr2ziC_mzcyO71DlLIDc'
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
