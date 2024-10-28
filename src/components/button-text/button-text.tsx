import './button-text.scss';

type ButtonText = {
    text: string,
    variant: string,
    close?: (arg: boolean) => void,
}
const ButtonText = ({ text, variant, close }: ButtonText) => {
    
    return (
        <div className={variant} onClick={() => close ? close(true) : () => false}>
            { text }
        </div>
    )
}

export default ButtonText;