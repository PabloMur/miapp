import React from "react";
import cv from "img/cv.pdf";
import css from "./styles.module.css";

function DownloadCVButton() {
  const downloadCV = () => {
    const url = cv; // URL de tu archivo CV
    const link = document.createElement("a");
    link.href = url;
    link.download = "cv.pdf"; // Nombre de archivo para descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className={css.root} onClick={downloadCV}>
      Descargar CV
    </button>
  );
}

export default DownloadCVButton;
