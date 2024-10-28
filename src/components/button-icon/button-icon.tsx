import './button-icon.scss';

type Icon = {
    icon: string,
}
const ButtonIcon = ({ icon }: Icon) => {
    
    return (
        <div className='button'>
            <img src={icon} />
        </div>
    )
}

export default ButtonIcon;