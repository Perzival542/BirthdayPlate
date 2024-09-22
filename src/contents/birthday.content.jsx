import React, { useState } from "react";
import { PictureInput } from "../components/pictureInput.component";
import {
  TextInput,
  DayInput,
  MonthInput,
} from "../components/inputs.component";
import { PreviewModal } from "../components/previewModal.component";
import "../styles/birthdayContent.css";

let messages = {
  titleMessage: "Arrastra la foto de la persona que cumple años aqui",
  bodyMessage: "Se debe utilizar una unica imagen a la vez",
};

export const BirthdayContent = () => {
  const [fileSelected, setFileSelected] = useState(false);

  const handleStatusChange = (status) => {
    if (status === "selected") {
      setFileSelected(true);
    } else if (status === "removed") {
      setFileSelected(false);
    }
  };

  return (
    <div className="birthdayContent-container">
      <PictureInput messages={messages} onStatusChange={handleStatusChange} />
      {fileSelected && (
        <div className="infoInputs-wrapper">
          <div className="infoInputs-container">
            <TextInput placeholder="Nombre" />
            <DayInput placeholder="Dia" />
            <MonthInput placeholder="Mes" />
          </div>
          <div className="preview-modal-container">
            <PreviewModal />
          </div>
        </div>
      )}
    </div>
  );
};
