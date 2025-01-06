import styles from "./Register.module.css";
import Input from "../../components/Input/Input";

const Register = () => {

  function handleChange (e) {

  }
  return (
    <section>
      <h1>Register</h1>
      <form>
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
          type="confirm-password"
          name="confirm-password"
          placeholder="Confirme sua senha"
          handleOnChange={handleChange}
        />
        <input type="submit" value="Cadastrar" />
      </form>
    </section>
  );
};

export default Register;
