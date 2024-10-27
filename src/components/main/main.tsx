import './main.scss';
import Sidebar from '../../assets/sidebar/slide.svg'
import Star from '../../assets/sidebar/star.svg'
import Funnel from '../../assets/sidebar/funnel.svg'
import Pin from '../../assets/sidebar/pin.svg'
import MainAsideListItem from '../main-aside-list-item/main-aside-list-item';
import {asideFolders} from '../../mocks/main-form'
import MainForm from '../main-form/main-form'
import Button from '../button/button';
import Search from '../search/search';
import Dots from '../../assets/icons/dots.svg'
import MainAsideButton from '../main-aside-button/main-aside-button';
const Main = () => {
    return (
        <section className='main'>
            <div className="main-header">
                <div className="main-header__task">
                    <div className="main-header__subtusk">
                        Подзадача
                    </div>
                    <div className="main-header__create">
                        Создать
                    </div>
                </div>
                <div className="main-header__btns">
                    <div className="main-header__save">
                        Сохранить
                    </div>
                    <div className="main-header__exit">
                        Сохранить и выйти
                    </div>
                    <div className="main-header__dots">
                        <Button icon={Dots} />
                    </div>
                </div>
            </div>
            <div className="main-body">
                <div className="main-body__title">
                STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller остаются редактируемыми для агента если он Caller
                </div>
                <MainForm />
            </div>


            <aside className='main-aside'>
                <div className="main-aside__wrapper">
                    <div className="main-aside__side">
                        <MainAsideButton icon={Sidebar} />
                        <MainAsideButton icon={Star} />
                    </div>
                    <div className='main-aside__body'>
                        <div className="main-aside__panel">
                            <Search icon={Funnel} width={'100%'} />
                            <Button icon={Pin} />
                        </div>
                        <div className="main-aside-list">


                            {asideFolders.map(item => (
                                <MainAsideListItem data={item} />
                            ))}


                            
                        </div>
                    </div>
                </div>
                
            </aside>
        </section>
    )
}

export default Main;