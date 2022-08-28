import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import LayoutStyles from "../styles/Layout.module.scss"
import { useSelector } from 'react-redux'

const Layout = ({ children }) => {

    const { isSidebarExpanded } = useSelector((state) => state.layout)
    return (
        <>
            <Header />

            <div className={`${LayoutStyles.container} ${isSidebarExpanded ? "overflowHidden" : ""}`}>
                <Sidebar />
                <main>
                    {children}
                    <div className={isSidebarExpanded ? LayoutStyles.overlay : ""}></div>
                </main>
            </div>
        </>
    )
}

export default Layout