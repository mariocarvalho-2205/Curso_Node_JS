import api from "../../utils/api"
import styles from "./AddPet.module.css"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

import useFlashMessage from "../../hooks/useFlashMessage"
import PetForm from "../../components/PetForm/PetForm"

const AddPet = () => {

  const [token] = useState(localStorage.getItem("token") || "")
  const {setFlashMessage} = useFlashMessage()
  const navigate = useNavigate()

  async function registerPet (pet) {
    let msgType = "sucess"
    
    const formData = new FormData

    await Object.keys(pet).forEach((key) => {
      if(key === "images") {
        for(let i = 0; i < pet[key].length; i++) {
          formData.append("images", pet[key][i])
        }
      } else {
        formData.append(key, pet[key])
      }
    })

    // console.log(JSON.parse(token))
    const data = await api.post("pets/create", formData, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      msgType = "error"
      return err.response.data
    })

    setFlashMessage(data.message, msgType)
    if(msgType !== "error") {
      navigate("/pet/mypets")
    }
    // console.log("teste", pet)
  }
  return (
    <section className={styles.addpet_header}>
      <div>
        <h1>Cadastre um Pet</h1>
        <p>Depois ele ficará disponível para adolção</p>
      </div>
      <PetForm handleSubmit={registerPet} btnText="Cadastrar Pet"/>
    </section>
  );
};

export default AddPet;
