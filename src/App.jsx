import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CrudForm from "./components/CrudForm";
import CrudHeader from "./components/CrudHeader";
import CrudTable from "./components/CrudTable";

function App() {
  const [dataBase, setDataBase] = useState([]);
  const [buscarDb, setBuscarDb] = useState([]);
  const [editarDato, setEditarDato] = useState(null);

  const baseUrl = "http://localhost:4000/superheroes";

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        if (response.status === 200) {
          setDataBase(response.data);
          setBuscarDb(response.data);
        } else {
          setDataBase([]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filtrar = (cadenaBuscar) => {
    const response = buscarDb.filter((elem) => {
      if (
        elem.name.toString().toLowerCase().includes(cadenaBuscar.toLowerCase())
      ) {
        return elem;
      } else {
        return null;
      }
    });
    setDataBase(response);
  };

  const crear = (dato) => {
    dato.id = Date.now();
    axios
      .post(baseUrl, dato)
      .then((response) => {
        if (response.status === 201) {
          //console.log(response);
          setDataBase([...dataBase, response.data]);
        } else {
          alert("error en la base de datos");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const borrar = (id) => {
    const respuesta = window.confirm(
      `Esta seguro que desea borrar este registro?`
    );
    if (respuesta) {
      axios
        .delete(`${baseUrl}/${id}`)
        .then((response) => {
          if (response.status === 200) {
            const borrarDato = dataBase.filter((elem) => elem.id !== id);
            setDataBase(borrarDato);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else return;
  };

  const actualizar = (dato) => {
    axios
      .put(`${baseUrl}/${dato.id}`, dato)
      .then((response) => {
        if (response.status === 200) {
          const res = dataBase.map((elem) =>
            elem.id === dato.id ? dato : elem
          );
          setDataBase(res);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <CrudHeader filtrar={filtrar} />
      <CrudTable
        dataBase={dataBase}
        borrar={borrar}
        setEditarDato={setEditarDato}
      />
      <CrudForm
        crear={crear}
        actualizar={actualizar}
        editarDato={editarDato}
        setEditarDato={setEditarDato}
      />
    </>
  );
}

export default App;
