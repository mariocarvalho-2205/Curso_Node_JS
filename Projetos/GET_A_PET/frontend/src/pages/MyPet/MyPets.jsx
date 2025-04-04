import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RoundedImage from "../../components/RoundedImage/RoundedImage"
import api from "../../utils/api"

import useFlashMessage from "../../hooks/useFlashMessage"

const MyPets = () => {
  const [pets, setPets] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "")
  const {setFlashMessage} = useFlashMessage()

  useEffect(() => {
    api.get("/pets/mypets", {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
        "Content-Type": "multipart/form-data"
      }
    })
    .then((response) => {
      // console.log("REsponse", response.data.pets[0])
      setPets(response.data.pets)
    })
    .catch((err) => {
      console.log(err)
    })
    // console.log("pet",pets[0].name)
  }, [token])

  return (
    <section>
      <div >
        <h1>MyPets</h1>
        <Link to="/pet/add">Cadastrar Pet</Link>
      </div>
      <div >
        {pets.length > 0 && pets.map((pet) => (
          <div key={pet._id}>
            <RoundedImage src={`${import.meta.env.VITE_APP_API}/images/pets/${pet.images[0]}`} alt={pet.images[0]} width="75px"/>
            <span className="bold">{pet.name}</span>
          </div>

        ))}
        {pets.length === 0 && <p>Não há pets cadastrados</p>}
      </div>
    </section>
  );
};

export default MyPets;
