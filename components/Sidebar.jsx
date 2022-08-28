import React, { useState } from 'react'
import Link from 'next/link'
import SidebarStyles from "../styles/Sidebar.module.scss"
import { AiFillHome, AiFillEye, AiFillFire } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'
import { useSelector } from 'react-redux'
const Sidebar = () => {

  const { isSidebarExpanded } = useSelector((state) => state.layout)

  return (
    <div className={` ${SidebarStyles.container} ${isSidebarExpanded ? SidebarStyles.expandedContainer : ''}`}>
      <Link href="/" >
        <a className={SidebarStyles.link}> <AiFillHome /> <span>Home</span> </a>
      </Link>

      <Link href="/">
        <a className={SidebarStyles.link}> <AiFillEye /> <span>Deviants You Watch</span> </a>
      </Link>

      <Link href="/">
        <a className={SidebarStyles.link}> <BiCategory /> <span>Topics</span> </a>
      </Link>

      <Link href="/">
        <a className={SidebarStyles.link}> <AiFillFire /> <span>Popular</span> </a>
      </Link>
    </div>

  )
}

export default Sidebar