import './main-aside-list-item.scss';
import Arrow from '../../assets/sidebar/arrow.svg'

type Data = {
    name: string
}

type Props = {
    data: Data
}

const MainAsideListItem = ({data}:Props) => {
    
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