import styles from "./Navbar.module.css"
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.png"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.navbar_logo}>
            <img src={Logo} alt="" />
            <h2>Get A Pet</h2>
        </div>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.inactive}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => isActive ? styles.active : styles.inactive}>
            Entrar
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className={({ isActive }) => isActive ? styles.active : styles.inactive}>
            Cadastrar
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
