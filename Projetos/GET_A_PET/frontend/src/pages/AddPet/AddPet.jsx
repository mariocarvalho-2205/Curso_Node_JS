import api from "../../utils/api"
import styles from "./AddPet.module.css"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

import useFlashMessage from "../../hooks/useFlashMessage"
import PetForm from "../../components/PetForm/PetForm"

const AddPet = () => {
  return (
    <section className={styles.addpet_header}>
      <div>
        <h1>Cadastre um Pet</h1>
        <p>Depois ele ficará disponível para adolção</p>
      </div>
      <PetForm btnText="Cadastrar Pet"/>
    </section>
  );
};

export default AddPet;
