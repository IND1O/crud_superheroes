import { useEffect, useState } from "react";

const formInicial = { name: "", power: "", id: null };

const CrudForm = ({ crear, actualizar, editarDato, setEditarDato }) => {
  const [form, setForm] = useState(formInicial);

  const { id, name, power } = form;

  useEffect(() => {
    if (editarDato) {
      setForm(editarDato);
    } else {
      setForm(formInicial);
    }
  }, [editarDato]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = (e) => {
    setForm(formInicial);
    setEditarDato(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !power) {
      window.alert("Todos los datos son obligatorios");
      return;
    }
    if (id === null) {
      //console.log(id);
      crear(form);
    } else {
      actualizar(form);
    }
    handleReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      {editarDato ? <h3>Actualizar Personaje</h3> : <h3>Agregar Personaje</h3>}

      <label>Nombre</label>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={name}
          onChange={handleChange}
        />
      </div>
      <label>Poder</label>
      <div>
        <input
          type="text"
          name="power"
          placeholder="Poder"
          value={power}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Guardar</button>
        <button onClick={handleReset}>Limpiar</button>
      </div>
    </form>
  );
};

export default CrudForm;
