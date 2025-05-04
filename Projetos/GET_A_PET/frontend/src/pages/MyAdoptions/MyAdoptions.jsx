import api from "../../utils/api"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "../MyPet/Dashboard.module.css"

import RoundedImage from "../../components/RoundedImage/RoundedImage"



const MyAdoptions = () => {
    const [pets, setPets] = useState([]);
    const [token] = useState(localStorage.getItem("token") || "")

    useEffect(() => {
        api.get("/pets/myadoptions", {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })
            .then((response) => {
                setPets(response.data.pets)
                // console.log(pets)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <section>
            <div className={styles.petlist_header}>
                <h1>Minhas Adoções</h1>
            </div>
            <div className={styles.petlist_container}>
                {pets.length > 0 && (
                    pets.map((pet) => (
                        <div className={styles.petlist_row} key={pet._id}>
                            <RoundedImage
                                src={`${import.meta.env.VITE_APP_API}/images/pets/${pet.images[0]
                                    }`}
                                alt={pet.images[0]}
                                width="px75"
                            />
                            <span className="bold">{pet.name}</span>
                            <div className={styles.contacts}>
                                <p>
                                    <span className="bold">Lique para: </span>{pet.user.phone}
                                </p>
                                <p>
                                    <span className="bold">Fale com: </span>{pet.user.name}
                                </p>
                            </div>
                            <div className={styles.actions}>
                                {pet.available ? (
                                    <p>Adoção em processo.</p>
                                ) : (
                                    <p>Parabens por concluir a adoção!</p>
                                )}
                            </div>
                        </div>
                    ))
                )}
                {pets.length === 0 && <p>Ainda não há adoções de Pets.</p>}
            </div>



        </section>
    )
}

export default MyAdoptions