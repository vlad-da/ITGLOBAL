import './main-select.scss';
import Close from '../../assets/icons/close-x.svg'
import MicroClose from '../../assets/icons/micro-close.svg'
import SearchShown from '../../assets/icons/search-shown.svg'
import Plus from '../../assets/icons/plus.svg'
import Calendar from '../../assets/icons/calendar.svg'
import ButtonIcon from '../button-icon/button-icon';


type People = {
    name : string,
    close: boolean,
}

type Item = {
    name : string,
    type?: string,
    required: boolean,
    plusBtn: boolean,
    searchBtn: boolean,
    calendarBtn: boolean,
    value?: string,
    people: People[],
}

type Data = {
    data: Item;
}

const MainSelect = ({data}:Data) => {
    
    return (
        <div className='main-form-select'>
            <div className='main-form-select__title'>{data.name}</div>
            <div className="main-form-select__wrapper">
                <div className='main-form-select__list'>
                    {data?.people.map(item => (
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
                {data.plusBtn && <ButtonIcon icon={Plus} />}
                {data.searchBtn && <ButtonIcon icon={SearchShown} />}
                {data.calendarBtn && <ButtonIcon icon={Calendar} />}
            </div>
            
    </div>
        
    )
}

export default MainSelect;