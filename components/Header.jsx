import Image from 'next/image'
import Link from 'next/link'

import { RiMenu5Fill } from "react-icons/ri"
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai"
import yzLogo from "../public/yz-logo.png"
import headerStyles from "../styles/Header.module.scss"
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../features/Layout/layoutSlice'

const Header = () => {
  const dispatch = useDispatch()
  return (
    <header className={headerStyles.container}>
      <div className={headerStyles.left}>
        <button className={headerStyles.btnMenu} onClick={() => {
          dispatch(toggleSidebar())
        }}>
          <RiMenu5Fill />
        </button>

        <div className={headerStyles.logo}>
          <Link href="/Login">
            <a>
              <Image src={yzLogo} width="30" height="30" />
            </a>
          </Link>
        </div>
      </div>

      <div className={headerStyles.right}>
        <Link href="/join">
          <a>Join</a>
        </Link>
        <Link href="/Login">
          <a>Login</a>
        </Link>
      </div>
    </header>
  )
}

export default Header