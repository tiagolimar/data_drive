import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Campo from "./components/Campo.jsx";
import axios from "axios";

const getDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  return `${yyyy}-${mm}-${dd}`
};

const getTime = () => {
  const today = new Date();
  const hh = String(today.getHours()).padStart(2, '0');
  const mm = String(today.getMinutes()).padStart(2, '0');

  return hh + ':' + mm
};


function App() {
    const url = 'localhost:3000'
    const date_ = getDate();
    const hour_ = getTime();

    const [values, setValues] = useState({
        nomeEvento: "ACORDAR",
        tipoEvento: "GERAL",
        data: date_,
        hora: hour_,
        tempoDuracao: "360",
        gasto: "0.00",
        ganho: "0.00",
        comentario: "Nenhum"
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await axios.post(url, values)
        console.log(data);
    };

    return (
        <Container>
            <Form className="mt-4" onSubmit={handleSubmit}>
                <Campo
                    type="text"
                    id="nomeEvento"
                    label="NOME DO EVENTO"
                    value={values.nomeEvento}
                    onChange={handleChange}
                />
                <Campo
                    type="text"
                    id="tipoEvento"
                    label="TIPO DE EVENTO"
                    value={values.tipoEvento}
                    onChange={handleChange}
                />
                <Campo
                    type="date"
                    id="data"
                    label="DATA DE INÍCIO"
                    value={values.data}
                    onChange={handleChange}
                />
                <Campo
                    type="time"
                    id="hora"
                    label="HORA DE INÍCIO"
                    value={values.hora}
                    onChange={handleChange}
                />
                <Campo
                    type="number"
                    id="tempoDuracao"
                    label="TEMPO DE DURAÇÃO"
                    value={values.tempoDuracao}
                    onChange={handleChange}
                />
                <Campo
                    type="number"
                    id="gasto"
                    label="GASTO"
                    value={values.gasto}
                    onChange={handleChange}
                />
                <Campo
                    type="number"
                    id="ganho"
                    label="GANHO"
                    value={values.ganho}
                    onChange={handleChange}
                />
                <Campo
                    type="text"
                    id="comentario"
                    label="COMENTÁRIO"
                    value={values.comentario}
                    onChange={handleChange}
                />
                <Button variant="primary" className="w-100" type="submit">
                    Ok
                </Button>
            </Form>
        </Container>
    );
}

export default App;