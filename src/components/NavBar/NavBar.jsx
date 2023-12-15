import React,{useState} from 'react';
import Logo from '../../assets/logo.png'

const NavBar = () => {

    const [navbarState, setNavbarState] = useState(false);

    const navbarSidenavToggle = () => {
        setNavbarState(current => !current);
    };

    return (
        <div>
            <div className="selection:bg-azure text-white bg-transparent">
                <div className="flex flex-row justify-between items-center px-4 py-4 sm:px-6">
                    <div>
                        <img src={Logo} alt="LogoImg" />
                    </div>
                    <ul className={navbarState? "fixed top-0 right-0 block md:relative md:flex-row md:justify-between bg-charcoal md:bg-transparent" : "fixed top-0 right-0 hidden md:block md:relative md:flex-row md:justify-between"}>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:mt-0 px-4 py-4 sm:px-6 sm:py-6 md:p-0 min-h-[100vh] md:min-h-0 min-w-[50vw] md:min-w-0 bg-transparent z-1 rounded-lg">
                            <li className="text-left cursor-pointer md:hidden">
                                <span className="material-symbols-rounded hover:text-azure" onClick={navbarSidenavToggle}>
                                    close
                                </span>
                            </li>
                            <hr/>
                            <li>
                                <a className="p-2 block w-full cursor-pointer bg-transparent hover:bg-azure hover:text-white md:p-3 rounded-bl-lg rounded-tr-lg transition duration-500" href="#">Mapa usluga</a>
                            </li>
                            <hr/>
                            <li>
                                <a className="p-2 block w-full cursor-pointer bg-transparent hover:bg-azure hover:text-white md:p-3 rounded-bl-lg rounded-tr-lg transition duration-500" href="#">O nama</a>
                            </li>
                            <hr/>
                            <li>
                                <a className="p-2 block w-full cursor-pointer bg-transparent hover:bg-azure hover:text-white md:p-3 rounded-bl-lg rounded-tr-lg transition duration-500" href="#">Kontakt</a>
                            </li>
                            <hr/>
                        </div>
                    </ul>
                    <div className="cursor-pointer block md:hidden">
                        <span className="material-symbols-rounded" onClick={navbarSidenavToggle}>
                            menu
                        </span>
                    </div>
                </div>			
            </div>  
        </div>
    );
}

export default NavBar;
