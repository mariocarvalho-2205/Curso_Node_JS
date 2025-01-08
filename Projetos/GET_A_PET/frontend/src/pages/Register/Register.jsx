import styles from "../../components/Input/Form.module.css";
import Input from "../../components/Input/Input";
import { Link } from 'react-router-dom'
import { useState } from "react";

const Register = () => {
  const [ user, setUser ] = useState({})

  function handleChange (e) {
      setUser({ ...user, [e.target.name]: e.target.value})
    }
    
    function handleSubmit (e) {
      e.preventDefault()
      console.log(user)
  }
  return (
    <section className={styles.form_container}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <Input
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite o seu nome"
          handleOnChange={handleChange}
        />
        <Input
          text="Telefone"
          type="text"
          name="phone"
          placeholder="Digite o seu telefone"
          handleOnChange={handleChange}
        />
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
        <Input
          text="Confirme sua senha"
          type="password"
          name="confirmpassword"
          placeholder="Confirme sua senha"
          handleOnChange={handleChange}
        />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>Já tem conta? <Link to="/login">Clique aqui</Link></p>
    </section>
  );
};

export default Register;
