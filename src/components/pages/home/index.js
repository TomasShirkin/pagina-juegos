import Button from "../../Buttons";
import {useNavigate} from "react-router-dom";
import background from "../../../assets/background.jpg";
import background2 from "../../../assets/fondo2.jpg";
import { useState, useEffect } from "react";

function Home () { 

    const navigate=useNavigate();

    const onClickButton=(url) => {
        navigate(url);
    }

    const [changeBackgroud,setChangeBackground]=useState(background)

    return (
<section className="hero is-medium is-fullheight" style={{backgroundImage:`url(${changeBackgroud})`, backgroundSize:"cover"}}>;
 <div className="hero-body">
    <div className="container has-text-centered">
     <Button onClick={()=>onClickButton("/game")} text="Haz click para iniciar el juego"/>
     <br/>
     <button onClick={()=>setChangeBackground(background2)}>Cambiar fondo</button>
     <br/>
    </div>
 </div>
</section>
)
}



export default Home;    