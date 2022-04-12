import './Header.scss';
import brainflixLogo from '../../assets/images/logo/BrainFlix-logo.svg';
import searchLogo from '../../assets/images/icons/search.svg';
import mohanLogo from '../../assets/images/Mohan-muruge.jpg';
import uploadLogo from '../../assets/images/icons/upload.svg';


function Header() {
    return (
        <header>
            <img src={brainflixLogo} alt='BrainFlix Logo'/>
            <div className='header__search-container'>
                <form className = 'header__search-bar'>
                    <img src={searchLogo} alt='magnifying glass'/>
                    <input type="text" placeholder="Search" />
                </form>
                <img className='header__search-img' src={mohanLogo} alt='mohan profile'/>
            </div>
            <div className='header__upload-container'>
            <img src={uploadLogo} />
            <button>upload</button>
            </div>
        </header>

    );

}

export default Header;