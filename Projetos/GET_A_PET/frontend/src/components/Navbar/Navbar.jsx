import styles from "./Navbar.module.css";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.png";

// context
import { Context } from "../../context/UseContext";

const Navbar = () => {
	const { authenticated, logout } = useContext(Context); // importa o authentiated do useContext

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar_logo}>
				<img src={Logo} alt="" />
				<h2>Get A Pet</h2>
			</div>
			<ul>
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? styles.active : styles.inactive
						}
					>
						Home
					</NavLink>
				</li>

				{authenticated && authenticated ? (
					<>
					<li>
							<NavLink
								to="/user/profile"
								className={({ isActive }) =>
									isActive ? styles.active : styles.inactive
								}
							>
								Profile
							</NavLink>
						</li>
						<li onClick={logout}>Sair</li>
					</>
				) : (
					<>
						<li>
							<NavLink
								to="/login"
								className={({ isActive }) =>
									isActive ? styles.active : styles.inactive
								}
							>
								Entrar
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/register"
								className={({ isActive }) =>
									isActive ? styles.active : styles.inactive
								}
							>
								Cadastrar
							</NavLink>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
