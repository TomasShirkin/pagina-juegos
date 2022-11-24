import "./index.css";

function QuestionCard({ preguntaActual, selectedAnswers,setSelectedAnswers, mostrarResultado}){
    function seleccionarRespuesta(identificador, valorOpcion){
        const otrasRespuestas=selectedAnswers.filter((respuesta)=> respuesta.id !== identificador)
        setSelectedAnswers([...otrasRespuestas,
        {
            id:identificador,
            valorOpcion
        }])
    }
        
    return (
            <div className="box">
            <div className="mi-clase">
                 <span className="tag is-rounded is-info">{preguntaActual.id}</span>
                 <span><strong>{preguntaActual.question}</strong></span>
                 <br/>
                 {
                        preguntaActual.answers.map((opcion) =>(
                           <div 
                           key={opcion.id} 
                           onChange={()=>seleccionarRespuesta(preguntaActual.id,opcion.is_correct)}
                           >
                           <input type="radio" 
                           id={`${preguntaActual.id}`} 
                           name={preguntaActual.id} 
                           value={opcion.answer}></input>
                           <label htmlFor={`${preguntaActual.id}`}
                         className={
                               mostrarResultado ?
                                opcion.is_correct ? "has-text-primary" : "has-text-danger"
                               :""
                    }>      {opcion.answer}</label>
                    <br/>
                    </div>
                ))
            }
           </div>
           </div>
        )
}

export default QuestionCard;
