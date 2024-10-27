import './main-aside-button.scss';

type Icon = {
    icon: string
}
const MainAsideButton = ({ icon }: Icon) => {
    return (
        <div className='main-aside__img'>
            <img src={icon} alt="icon" />
        </div>
    )
}

export default MainAsideButton;