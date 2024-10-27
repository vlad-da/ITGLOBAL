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



                    {Object.values(upForm).map(item => <MainInputRow data={item}/>)}

                    <MainInput data={input} />
                    <MainSelect data={selectForm} />
                    
                    {Object.values(downForm).map(item => <MainInputRow data={item}/>)}

                </div>
            </form>
        </div>
    )
}

export default MainForm;