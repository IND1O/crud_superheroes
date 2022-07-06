import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ dataBase, borrar, setEditarDato }) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Poder</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dataBase.length < 0 ? (
            <tr>
              <td colSpan={3}>Tabla Sin Datos</td>
            </tr>
          ) : (
            dataBase.map((elem) => (
              <CrudTableRow
                key={elem.id}
                elem={elem}
                borrar={borrar}
                setEditarDato={setEditarDato}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
