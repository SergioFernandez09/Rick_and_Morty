import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch }) => {
    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
            <buttom>
                <NavLink to='/home'>Home</NavLink>
            </buttom>
            <button>
                <NavLink to='/about'>About</NavLink>
            </button>
            
        </nav>
    )
}
export default Nav;