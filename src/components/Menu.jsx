import closeMenu from '../img/icon-x.png'

function Menu() {
    return (
        <nav id="menu" className="menu-wrapper">
            <div className="menu">
                <button type="button" id="closeMenu" className="closeMenu">
                    <img src={closeMenu} alt=''/>
                </button>
                <div className="menu__link-wrapper">
                    <a href="" className="menu__link">Contact Us</a>
                    <a href="" className="menu__link">Terms of Service</a>
                    <a href="" className="menu__link">Privacy Policy</a>
                    <a href="" className="menu__link">Money-Back Policy</a>
                </div>
            </div>
        </nav>
    )
}

export default Menu;