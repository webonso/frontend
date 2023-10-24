import { Link, NavLink } from 'react-router-dom';
import styles from './header.module.scss';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import { useState } from 'react';

export const Logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        Cr<span>eshop.</span>
      </h2>
    </Link>
  </div>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : '');

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const ToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const HideMenu = () => {
    setShowMenu(false);
  };

  const cart = (
    <span className={styles.cart}>
      <Link to={'/cart'}>
        Cart
        <FaShoppingCart size={20} />
        <p>0</p>
      </Link>
    </span>
  );
  return (
    <header>
      <div className={styles.header}>
        {Logo}
        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}`
                : `${styles['nav-wrapper']}`
            }
            onClick={HideMenu}
          ></div>

          <ul>
            <li className={styles['logo-mobile']}>
              {Logo}
              <FaTimes size={22} color="#fff" onClick={HideMenu} />
            </li>
            <li>
              <NavLink to='/shop' className={activeLink}>
                Shop
              </NavLink>
            </li>
            {/* <li>
              <NavLink to={'/Admin'} className={activeLink} />
            </li>*/}
          </ul> 

          <div className={styles['header-right']}>
            <span className={styles.links}>
              <NavLink to={'login'} className={activeLink}>
                Login
              </NavLink>
              <NavLink to={'register'} className={activeLink}>
                Register
              </NavLink>
              <NavLink to={'order-history'} className={activeLink}>
                My Order
              </NavLink>
            </span>
            {cart}
          </div>
        </nav>
        <div className={styles['menu-icon']}>
          {cart}
          <HiOutlineMenuAlt3 size={28} onClick={ToggleMenu} />
        </div>
      </div>
    </header>
  );
}
