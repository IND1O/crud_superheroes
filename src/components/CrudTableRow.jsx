const CrudTableRow = ({ elem, borrar, setEditarDato }) => {
  const { id, name, power } = elem;

  const handleDelete = (e) => {
    e.preventDefault();
    borrar(id);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditarDato(elem);
    //console.log(elem);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{power}</td>
      <td>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={handleDelete}>Borrar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
