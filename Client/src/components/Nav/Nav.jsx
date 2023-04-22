import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import styles from './Nav.module.css';

const Nav = ({ onSearch }) => {
    return (
        <nav className={styles.nav}>
            <SearchBar onSearch={onSearch}/>
            <button>
                <Link to='/home'>Home</Link>
            </button>
            <button>
                <Link to='/about'>About</Link>
            </button>
            <button>
                <Link to='/favorites'>Favorites</Link>
            </button>
            
            
        </nav>
    )
}
export default Nav;