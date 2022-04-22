import './Header.scss';
import brainflixLogo from '../../assets/logo/BrainFlix-logo.svg';
import searchLogo from '../../assets/icons/search.svg';
import mohanLogo from '../../assets/images/Mohan-muruge.jpg';
import uploadLogo from '../../assets/icons/upload.svg';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <Link to='/'><img className='brainflix-logo' src={brainflixLogo} alt='BrainFlix Logo'/></Link>
            <div className="header__container">
                <div className='header__search-container'>
                    <form className = 'header__search-bar'>
                        <img className='header__search-icon' src={searchLogo} alt='magnifying glass'/>
                        <input className='header__search-input' type="text" placeholder="Search" />
                    </form>
                    <img className='header__search-img' src={mohanLogo} alt='mohan profile'/>
                </div>
                <div className='button__container'>
                    <Link to='./upload'>
                        <img className='button__upload-icon' src={uploadLogo} alt='arrow pointing up for upload' />
                        <button className='button'>upload</button>
                    </Link>
                </div>
                <img className='header__search-img header__search-img--tablet' src={mohanLogo} alt='mohan profile'/>
            </div>
        </header>

    );

}

export default Header;