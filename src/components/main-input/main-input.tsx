import './main-input.scss';
import Button from '../button/button';
import SearchShown from '../../assets/icons/search-shown.svg'
import Plus from '../../assets/icons/plus.svg'
import Calendar from '../../assets/icons/calendar.svg'

const MainInputRow = ({data}) => {
    return (
        <>
            <div className='main-input'>
                <label className={`main-input__label ${data.required && 'main-input__required'}`}>
                    {data.name}
                </label>
                <div className='main-input__wrapper'>
                    <input className='main-input__input' type="text"  required={data.required} defaultValue={data.value} />
                    {data.plusBtn && <Button icon={Plus} />}
                    {data.searchBtn && <Button icon={SearchShown} />}
                    {data.calendarBtn && <Button icon={Calendar} />}
                </div>
                
                
            </div>
            
            
        </>
        
    )
}

export default MainInputRow;