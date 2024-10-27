import './main-input-row.scss';
import MainInput from '../main-input/main-input'
import MainSelect from '../main-select/main-select'
const MainInputRow = ({data}) => {
    return (
        <div className="main-input-row">
            {data.map((row) => (
                row.type === 'input' ? 
                <MainInput data={row} /> :
                <MainSelect data={row} />
            ))}
        </div>
        
    )
}

export default MainInputRow;