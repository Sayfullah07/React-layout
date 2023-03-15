import Copyright from './Copyright';
import FooterMenu from './FooterMenu';
import FooterLogo from './FooterLogo';

function Footer() {
    return (
        <div className='footer'>
          <FooterLogo/>
          <FooterMenu/>
          <Copyright/>
        </div>
    );
  };
  
  export default Footer;