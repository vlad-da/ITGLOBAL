import './main.scss';

import MainForm from '../main-form/main-form'
import ButtonIcon from '../button-icon/button-icon';

import Dots from '../../assets/icons/dots.svg'

import Modal from '../modal/modal';
import { useState, useEffect } from 'react';
import ButtonText from '../button-text/button-text';
import Aside from '../aside/aside';
import { useResize } from '../../hook/useResize';
const Main = () => {
    useEffect(() => {

        const handleEsc = (event: { key: string; }) => {
            if (event.key === 'Escape') {
                setModalActive(false);
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
    };
    }, []);
   
    const [modalActive, setModalActive] = useState<boolean>(false);
    const [asideActive, setAsideActive] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(!scrolled);
            }
        };

        document.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            document.addEventListener('scroll', handleScroll);
        }
    }, [scrolled])

    const widthWindow = useResize();
    return (
        <>
        <div className='wrapper'>
            <Aside widthWindow={widthWindow.width} asideActive={asideActive} setAsideActive={setAsideActive} />
            <section className={`main ${asideActive && widthWindow.width > 768 ? 'main-short' : ''}` }>
                <div className="main-header" data-active={scrolled}>
                    <div className="main-header__task">
                        <div className="main-header__subtusk">
                            Подзадача
                        </div>
                        <div className="main-header__create">
                            <ButtonText text='Создать' variant='btn-border' close={setModalActive}/>
                        </div>
                    </div>
                    <div className="main-header__btns">
                        <ButtonText text='Сохранить' variant='btn-bg' />
                        <ButtonText text='Сохранить и выйти' variant='btn-border' />
                    </div>
                    <div className="main-header__dots">
                            <ButtonIcon setModalActive={setModalActive} icon={Dots} />
                        </div>
                </div>
                <div className="main-body">
                    <div className="main-body__title">
                    STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller остаются редактируемыми для агента если он Caller
                    </div>
                    <MainForm />
                </div>


                
            </section>
        </div>

        <Modal modalActive={modalActive}  setModalActive={setModalActive}/>
        </>
    )
}

export default Main;