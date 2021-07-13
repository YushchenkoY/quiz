import closeMenu from '../img/icon-x.png'



function Menu(props) {
    const { onCloseButtonClick } = props;

    return (
        <nav id="menu" className="menu-wrapper">
            <div className="menu">
                <div className="menu__btn-wrapper">
                    <button
                        onClick={onCloseButtonClick}
                        type="button"
                        id="closeMenu" c
                        className="closeMenu">
                        <img src={closeMenu} alt='' />
                    </button>
                </div>

                <div className="menu__link-wrapper">
                    <a href="#" className="menu__link">Contact Us</a>
                    <a href="#" className="menu__link">Terms of Service</a>
                    <a href="#" className="menu__link">Privacy Policy</a>
                    <a href="#" className="menu__link">Money-Back Policy</a>
                </div>
            </div>
        </nav>
    )
}

export default Menu;