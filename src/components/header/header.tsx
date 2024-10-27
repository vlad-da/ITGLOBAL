import './header.scss';
import Logo from "../logo/logo";
import Search from "../search/search";
import Button from "../button/button";
import User from "../user/user";
import Cogwheel from '../../assets/icons/cogwheel.svg';
import SearchIcon from '../../assets/icons/search.svg';
import Slide from '../../assets/sidebar/slide.svg'
import MainAsideButton from '../main-aside-button/main-aside-button';
const Header = () => {
    return (
        <div className='header'>
            <div className='header__slide'>
                <MainAsideButton icon={Slide} />
            </div>
            <Logo />
            <div className='header__search'>
                <Search icon={SearchIcon} width={'18.5rem' }/>
            </div>
            
            <User />
            <Button icon={Cogwheel} />
        </div>
    )
}

export default Header;