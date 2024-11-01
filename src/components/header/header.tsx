import './header.scss';
import Logo from "../logo/logo";
import Search from "../search/search";
import ButtonIcon from "../button-icon/button-icon";
import User from "../user/user";
import Cogwheel from '../../assets/icons/cogwheel.svg';
import SearchIcon from '../../assets/icons/search.svg';
import Slide from '../../assets/sidebar/slide.svg'
const Header = () => {
    return (
        <div className='header'>
            <div className='header__slide'>
                <img src={Slide} alt="slide" />
            </div>
            <Logo />
            <div className='header__search'>
                <Search icon={SearchIcon} width={'18.5rem' }/>
            </div>
            
            <User />
            <ButtonIcon icon={Cogwheel} />
        </div>
    )
}

export default Header;