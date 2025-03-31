import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MyPets = () => {
  const [pets, setPets] = useState([]);

  return (
    <section>
      <div className="">
        <h1>MyPets</h1>
        <Link to="/pet/add">Cadastrar Pet</Link>
      </div>
      <div className="">
        {pets.length > 0 && <p>Meus Pets Cadastrados</p>}
        {pets.length === 0 && <p>Não há pets cadastrados</p>}
      </div>
    </section>
  );
};

export default MyPets;
