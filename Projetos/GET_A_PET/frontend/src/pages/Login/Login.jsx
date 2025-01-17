import { useState, useContext } from "react";
import Input from "../../components/Input/Input";
import styles from "../../components/Input/Form.module.css";
import { Link } from 'react-router-dom'


import { Context } from "../../context/UseContext";
const Login = () => {
	const [user, setUser] = useState({});
	const { login } = useContext(Context);

	function handleChange(e) {
		setUser({ ...user, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
    login(user)
	}
	return (
		<section className={styles.form_container}>
			<h1>login</h1>
			<form onSubmit={handleSubmit}>
				<Input
					text="E-mail"
					type="email"
					name="email"
					placeholder="Digite o seu email"
					handleOnChange={handleChange}
				/>
				<Input
					text="Senha"
					type="password"
					name="password"
					placeholder="Digite sua senha"
					handleOnChange={handleChange}
				/>
				<input type="submit" value="Entrar" />
			</form>
      <p>Não tem conta? <Link to="/register">Clique aqui</Link></p>

		</section>
	);
};

export default Login;
