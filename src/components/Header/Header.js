import './Header.scss';
import brainflixLogo from '../../assets/images/logo/BrainFlix-logo.svg';
import searchLogo from '../../assets/images/icons/search.svg';
import mohanLogo from '../../assets/images/Mohan-muruge.jpg';
import uploadLogo from '../../assets/images/icons/upload.svg';


function Header() {
    return (
        <header className='header'>
            <img className='brainflix-logo' src={brainflixLogo} alt='BrainFlix Logo'/>
            <div className="header__container">
                <div className='header__search-container'>
                    <form className = 'header__search-bar'>
                        <img className='header__search-icon' src={searchLogo} alt='magnifying glass'/>
                        <input className='header__search-input' type="text" placeholder="Search" />
                    </form>
                    <img className='header__search-img' src={mohanLogo} alt='mohan profile'/>
                </div>
                <div className='button__container'>
                <img className='button__upload-icon' src={uploadLogo} alt='arrow pointing up for upload' />
                <button className='button'>upload</button>
                </div>
                <img className='header__search-img header__search-img--tablet' src={mohanLogo} alt='mohan profile'/>
            </div>
        </header>

    );

}

export default Header;