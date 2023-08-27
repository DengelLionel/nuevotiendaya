import React, { useState } from 'react';
import Link from 'next/link';
import PerfectScrollbar from 'react-perfect-scrollbar';
import userAvatar from '/public/img/img1.jpg';
import {
    dashboardMenu,
    applicationsMenu,
    pagesMenu,
    uiElementsMenu,
} from '../../../data/Menu';

const Sidebar = () => {
    const [isFooterMenuVisible, setIsFooterMenuVisible] = useState(false);

    const toggleFooterMenu = () => {
        setIsFooterMenuVisible(!isFooterMenuVisible);
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Link href="/" className="sidebar-logo">
                    dashbyte
                </Link>
            </div>
            <PerfectScrollbar className="sidebar-body">
                <SidebarMenu />
            </PerfectScrollbar>
            <div className="sidebar-footer">
                <div className="sidebar-footer-top">
                    <div className="sidebar-footer-thumb">
                        <img src={userAvatar} alt="" />
                    </div>
                    <div className="sidebar-footer-body">
                        <p>Premium Member</p>
                    </div>
                    <Link
                        onClick={toggleFooterMenu}
                        href="#"
                        className="dropdown-link"
                    >
                        <i className="ri-arrow-down-s-line"></i>
                    </Link>
                </div>
                {/* Rest of the sidebar footer content */}
            </div>
        </div>
    );
};

const SidebarMenu = () => {
    const [activeMenuIndex, setActiveMenuIndex] = useState(null);

    const toggleMenu = (index) => {
        setActiveMenuIndex((prevIndex) =>
            prevIndex === index ? null : index
        );
    };

    const populateMenu = (menuItems) => {
        return menuItems.map((menuItem, index) => {
            const subMenuItems = menuItem.submenu?.map((subMenuItem, subIndex) => (
                <Link href={subMenuItem.link} className="nav-sub-link" key={subIndex}>
                    {subMenuItem.label}
                </Link>
            ));

            const isSubMenuOpen = activeMenuIndex === index;

            return (
                <li key={index} className="nav-item">
                    <div
                        onClick={() => toggleMenu(index)}
                        className={`${
                            subMenuItems?.length > 0 ? 'nav-link has-sub' : 'nav-link'
                        } ${isSubMenuOpen ? 'show' : ''}`}
                    >
                        <i className={menuItem.icon}></i> <span>{menuItem.label}</span>
                    </div>
                    {subMenuItems?.length > 0 && (
                        <nav className={`nav nav-sub ${isSubMenuOpen ? 'show' : ''}`}>
                            {subMenuItems}
                        </nav>
                    )}
                </li>
            );
        });
    };

    return (
        <div>
            <div className="nav-group show">
                <div className="nav-label">Dashboard</div>
                {populateMenu(dashboardMenu)}
            </div>
            <div className="nav-group show">
                <div className="nav-label">Applications</div>
                {populateMenu(applicationsMenu)}
            </div>
            <div className="nav-group show">
                <div className="nav-label">Pages</div>
                {populateMenu(pagesMenu)}
            </div>
            <div className="nav-group show">
                <div className="nav-label">UI Elements</div>
                {populateMenu(uiElementsMenu)}
            </div>
        </div>
    );
};

// Rest of the code

export default Sidebar;
