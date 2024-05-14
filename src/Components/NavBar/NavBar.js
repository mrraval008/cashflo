import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar(){
    return (
        <>
            <div className={styles.header}>
                    <div>
                        <Link to="/">
                            <img src='logo512.png'></img>
                        </Link>
                    </div>
                    <div className={styles.button_container}>
                            <Link to="/recruiters">
                                Recruters
                            </Link>
                            <Link to="/recruiters">
                            Blog
                            </Link>
                            <Link to="/recruiters">
                                <button>Get Started</button>
                            </Link>
                    </div>
            </div>
        </>
    )
}