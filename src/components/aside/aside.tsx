import Star from '../../assets/sidebar/star.svg'
import Funnel from '../../assets/sidebar/funnel.svg'
import Pin from '../../assets/sidebar/pin.svg'
import MainAsideListItem from '../main-aside-list-item/main-aside-list-item';
import {asideFolders} from '../../mocks/main-form'
import Search from '../search/search';
import './aside.scss'
import ButtonIcon from '../button-icon/button-icon';
import React from 'react';

type Props = {
    asideActive: boolean;
    setAsideActive: React.Dispatch<React.SetStateAction<boolean>> ;
    widthWindow: number;
}

const Aside = ({ asideActive, setAsideActive, widthWindow }: Props) => {
    return (
        <aside className='main-aside'style={{width: asideActive && widthWindow > 768 ? '336px' : '56px'}}>
            <div className="main-aside__wrapper">
                <div className="main-aside__side">
                    <div className='main-aside__img' onClick={() => setAsideActive(!asideActive)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" 
                                  clipRule="evenodd" 
                                  d="M5 22C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5ZM4 5C4 4.44772 4.44772 4 5 4H8V20H5C4.44772 20 4 19.5523 4 19V5ZM10 20V4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H10Z" 
                                  fill={asideActive ? "#005999" : '#2e3238'}/>
                        </svg>
                    </div>
                    <div className='main-aside__img'>
                        <img src={Star} alt="icon" />
                    </div>
                </div>
                <div className= {asideActive && widthWindow > 768 ? 'main-aside__body active' : 'main-aside__body'}>
                    <div className="main-aside__panel">
                        <Search icon={Funnel} width={'13rem'} />
                        <ButtonIcon icon={Pin} />
                    </div>
                    <div className="main-aside-list">
                        {asideFolders.map(item => (
                            <MainAsideListItem data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Aside;