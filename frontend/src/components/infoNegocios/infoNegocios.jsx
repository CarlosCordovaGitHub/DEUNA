/**
 * @file InfoNegocios.jsx
 * @description Componente para mostrar información detallada de un negocio, incluyendo
 * su catálogo de productos, reseñas y opciones para seleccionar productos y contactar.
 * Permite a los usuarios explorar los productos disponibles, añadirlos a un carrito
 * virtual y navegar hacia el chat para continuar con el proceso de contratación.
 * 
 * @module InfoNegocios
 * @requires React
 * @requires react-router-dom
 * @requires lucide-react
 */

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Star, Mail, Phone, ShoppingCart, ChevronDown, ChevronUp, Check, ChevronLeft } from "lucide-react";
import "./infoNegocios.css";
import { useNavigate } from "react-router-dom"; 
import back from "../../assets/atras.png"; 
import usuarioImg from "../../assets/usuario.png";
import negocioImg from "../../assets/negocio.avif";

const InfoNegocios = () => {
  const [productos, setProductos] = useState([]);
  const [expandirCatalogo, setExpandirCatalogo] = useState(true);
  const [expandirReseñas, setExpandirReseñas] = useState(true);
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.slice(0, 5)); 
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const negocio = {
    nombre: "Jimmy Design Co",
    etiquetas: ["Diseño gráfico", "Diseño", "Logo"],
    reseña: 8.3,
  };

  const toggleProducto = (producto) => {
    setCarrito((prevCarrito) => {
      if (prevCarrito.some((item) => item.id === producto.id)) {
        return prevCarrito.filter((item) => item.id !== producto.id);
      } else {
        return [...prevCarrito, producto];
      }
    });
  };

  const reseñas = [
    { texto: "Excelente servicio, entrega diseños creativos y profesionales rápidamente. Superaron nuestras expectativas. Muy recomendados.", calificacion: 9, autor: "Andrea Vásquez", maxCalificacion: 10 },
    { texto: "El diseño es bueno, pero la comunicación y los tiempos de respuesta fueron lentos. Con más organización, la experiencia habría sido mejor.", calificacion: 7.8, autor: "María Buitrón", maxCalificacion: 10 }
  ];

  // Función para ir al chat con los productos seleccionados
  const goToChat = () => {
    // Guardar productos seleccionados en localStorage
    localStorage.setItem("selected_products", JSON.stringify(carrito));
    navigate("/chat");
  };

  return (
    <div className="negocio-container">
      {/* Botón Regresar */}
      <div className="back-button-container">
        <button className="back-button">
          <ChevronLeft size={20} />
        </button>
      </div>
      
      {/* Encabezado y Logo */}
      <div className="atras">
        {/* Botón de retroceso */}
        <img 
          src={back} 
          alt="Atrás" 
          className="back-button"
          onClick={() => navigate("/servicios")}
        />
      </div>
      <div className="negocio-header">
        <div className="logo-container">
          <img src={negocioImg} alt="Logo" className="negocio-logo" />
        </div>
        <div className="negocio-details">
          <h2 className="negocio-title">{negocio.nombre}</h2>
          <div className="negocio-tags">
            {negocio.etiquetas.map((etiqueta, index) => (
              <span key={index} className="negocio-tag">{etiqueta}</span>
            ))}
          </div>
          <div className="negocio-rating">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                fill={i < Math.floor(negocio.reseña / 2) ? "currentColor" : "none"} 
                className={`w-4 h-4 ${i < negocio.reseña / 2 ? "star-filled" : "star-empty"}`} 
              />
            ))}
            <span className="rating-score">{negocio.reseña} / 10</span>
          </div>
        </div>
        <div className="contratar-container">
          <Button className="contratar-button" onClick={goToChat}>
            Contratar
          </Button>
        </div>
      </div>

      {/* Sección de Catálogo */}
      <div className="catalog-container">
        <div 
          className="section-header toggle-header"
          onClick={() => setExpandirCatalogo(!expandirCatalogo)}
        >
          <span className="section-icon">📋</span>
          <h3 className="section-title">Catálogo</h3>
          <div className="toggle-icon">
            {expandirCatalogo ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
        
        {expandirCatalogo && (
          <div className="servicios-list">
            {loading ? (
              <div className="loading-container">
                <div className="loading-indicator"></div>
                <p className="loading-text">Cargando productos...</p>
              </div>
            ) : (
              productos.map((producto) => (
                <div 
                  key={producto.id} 
                  className={`servicio-item ${carrito.some(item => item.id === producto.id) ? 'servicio-selected' : ''}`}
                  onClick={() => toggleProducto(producto)}
                >
                  <div className="servicio-info">
                    <h3 className="servicio-title">{producto.title}</h3>
                  </div>
                  <div className="servicio-image">
                    <img src={producto.image} alt={producto.title} />
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Sección de Reseñas */}
      <div className="reviews-container">
        <div 
          className="section-header toggle-header"
          onClick={() => setExpandirReseñas(!expandirReseñas)}
        >
          <span className="section-icon">💡</span>
          <h3 className="section-title">Reseñas</h3>
          <div className="toggle-icon">
            {expandirReseñas ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
        
        {expandirReseñas && (
          <div className="reviews-list">
            {reseñas.map((reseña, index) => (
              <div key={index} className="review-item">
                <div className="review-author-container">
                <img src={usuarioImg} alt={reseña.autor} className="review-author-image" />
                  <div className="review-author-info">
                    <div className="review-author-name">{reseña.autor}</div>
                    <div className="review-rating">
                      <Star size={14} fill="currentColor" className="star-filled" />
                      <span className="review-score">{reseña.calificacion} / {reseña.maxCalificacion}</span>
                    </div>
                  </div>
                </div>
                <p className="review-text">{reseña.texto}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Botón de Contactar */}
      <div className="cart-button-container">
        <Button 
          className={`cart-button ${carrito.length > 0 ? 'cart-button-active' : 'cart-button-disabled'}`}
          disabled={carrito.length === 0}
          onClick={goToChat}
        >
          <ShoppingCart size={20} />
          <span>
            {carrito.length > 0 
              ? `Contactar (${carrito.length})` 
              : "Selecciona productos"}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default InfoNegocios;