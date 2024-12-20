import './main-input.scss';
import ButtonIcon from '../button-icon/button-icon';
import SearchShown from '../../assets/icons/search-shown.svg'
import Plus from '../../assets/icons/plus.svg'
import Calendar from '../../assets/icons/calendar.svg'



type Item = {
    name : string,
    type?: string,
    required: boolean,
    plusBtn: boolean,
    searchBtn: boolean,
    calendarBtn: boolean,
    value: string,
}

type Data = {
    data: Item;
}

const MainInput = ({data}:Data) => {
    return (
        <>
            <div className='main-input'>
                <label className={`main-input__label ${data.required && 'main-input__required'}`}>
                    {data.name}
                </label>
                <div className='main-input__wrapper'>
                    <input className='main-input__input' type="text"  required={data.required} defaultValue={data.value} />
                    {data.plusBtn && <ButtonIcon icon={Plus} />}
                    {data.searchBtn && <ButtonIcon icon={SearchShown} />}
                    {data.calendarBtn && <ButtonIcon icon={Calendar} />}
                </div>
                
                
            </div>
            
            
        </>
        
    )
}

export default MainInput;