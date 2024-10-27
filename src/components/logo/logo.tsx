import logo from '../../assets/logo/logo.svg';
import './logo.scss';
const Logo = () => {
    return (
        <div className='logo'>
            <a href="#">
                <img src={logo} alt="logo" />
            </a>
        </div>
    )
}

export default Logo;