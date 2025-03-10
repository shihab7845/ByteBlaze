import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
    const [themes, setThemes] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setThemes(storedTheme);
        document.querySelector('html').setAttribute('data-theme', storedTheme);
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', themes);
        document.querySelector('html').setAttribute('data-theme', themes);
    }, [themes]);
    
    const handleToggle = e => {
        if (e.target.checked) {
            setThemes('synthwave');
        } else {
            setThemes('light');
        }
    };

    return (
        <>
            {/* navigation bar */}
            <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10">
                <div className="flex-1">
                    <a className="btn btn-ghost gap-0 text-secondary text-3xl">
                        Byte <span className="text-primary">Blaze</span>
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-bold text-xl">
                        <li><NavLink to='/' className={({isActive})=> isActive? 'text-primary font-bold':'font-bold' }>Home</NavLink></li>
                        <li><NavLink to='/blogs' className={({isActive})=> isActive? 'text-primary font-bold':'font-bold' }>Blogs</NavLink></li>
                        <li><NavLink to='/bookmarks' className={({isActive})=> isActive? 'text-primary font-bold':'font-bold' }>Bookmarks</NavLink></li>
                       
                    </ul>
                    {/* themes controllers */}
                    <label className="flex cursor-pointer gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <input 
                            type="checkbox" 
                            value="synthwave"
                            onChange={handleToggle}
                            className="toggle theme-controller" 
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                </div>
            </div>
        </>
    );
}
