import api from "../../utils/api";
import Input from "../../components/Input/Input";
import styles from "./Profile.module.css";
import formStyles from "../../components/Input/Form.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // manipula as urls e enviando o usuario para outra url ex: home

import useFlashMessage from "../../hooks/useFlashMessage";
import RoundedImage from "../../components/RoundedImage/RoundedImage";

function Profile() {
  const [user, setUser] = useState({});
  const [preview, setPreview] = useState();
  const { setFlashMessage } = useFlashMessage();
  const navigate = useNavigate();

  // resgata o token do localstorage para resgatar o usuario do banco atraves do token
  const [token] = useState(localStorage.getItem("token") || "");
  // const { update } = useContext(Context)

  useEffect(() => {
    // acessar a rota users/checkuser para pegar o usuario
    api
      .get("/users/checkuser", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      });
  }, [token]);

  // função para carregar a imagem
  function onFileChange(e) {
    console.log("on file change");
    setPreview(e.target.files[0])
    setUser({ ...user, [e.target.name]: e.target.files[0] });
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let msgType = "sucess";

    // para o envio de imagens e necessario utilizar o formData e instanciar
    const formData = new FormData();

    // é preciso adicionar os campos ao formData
    // será criado um forEach para atribuir os valores a cada chave que vier no formData
    await Object.keys(user).forEach((key) => {
      formData.append(key, user[key]);
    });

    const data = await api
      .patch(`/users/edit/${user._id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        navigate("/"); // direciona para a home

        return response.data;
      })
      .catch((err) => {
        msgType = "error";
        return err.response.data;
      });

    // console.log("update", user)  // ok chegou
    // update(user)
    setFlashMessage(data.message, msgType);
  }
  return (
    <section>
      <div className={styles.profile_header}>
        <h1>Perfil</h1>
        {(user.image || preview) && (
            <RoundedImage src={preview ? URL.createObjectURL(preview) : `${import.meta.env.VITE_APP_API}/images/users/${user.image}`} alt={user.name}/>
        )}
      </div>
      <form className={formStyles.form_container} onSubmit={handleSubmit}>
        <Input
          text="Image"
          type="file"
          name="image"
          handleOnChange={onFileChange}
        />
        <Input
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite o seu nome"
          handleOnChange={handleChange}
          value={user.name || ""}
        />
        <Input
          text="Telefone"
          type="text"
          name="phone"
          placeholder="Digite o seu telefone"
          handleOnChange={handleChange}
          value={user.phone || ""}
        />
        <Input
          text="E-mail"
          type="email"
          name="email"
          placeholder="Digite o seu email"
          handleOnChange={handleChange}
          value={user.email || ""}
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
        <input type="submit" value="Editar" />
      </form>
    </section>
  );
}

export default Profile;
