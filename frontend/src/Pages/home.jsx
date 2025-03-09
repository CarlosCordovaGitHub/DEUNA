import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

import transferImage from "../assets/transfers.png";
import recargarImage from "../assets/recargar.png";
import cobrarImage from "../assets/cobrar.png";
import metroImage from "../assets/metro.png";
import invitaImage from "../assets/invita.png";
import jovenesImage from "../assets/jovenes.png";
import verificarImage from "../assets/verificacion.png";
import serviciosImage from "../assets/servicios.png"; // Importando la imagen para el nuevo botón
// Importar iconos para el pie de página
import inicioImage from "../assets/inicio.png";
import promosImage from "../assets/promos.png";
import billeteraImage from "../assets/billetera.png";
import tuImage from "../assets/tu.png";
// Iconos para los botones principales
import transferirIcon from "../assets/transfers.png"; // Reutilizando el mismo icono
import pagarQRIcon from "../assets/qr.png"; // Asumiendo que tienes un ícono de QR
// Importar correctamente las imágenes que faltaban
import bancoImage from "../assets/banco.png";
import poderImage from "../assets/poder.png";

const Home = () => {
  const botones = [
    { id: 1, nombre: "Transferir", imagen: transferImage },
    { id: 2, nombre: "Recargar", imagen: recargarImage },
    { id: 3, nombre: "Cobrar", imagen: cobrarImage },
    { id: 4, nombre: "Metro de Quito", imagen: metroImage },
    { id: 5, nombre: "Invita y Gana", imagen: invitaImage },
    { id: 6, nombre: "Deuna Jóvenes", imagen: jovenesImage },
    { id: 7, nombre: "Verificar pago", imagen: verificarImage },
    { id: 8, nombre: "Servicios", imagen: serviciosImage } // Añadiendo el nuevo botón
  ];

  return (
    <>
    <div className="home-container">
      {/* Encabezado con nombre y saldo */}
      <div className="user-header">
        <div className="user-info">
          <div className="user-avatar">G</div>
          <span className="user-name">Hola Gaby 👋</span>
        </div>
        <div className="header-icons">
          <span className="icon">🔔</span>
          <span className="icon">🎧</span>
        </div>
      </div>

      {/* Banner de transferencias */}
      <div className="banner-card">
        <div className="banner-text">
          <div className="banner-title">Rápido y sin complicaciones</div>
          <div className="banner-subtitle">Transfiere a otros bancos al instante</div>
        </div>
        <div className="banner-image">
          <img src={bancoImage} alt="Banco" />
        </div>
      </div>

      {/* Tarjeta de saldo */}
      <div className="saldo-card">
        <div className="saldo-label">Saldo disponible</div>
        <div className="saldo-monto">$0,00 <span className="icono-ojo">👁</span></div>
        <div className="saldo-arrow">›</div>
      </div>

      {/* Banner de pago sin internet */}
      <div className="banner-pago">
        <div className="banner-pago-text">
          <div className="banner-pago-title">Conoce cómo pagar sin internet</div>
        </div>
        <div className="banner-pago-image">
          <img src={poderImage} alt="Pago sin internet" />
        </div>
      </div>

      {/* Botones de acceso rápido */}
      <div className="quick-access">
        {botones.map((boton) => (
          <Link 
            key={boton.id} 
            to={boton.nombre === "Servicios" ? "/servicios" : "/"} 
            className="button-card"
          >
            <img
              src={boton.imagen}
              alt={boton.nombre}
              className="button-image"
            />
            <span>{boton.nombre}</span>
          </Link>
        ))}
      </div>

      {/* Banner de invitación */}
      <div className="invitation-banner">
        <div className="invitation-text">¿Un amigo te invitó?</div>
        <div className="invitation-action">Pega tu código</div>
        <div className="invitation-arrow">›</div>
      </div>

      {/* Texto "Mis promociones" */}
      <div className="promos-title">Mis promociones</div>

      {/* Botones principales */}
      <div className="main-buttons">
        <button className="main-button transferir">
          <img src={transferirIcon} alt="Transferir" className="button-icon" />
          <span>Transferir</span>
        </button>
        <button className="main-button pagar-qr">
          <img src={pagarQRIcon} alt="Pagar a QR" className="button-icon" />
          <span>Pagar a QR</span>
        </button>
      </div>

    </div>
    
    {/* Barra de navegación inferior */}
    <div className="menu-navegacion">
      <Link to="/" className="menu-item activo">
        <img src={inicioImage} alt="Inicio" className="menu-icon" />
        <span>Inicio</span>
      </Link>
      <Link to="/promos" className="menu-item">
        <img src={promosImage} alt="Promos" className="menu-icon" />
        <span>Promos</span>
      </Link>
      <Link to="/billetera" className="menu-item">
        <img src={billeteraImage} alt="Billetera" className="menu-icon" />
        <span>Billetera</span>
      </Link>
      <Link to="/perfil" className="menu-item">
        <img src={tuImage} alt="Tú" className="menu-icon" />
        <span>Tú</span>
      </Link>
    </div>
    </>
  );
};

export default Home;