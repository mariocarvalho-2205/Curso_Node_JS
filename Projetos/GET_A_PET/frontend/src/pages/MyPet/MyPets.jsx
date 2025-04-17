import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RoundedImage from "../../components/RoundedImage/RoundedImage";
import api from "../../utils/api";
import styles from "../MyPet/Dashboard.module.css";

import useFlashMessage from "../../hooks/useFlashMessage";

const MyPets = () => {
  const [pets, setPets] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    api
      .get("/pets/mypets", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // console.log("REsponse", response.data.pets[0])
        setPets(response.data.pets);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("pet",pets[0].name)
  }, [token]);

  async function removePet(id) {
    let msgType = "success";
    const data = await api
      .delete(`/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        const updatedPets = pets.filter((pet) => pet._id !== id);
        setPets(updatedPets);
        return response.data;
      })
      .catch((err) => {
        msgType = "error";
        console.log(err);
        return err.response.data;
      });
    setFlashMessage(data.message, msgType);
  }

  return (
    <section>
      <div className={styles.petlist_header}>
        <h1>MyPets</h1>
        <Link to="/pet/add">Cadastrar Pet</Link>
      </div>
      <div className={styles.petlist_container}>
        {pets.length > 0 &&
          pets.map((pet) => (
            <div className={styles.petlist_row} key={pet._id}>
              <RoundedImage
                src={`${import.meta.env.VITE_APP_API}/images/pets/${
                  pet.images[0]
                }`}
                alt={pet.images[0]}
                width="px75"
              />
              <span className="bold">{pet.name}</span>
              <div className={styles.actions}>
                {pet.available ? (
                  <>
                    {pet.adopted && (
                      <button className={styles.conclude_btn}>
                        Concluir adoção
                      </button>
                    )}
                    <Link to={`/pet/edit/${pet._id}`}>Editar</Link>
                    <button
                      onClick={() => {
                        removePet(pet._id);
                      }}
                    >
                      Excluir
                    </button>
                  </>
                ) : (
                  <>
                    <p>Pet já adotado</p>
                  </>
                )}
              </div>
            </div>
          ))}
        {pets.length === 0 && <p>Não há pets cadastrados</p>}
      </div>
    </section>
  );
};

export default MyPets;
