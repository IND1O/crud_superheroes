import { useState } from "react";

const CrudHeader = ({ filtrar }) => {
  const [buscar, setBuscar] = useState([]);

  const handleChange = (e) => {
    setBuscar(e.target.value);
    filtrar(e.target.value);
  };

  return (
    <header>
      <nav>
        <a href="#">Crud Super</a>

        <form>
          <input
            type="search"
            name="Búscar por nombre"
            placeholder="Buscar por Nombre"
            value={buscar}
            onChange={handleChange}
          />
        </form>
      </nav>
    </header>
  );
};

export default CrudHeader;
