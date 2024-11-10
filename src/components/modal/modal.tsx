import './modal.scss';
import { downForm, input, selectForm, upForm } from '../../mocks/main-form';
import MainInput from '../main-input/main-input';
import MainSelect from '../main-select/main-select';
import ButtonIcon from '../button-icon/button-icon';
import Close from '../../assets/icons/close-x.svg'
import ButtonText from '../button-text/button-text';

type Props = {
    modalActive: boolean;
    setModalActive: React.Dispatch<React.SetStateAction<boolean>> ;
}

const Modal = ({modalActive , setModalActive}: Props) => {
    return (
        <div className={modalActive ? "modal active" : "modal"} onClick={() => setModalActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <div className="modal-header__subtitle">
                            Подзадача
                        </div>
                        <div className="modal-header__btns">
                            <ButtonText text='Сохранить' variant='btn-bg' />
                            <ButtonText text='Отменить' variant='btn-border' close={() => setModalActive(false)} />
                        </div>
                        <div className="modal-header__close">
                            <ButtonIcon modalActive= {modalActive} setModalActive={setModalActive}  icon={Close} />
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="modal-body__title">
                            Новая запись
                        </div>
                        <div className="modal-body__form">
                            <form action="">
                                <div className="modal-body__wrapper">
                                {Object.values(upForm).map(item => (
                                    <div className="modal-header__row">
                                        {item.map((row) => (
                                            row.type === 'input' ? 
                                            <MainInput data={row} /> :
                                            <MainSelect data={row} />
                                        ))}
                                    </div>
                                ))}

                                <MainInput data={input} />
                                <MainSelect data={selectForm} />
                                
                                {Object.values(downForm).map(item => (
                                    <div className="modal-body__row">
                                        {item.map((row) => (
                                            row.type === 'input' ? 
                                            <MainInput data={row} /> :
                                            <MainSelect data={row} />
                                        ))}
                                    </div>
                                ))}
                                </div>
                            </form>
                        </div>

                        <div className="modal-body__btns">
                        <ButtonText text='Сохранить' variant='btn-bg' />
                        <ButtonText text='Отменить' variant='btn-border' close={() => setModalActive(false)} />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Modal;