// src/pages/Servicios.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./servicios.css";

// Importar imagen de empresa con la extensión correcta
import empresaImage from "../assets/empresa.jpg";
import empresaImage2 from "../assets/empresa2.jpeg";
import empresaImage3 from "../assets/empresa3.jpeg";
import empresaImage4 from "../assets/empresa4.jpeg";
import empresaImage5 from "../assets/empresa5.jpeg";
import empresaImage6 from "../assets/empresa6.jpeg";

// Importar imágenes para destacados y otros elementos
import juanImage from "../assets/empresa2.jpeg"; 
import mecanicImage from "../assets/empresa3.jpeg";
import lorenaImage from "../assets/empresa4.jpeg";
import gabrielaImage from "../assets/empresa5.jpeg";
import disfracesImage from "../assets/empresa6.jpeg";
import ahorroImage from "../assets/ahorro.jpeg";

// Ya no necesitamos importar el icono para el botón

const Servicios = () => {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [mostrarResultados, setMostrarResultados] = useState(false);
  
  // Definir las categorías
  const categorias = ["Todos", "Profesionales", "Pequeños negocios"];

  // Datos de los profesionales/negocios
  const profesionales = [
    { 
      id: 1, 
      nombre: "Jimmy Design Co", 
      puntuacion: 8.4, 
      etiquetas: ["Diseño gráfico", "Diseño", "Logo"],
      imagen: empresaImage,
      categoria: "Profesionales"
    },
    { 
      id: 2, 
      nombre: "Jannet Gonzalez", 
      puntuacion: 7.9, 
      etiquetas: ["Diseño gráfico", "Diseño", "Logo"],
      imagen: empresaImage2,
      categoria: "Profesionales"
    },
    { 
      id: 3, 
      nombre: "Limbo Studio", 
      puntuacion: 7.4, 
      etiquetas: ["Diseño gráfico", "Diseño", "Logo"],
      imagen: empresaImage3,
      categoria: "Pequeños negocios"
    },
    { 
      id: 4, 
      nombre: "Daphné Repain", 
      puntuacion: 7.2, 
      etiquetas: ["Diseño gráfico", "Logo", "Diseño"],
      imagen: empresaImage4,
      categoria: "Profesionales"
    },
    { 
      id: 5, 
      nombre: "Jose Luis Star", 
      puntuacion: 5.4, 
      etiquetas: ["Diseño", "Product designer", "Logo"],
      imagen: empresaImage5,
      categoria: "Profesionales"
    },
    { 
      id: 6, 
      nombre: "Lina Lina Studio", 
      puntuacion: 5.4, 
      etiquetas: ["Branding", "Diseño", "Logo"],
      imagen: empresaImage6,
      categoria: "Pequeños negocios"
    },
    { 
      id: 7, 
      nombre: "Juan Robledo", 
      puntuacion: 9.2, 
      etiquetas: ["Reparaciones", "Hogar", "Mantenimiento"],
      imagen: juanImage,
      categoria: "Profesionales"
    },
    { 
      id: 8, 
      nombre: "Mecanic La Carolina", 
      puntuacion: 8.7, 
      etiquetas: ["Mecánica", "Autos", "Reparación"],
      imagen: mecanicImage,
      categoria: "Pequeños negocios"
    },
    { 
      id: 9, 
      nombre: "Lorena Saenz", 
      puntuacion: 8.9, 
      etiquetas: ["Consultoría", "Negocios", "Finanzas"],
      imagen: lorenaImage,
      categoria: "Profesionales"
    },
    { 
      id: 11, 
      nombre: "Alquiler de disfraces MG", 
      puntuacion: 8.5, 
      etiquetas: ["Disfraces", "Eventos", "Fiestas"],
      imagen: disfracesImage,
      categoria: "Pequeños negocios"
    }
  ];

  const destacados = [
    {
      id: 7,
      nombre: "Juan Robledo",
      imagen: juanImage
    },
    {
      id: 8,
      nombre: "Mecanic La Carolina",
      imagen: mecanicImage
    },
    {
      id: 9,
      nombre: "Lorena Saenz",
      imagen: lorenaImage
    },
    {
      id: 11,
      nombre: "Alquiler de disfraces MG",
      imagen: disfracesImage
    }
  ];

  const masBuscado = ["diseño","logo", "fotógrafo de boda"];

  const profesionalesFiltrados = profesionales.filter(prof => {
    const coincideBusqueda = busqueda === "" || 
      prof.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      prof.etiquetas.some(etiqueta => etiqueta.toLowerCase().includes(busqueda.toLowerCase()));
    
    const coincidesCategoria = categoriaActiva === "Todos" || prof.categoria === categoriaActiva;
    
    return coincideBusqueda && coincidesCategoria;
  });

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
    setMostrarResultados(e.target.value !== "");
  };

  const handleLimpiarBusqueda = () => {
    setBusqueda("");
    setMostrarResultados(false);
  };

  const handleCategoriaClick = (categoria) => {
    setBusqueda(categoria);
    setMostrarResultados(true);
  };

  return (
    <div className="deuna-emprende-container">
      {/* Botón para volver a Home - flecha chevron */}
      <Link to="/" className="home-button">
        &#10094;
      </Link>
      
      {!mostrarResultados ? (
        // Pantalla de inicio cuando no hay búsqueda
        <>
          <div className="homepage-header">
            <h1>Deuna Emprende</h1>
            <p>Encuentra profesionales y pequeños negocios para cualquier necesidad y paga de forma fácil</p>
          </div>

          {/* Barra de búsqueda */}
          <div className="search-bar">
            <div className="search-icon">🔍</div>
            <input 
              type="text" 
              placeholder="Buscar servicio"
              value={busqueda}
              onChange={handleBusqueda}
            />
            {busqueda && (
              <button className="clear-button" onClick={handleLimpiarBusqueda}>
                ✕
              </button>
            )}
            <button className="filter-button">☰</button>
          </div>

          {/* Lo más buscado */}
          <div className="seccion-titulo">
            <span className="icon-tendencias">📈</span>
            <h2>Lo más buscado</h2>
          </div>
          <div className="categorias-populares">
            {masBuscado.map((categoria, index) => (
              <button 
                key={index} 
                className="categoria-popular"
                onClick={() => handleCategoriaClick(categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>

          {/* Destacados */}
          <div className="seccion-titulo">
            <span className="icon-destacados">⭐</span>
            <h2>Destacados en Deuna Emprende</h2>
          </div>
          <div className="destacados-grid">
            {destacados.map((destacado) => (
              <Link 
                to={`/infonegocio/${destacado.id}`} 
                className="destacado-item"
                key={destacado.id}
              >
                <div className="destacado-imagen-container">
                  <img 
                    src={destacado.imagen} 
                    alt={destacado.nombre} 
                    className="destacado-imagen" 
                  />
                </div>
                <p className="destacado-nombre">{destacado.nombre}</p>
              </Link>
            ))}
          </div>

          {/* Sección de sabías que */}
          <div className="seccion-titulo">
            <span className="icon-info">💡</span>
            <h2>¿Sabías que?</h2>
          </div>
          <div className="sabias-que-card">
            <div className="sabias-que-content">
              <div className="educacion-tag">EDUCACIÓN FINANCIERA</div>
              <h3>¿Sabías que un emprendedor exitoso ahorra al menos el 20% de sus ganancias?</h3>
              <p>Tener un fondo de emergencia te ayuda a manejar imprevistos sin afectar tu negocio.</p>
            </div>
            <div className="sabias-que-imagen">
              <img src={ahorroImage} alt="Ahorro" className="ahorro-imagen" />
            </div>
          </div>
        </>
      ) : (
        // Pantalla de resultados cuando hay búsqueda
        <>
          {/* Botón de regreso y título */}
          <div className="header">
            <button 
              className="back-button" 
              onClick={handleLimpiarBusqueda}
            >
            </button>
            <div className="header-content">
              <h1>Deuna Emprende</h1>
              <p>Encuentra profesionales y pequeños negocios para cualquier necesidad y paga de forma fácil</p>
            </div>
          </div>

          {/* Barra de búsqueda */}
          <div className="search-bar">
            <div className="search-icon">🔍</div>
            <input 
              type="text" 
              placeholder="Buscar servicio"
              value={busqueda}
              onChange={handleBusqueda}
            />
            {busqueda && (
              <button className="clear-button" onClick={handleLimpiarBusqueda}>
                ✕
              </button>
            )}
            <button className="filter-button">☰</button>
          </div>

          {/* Categorías / Tabs */}
          <div className="categorias-tabs">
            {categorias.map(categoria => (
              <button
                key={categoria}
                className={`categoria-tab ${categoriaActiva === categoria ? 'activo' : ''}`}
                onClick={() => setCategoriaActiva(categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>

          {/* Lista de profesionales */}
          <div className="profesionales-lista">
            {profesionalesFiltrados.length > 0 ? (
              profesionalesFiltrados.map(profesional => (
                <div key={profesional.id} className="profesional-card">
                  <div className="profesional-info">
                    <img src={profesional.imagen} alt={profesional.nombre} className="profesional-imagen" />
                    <div className="profesional-detalles">
                      <h3>{profesional.nombre}</h3>
                      <div className="etiquetas">
                        {profesional.etiquetas.map((etiqueta, index) => (
                          <span key={index} className="etiqueta">{etiqueta}</span>
                        ))}
                      </div>
                      <div className="puntuacion">
                        <span className="estrella">★</span>
                        <span>{profesional.puntuacion} /10</span>
                      </div>
                    </div>
                  </div>
                  <Link to={`/infonegocio/${profesional.id}`} className="ver-perfil-btn">
                    Ver perfil
                  </Link>
                </div>
              ))
            ) : (
              <div className="no-resultados">
                <p>No se encontraron resultados para "{busqueda}"</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Servicios