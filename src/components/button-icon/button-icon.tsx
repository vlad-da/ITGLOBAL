import './button-icon.scss';

type Icon = {
    icon: string,
    setModalActive?: (arg: boolean) => void
}
const ButtonIcon = ({ icon, setModalActive }: Icon) => {
    
    return (
        <div className='button' onClick={setModalActive ? () => setModalActive(false) : () => false }>
            <img src={icon} />
        </div>
    )
}

export default ButtonIcon;