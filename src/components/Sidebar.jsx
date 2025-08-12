import { useState } from 'react'
import { HiChevronLeft, HiChevronRight, HiHome, HiUser, HiCog, HiBriefcase, HiMail } from 'react-icons/hi'

export const Sidebar = () => {
const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const navItems = [
        { name: "Home", href: "#hero", icon: <HiHome /> },
        { name: "About", href: "#about", icon: <HiUser /> },
        { name: "Skills", href: "#skills", icon: <HiCog /> },
        { name: "Projects", href: "#projects", icon: <HiBriefcase /> },
        { name: "Contact", href: "#contact", icon: <HiMail /> },
    ];

    return (
        <aside className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
            <div className='logo-button-container'>

                <div className="logo-placeholder">
                    <h2>LOGO</h2>
                </div>

                <button className='toggle-button' onClick={() => setIsSidebarOpen(prev => !prev)}>
                    {isSidebarOpen ? <HiChevronLeft /> : <HiChevronRight />}
                </button>
            </div>

            <div className='nav-items-container'>
                {navItems.map((item, index) => (
                    <a
                        className='nav-item'
                        key={index}
                        href={item.href}
                        data-tooltip={item.name}
                    >
                        <span className='nav-item-icon'>{item.icon}</span>
                        <span className='nav-item-name'>{item.name}</span>
                    </a>
                ))}
            </div>
        </aside>
    )
}