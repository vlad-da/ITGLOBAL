import './main-aside-list-item.scss';
import Arrow from '../../assets/sidebar/arrow.svg'
const MainAsideListItem = ({data}) => {
    return (
            <div className="main-aside-list-item">
                <div className='main-aside-list-item__img'>
                    <img src={Arrow} alt="arrow" />
                </div>
                <div className='main-aside-list-item__text'>
                    {data.name}
                </div>
            </div>
            
            
        
    )
}

export default MainAsideListItem;