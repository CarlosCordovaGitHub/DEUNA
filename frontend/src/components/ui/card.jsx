/**
 * @file Card.jsx
 * @description Componentes para crear tarjetas con estilo predeterminado de Tailwind CSS.
 * Incluye un contenedor principal Card y un componente CardContent para su contenido.
 */

import React from "react";

/**
 * Componente Card
 * 
 * Un contenedor de tarjeta con estilos predeterminados de Tailwind CSS
 * que proporciona bordes, sombras y espaciado.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido interno de la tarjeta
 * @param {string} [props.className=""] - Clases CSS adicionales para personalizar la tarjeta
 * @returns {JSX.Element} Componente de tarjeta renderizado
 */
const Card = ({ children, className = "" }) => {
  return (
    <div className={`border rounded-lg shadow p-4 bg-white ${className}`}>
      {children}
    </div>
  );
};

/**
 * Componente CardContent
 * 
 * Un contenedor para el contenido interno de la tarjeta.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido a mostrar dentro del componente
 * @returns {JSX.Element} Componente de contenido de tarjeta renderizado
 */
const CardContent = ({ children }) => {
  return <div>{children}</div>;
};

export { Card, CardContent };