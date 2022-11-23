import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuestionCard from "../../QuestionCard";
import Button from "../../Buttons";


const API_URL = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";


function Game () {
    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [result, setResult] = useState(0);
    function calcularResultado(){
        const respuestasCorrectas=selectedAnswers.filter((respuesta)=>respuesta.valorOpcion===true)
        setResult(respuestasCorrectas.length)
    }

    console.log(questions)

    useEffect(() =>{
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setQuestions(data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    return(
        <div className="container">
            <section className="section">
                <nav class="breadcrumb" arial-label="breadcrumb">
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li className="is-active">
                            <Link to="/game">Juego</Link>
                        </li>
                    </ul>
                </nav>
                  <div>{loading ? "Cargando...": "Preguntas listas!"}</div>
                  <form>
                    {
                        questions.map((pregunta)=>{
                            return <QuestionCard key={pregunta.id} 
                            preguntaActual={pregunta}
                            selectedAnswers={selectedAnswers}
                            setSelectedAnswers={setSelectedAnswers}
                            />
                        })
                    }
                  </form>
<div className="level-right">
    <p>{result}</p>
    <Button disabled=
    {
        selectedAnswers?.length !== questions?.length
    } 
    onClick={() => calcularResultado()} text="validar"></Button>
    </div>
 </section>
</div>
)}

export default Game;