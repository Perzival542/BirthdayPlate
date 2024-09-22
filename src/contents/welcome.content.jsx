import React from "react";
import { PictureInput } from "../components/pictureInput.component";
import '../styles/welcomeContent.css';

let messages = {
    titleMessage: "Arrastra la foto de la persona a quien darle la bienvenida aqui",
    bodyMessage: "Se debe utilizar una unica imagen a la vez"
}

export const WelcomeContent = () => {
    return (
        <div className="welcomeContent-container">
            <PictureInput messages={messages}/>
        </div>
    );
}