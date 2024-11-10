import './button-icon.scss';

type Icon = {
    icon: string,
    setModalActive?: React.Dispatch<React.SetStateAction<boolean>>,
    modalActive?: boolean,
}
const ButtonIcon = ({ icon, setModalActive, modalActive }: Icon) => {
    
    return (
        <div className='button' onClick={setModalActive ? () => setModalActive(!modalActive) : () => false }>
            <img src={icon} />
        </div>
    )
}

export default ButtonIcon;