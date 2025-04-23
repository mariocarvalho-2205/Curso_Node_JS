import styles from "./PetDetails.module.css";
import api from "../../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFlashMessage from "../../hooks/useFlashMessage";

const PetDetails = () => {
  const [pet, setPet] = useState({});
  const { id } = useParams();
  const { setFlashMessage } = useFlashMessage();
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api
      .get(`/pets/${id}`)
      .then((response) => {
        setPet(response.data.pet);
        console.log(pet);
      })
      .catch((err) => {});
  }, []);

  async function schedule () {
    let msgType = 'sucess'

    const data = await api.patch(`pets/schedule/${pet._id}`, {
        Authorization: `Bearer ${JSON.parse(token)}`
    })
    .then((response) => {
        console.log(response.data)
        return response.data
    })
    .catch((err) => {
        console.log(err.response.data)
        msgType = 'error'
        return err.response.data
    })

    console.log(data.message, 'mesage')
    setFlashMessage(data.message, msgType)
  }
  return (
    <>
      {pet.name && (
        <section className={styles.pet_details_container}>
          <div className={styles.pet_detaile_header}>
            <h1>Conhecendo o Pet: {pet.name}</h1>
            <p>Se tiver interesse, marque uma visita para conhecê-lo</p>
          </div>
          <div className={styles.pet_images}> 
            {pet.images.map((image, index) => (
              <img
                src={`${import.meta.env.VITE_APP_API}/images/pets/${
                  pet.images[0]
                }`}
                alt={pet.images[0]}
                width="px75"
                key={index}
              />
            ))}
          </div>
          <p><span className="bold">Peso: </span>{pet.weight}kg</p>
          <p><span className="bold">Idade: </span>{pet.age} anos</p>
          {token ? (
            <button onClick={schedule}>Solicitar uma visita</button>
          ) : (
          <p>Você precisa <Link to="/register">criar uma conta</Link> para solicitar uma visita</p>
          )}
        </section>
      )}
    </>
  );
};

export default PetDetails;
