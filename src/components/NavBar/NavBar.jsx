import React,{useState} from 'react';

const NavBar = () => {

    const [navbarState, setNavbarState] = useState(false);

    const navbarSidenavToggle = () => {
        setNavbarState(current => !current);
    };
//"fixed top-0 right-0 hidden md:block md:relative md:flex-row md:justify-between"
    return (
        <div>
            <div className="selection:bg-tangerine text-white bg-charcoal">
                <div className="flex flex-row justify-between items-center px-4 py-4 sm:px-6 sm:py-6">
                    <div className="text-2xl">Company name</div>
                    <ul className={navbarState? "fixed top-0 right-0 block md:relative md:flex-row md:justify-between" : "fixed top-0 right-0 hidden md:block md:relative md:flex-row md:justify-between"}>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:mt-0 px-4 py-4 sm:px-6 sm:py-6 md:p-0 min-h-[100vh] md:min-h-0 min-w-[50vw] md:min-w-0 bg-charcoal/95 z-1 rounded-lg">
                            <li className="text-left cursor-pointer md:hidden">
                                <span className="material-symbols-rounded hover:text-tangerine" onClick={navbarSidenavToggle}>
                                    close
                                </span>
                            </li>
                            <hr/>
                            <li>
                                <a className="p-2 cursor-pointer bg-transparent hover:bg-tangerine hover:text-white md:p-3 rounded-md transition duration-500" href="#">About</a>
                            </li>
                            <hr/>
                            <li>
                                <a className="p-2 cursor-pointer bg-transparent hover:bg-tangerine hover:text-white md:p-3 rounded-md transition duration-500" href="#">FAQ</a>
                            </li>
                            <hr/>
                            <li>
                                <a className="p-2 cursor-pointer bg-transparent hover:bg-tangerine hover:text-white md:p-3 rounded-md transition duration-500" href="#">Send a request</a>
                            </li>
                            <hr/>
                            <li>
                                <a className="p-2 cursor-pointer bg-transparent hover:bg-tangerine hover:text-white md:p-3 rounded-md transition duration-500" href="#">Contact</a>
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
