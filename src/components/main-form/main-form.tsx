import './main-form.scss';
import { upForm, downForm, selectForm, input } from '../../mocks/main-form'
import MainInputRow from '../main-input-row/main-input-row'
import MainSelect from '../main-select/main-select';
import MainInput from '../main-input/main-input';
const MainForm = () => {
    return (
        <div className="main-form">
            <form action="">
                <div className="main-form__wrapper">


                    {Object.values(upForm).map(item => (
                         <div className="main-form__row">
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
                         <div className="main-form__row">
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
    )
}

export default MainForm;