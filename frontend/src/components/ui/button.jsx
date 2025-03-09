/**
 * @file Button.jsx
 * @description Componente de botón reutilizable con estilo predeterminado de Tailwind CSS.
 */

import React from "react";

/**
 * Componente Button
 * 
 * Un botón reutilizable con estilos predeterminados de Tailwind CSS que
 * admite contenido personalizado y clases CSS adicionales.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido interno del botón
 * @param {Function} props.onClick - Función a ejecutar al hacer clic en el botón
 * @param {string} [props.className=""] - Clases CSS adicionales para personalizar el botón
 * @returns {JSX.Element} Componente de botón renderizado
 */
const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };