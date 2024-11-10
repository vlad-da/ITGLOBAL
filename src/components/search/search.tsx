import './search.scss';

type Pops = {
    icon?: string;
    width?: string;
}

const Search = ({icon, width}:Pops) => {
    return (
        <div className='search-header'>
            <form className='search-header__form' action="" method="get">
                <input className='search-header__input' name="search-header" placeholder="Поиск" type="text" style={{width: width}} />
                <button className='search-header__button' type="submit">
                    <img src={icon} alt="icon" />
                </button>
            </form>
        </div>
    )
}

export default Search;