/**
 * @file Comprobante.jsx
 * @description Componente React para gestionar y mostrar comprobantes de pago.
 * Este componente realiza solicitudes a la API de pagos, genera códigos QR dinámicos
 * y muestra la información del comprobante al usuario.
 */

import React, { useEffect, useState } from "react";
import axios from "axios";
import back from "../../assets/atras.png"; 
import { useNavigate } from "react-router-dom"; 
import "./comprobante.css";

/**
 * Componente Comprobante
 * 
 * Gestiona el flujo completo de generación de códigos QR para pagos y
 * muestra la información del comprobante una vez procesado el pago.
 * 
 * @returns {JSX.Element} Componente de comprobante de pago renderizado
 */
const Comprobante = () => {
    // Estados para gestionar la información del comprobante
    const [transactionId, setTransactionId] = useState(null);
    const [paymentInfo, setPaymentInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [qrImage, setQrImage] = useState(null); 
    const navigate = useNavigate();

    // Configuración de las APIs usando el proxy de Vite
    const API_REQUEST = "/api/merchant/v1/payment/request";
    const API_INFO = "/api/merchant/v1/payment/info";

    // Datos para la solicitud de pago
    const requestData = {
        pointOfSale: "4121565",
        qrType: "dynamic",
        amount: 500,
        detail: "test postman GEO",
        internalTransactionReference: "IXWAHROMYSCEZWQ",
        format: "2",
    };

    /**
     * Obtiene el ID de transacción desde la API de solicitud de pago.
     * También recupera la imagen del código QR si está disponible.
     * 
     * @async
     * @function fetchTransactionId
     * @returns {Promise<void>}
     */
    const fetchTransactionId = async () => {
        try {
            const response = await axios.post(API_REQUEST, requestData);
            if (response.data && response.data.transactionId) {
                setTransactionId(response.data.transactionId);
                if(response.data.qr){
                    setQrImage(response.data.qr);
                }
            } else {
                throw new Error("No se recibió transactionId");
            }
        } catch (err) {
            setError(`Error al obtener transactionId: ${err.response?.data?.message || err.message}`);
            setLoading(false);
        }
    };

    /**
     * Obtiene la información detallada del pago usando el ID de transacción.
     * 
     * @async
     * @function fetchPaymentInfo
     * @param {string} id - ID de la transacción a consultar
     * @returns {Promise<void>}
     */
    const fetchPaymentInfo = async (id) => {
        try {
            const response = await axios.post(API_INFO, { idTransacionReference: id, idType: "0" });
            setPaymentInfo(response.data);
        } catch (err) {
            setError(`Error al obtener información del pago: ${err.response?.data?.message || err.message}`);
        } finally {
            setLoading(false);
        }
    };

    // Efecto para obtener el ID de transacción al montar el componente
    useEffect(() => {
        const fetchData = async () => {
            await fetchTransactionId();
        };
        fetchData();
    }, []);

    // Efecto para obtener la información del pago cuando se tiene el ID de transacción
    useEffect(() => {
        if (transactionId) {
            fetchPaymentInfo(transactionId);
        }
    }, [transactionId]);

    // Renderiza un indicador de carga mientras se obtienen los datos
    if (loading) return (
        <div className="comprobante-container">
            <div className="loading-container">
                <div className="loading-indicator"></div>
                <div className="loading-text">Cargando...</div>
            </div>
        </div>
    );

    // Renderiza un mensaje de error si ocurre algún problema
    if (error) return (
        <div className="comprobante-container">
            <div className="error-message">
                <span className="error-icon">⚠️</span>
                <p>Error: {error}</p>
            </div>
        </div>
    );

    // Renderiza el comprobante con toda la información
    return (
        <div className="comprobante-container">
            <div className="atras">
                {/* Botón de retroceso */}
                <img 
                    src={back} 
                    alt="Atrás" 
                    className="back-button"
                    onClick={() => navigate("/negocio")}
                />
            </div>
            <div className="comprobante-header">
                <h2 className="comprobante-title">Comprobante de Pago</h2>
                {transactionId && (
                    <div className="transaction-id">
                        <span className="transaction-label">Transaction ID:</span>
                        <span className="transaction-value">{transactionId}</span>
                    </div>
                )}
            </div>

             {/* Renderizar la imagen QR */}
             {qrImage && (
                <div className="qr-container">
                    <img src={qrImage} alt="Código QR" className="qr-image" />
                </div>
            )}
            
            {paymentInfo ? (
                <div className="payment-details">
                    <div className="payment-status">
                        <div className="status-indicator"></div>
                        <span className="status-text">{paymentInfo.status}</span>
                    </div>
                    
                    <div className="payment-info-grid">
                        <div className="payment-info-item">
                            <span className="payment-info-label">Monto:</span>
                            <span className="payment-info-value">{paymentInfo.amount} {paymentInfo.currency}</span>
                        </div>
                        
                        <div className="payment-info-item">
                            <span className="payment-info-label">Fecha:</span>
                            <span className="payment-info-value">{paymentInfo.date || "N/A"}</span>
                        </div>
                        
                        <div className="payment-info-item">
                            <span className="payment-info-label">Descripción:</span>
                            <span className="payment-info-value">{paymentInfo.description || "Sin descripción"}</span>
                        </div>
                        
                        <div className="payment-info-item">
                            <span className="payment-info-label">Ordenante:</span>
                            <span className="payment-info-value">{paymentInfo.ordererName || "Desconocido"}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="no-payment-info">
                    <p>No se encontró información de pago.</p>
                </div>
            )}
        </div>
    );
};

export default Comprobante;