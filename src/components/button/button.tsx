import './button.scss';

type Icon = {
    icon: string
}
const Button = ({ icon }: Icon) => {
    return (
        <div className='button'>
            <img src={icon} />
        </div>
    )
}

export default Button;