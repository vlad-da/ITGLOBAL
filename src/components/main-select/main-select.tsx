import './main-select.scss';
import Close from '../../assets/icons/close-x.svg'
import MicroClose from '../../assets/icons/micro-close.svg'
import SearchShown from '../../assets/icons/search-shown.svg'
import Plus from '../../assets/icons/plus.svg'
import Calendar from '../../assets/icons/calendar.svg'
import Button from '../button/button';
const MainSelect = ({data}) => {
    console.log(data);
    
    return (
        <div className='main-form-select'>
            <div className='main-form-select__title'>{data.name}</div>
            <div className="main-form-select__wrapper">
                <div className='main-form-select__list'>
                    {data.people.map(item => (
                        <div className='main-form-select__item'>
                            <div className="main-form-select__item-title">
                                {item.name}
                            </div>
                            {item.close && (
                                <div className="main-form-select__item-img">
                                <img src={Close} alt="" />
                            </div>
                            )}
                            
                        </div>
                    ))}
                    <button className='main-form-select__button'>
                        <img src={MicroClose} alt="close" />
                    </button>
                </div>
                {data.plusBtn && <Button icon={Plus} />}
                {data.searchBtn && <Button icon={SearchShown} />}
                {data.calendarBtn && <Button icon={Calendar} />}
            </div>
            
    </div>
        
    )
}

export default MainSelect;