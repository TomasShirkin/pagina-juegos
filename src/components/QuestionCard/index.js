import "./index.css";

function QuestionCard({ preguntaActual, selectedAnswers,setSelectedAnswers}){
    function seleccionarRespuesta(identificador, valorOpcion){
        const otrasRespuestas=selectedAnswers.filter((respuesta)=> respuesta.id !== identificador)
        setSelectedAnswers([...otrasRespuestas,
        {
            id:identificador,
            valorOpcion,
        }])
    }
        
    return (
        <div className="box">
            <div className="mi-clase">
            <span className="tag is-rounded is-info">{preguntaActual.id}</span>
            <span><strong>{preguntaActual.question}</strong></span>
            </div>
            <br/>
            {
                preguntaActual.answers.map((opcion) =>(
                    <div 
                    key={opcion.id} 
                    onChange={()=>seleccionarRespuesta(preguntaActual.id,opcion.is_correct)}
                    >
                    <input type="radio" 
                    id={`${opcion.id}`} 
                    name={opcion.id} 
                    value={opcion.answer}></input>
                    <label htmlFor={`${preguntaActual.id}`}> {opcion.answer}</label>
                    <br/>
                    </div>
                ))
            }
        </div>
        )
}

export default QuestionCard;
