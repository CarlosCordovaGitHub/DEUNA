# DeUna Emprende - Marketplace de Economía Circular

## 📋 Descripción del Proyecto

DeUna Emprende es un marketplace de servicios y productos al por mayor que fomenta la economía circular entre emprendedores afiliados a DeUna. Nuestra plataforma permite que los emprendedores compren y vendan productos y servicios, promoviendo un intercambio continuo y sostenible dentro de la comunidad, generando valor para todos los participantes.

Este proyecto nace de la necesidad de promover la cultura de abandonar el efectivo y proporcionar un espacio donde los emprendedores pueden ofertar sus servicios a la comunidad, con contacto directo con los usuarios para finalizar transacciones usando códigos DeUna.

## 💡 Propuesta de Valor

- **Economía Circular**: Promoción de intercambio sostenible entre emprendedores, reduciendo costos y desperdicios.
- **Valor Sostenible**: Generación de un ecosistema colaborativo que fomenta el crecimiento mutuo.
- **Sistema de Score**: Creación de un puntaje que valida la confiabilidad crediticia del usuario.
- **Educación Financiera**: Consejos e información incluidos de manera orgánica en la aplicación.

## 🚀 Funcionalidades

- Marketplace para servicios y productos entre emprendedores
- Sistema de pagos integrado con DeUna (Códigos QR)
- Verificación de proveedores con integración de datos del SRI y SuperCias
- Dashboard con métricas para análisis de visitas y tasa de conversión
- Sistema de puntuación (score) para verificar confiabilidad
- Contenido educativo sobre finanzas y emprendimiento

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React + Vite
- **Backend**: FastAPI (Python)
- **Base de Datos**: MongoDB
- **Diseño**: Figma
- **Control de Versiones**: GitHub
- **Servidor Web**: Node.js

## 📂 Estructura del Proyecto

```
/
├── README.md          # Documentación principal del proyecto
├── backend/           # Servidor FastAPI
│   ├── _pycache_/     # Archivos de caché de Python
│   ├── .env           # Variables de entorno para el backend
│   ├── main.py        # Punto de entrada principal de la API
│   ├── requirements.txt # Dependencias del backend
│   └── test.py        # Scripts de pruebas
└── frontend/          # Aplicación React + Vite
    ├── public/        # Archivos estáticos públicos
    ├── src/           # Código fuente React
    │   ├── Pages/     # Componentes de páginas
    │   │   ├── Servicios.jsx
    │   │   ├── home.css
    │   │   ├── home.jsx
    │   │   └── servicios.css
    │   ├── assets/    # Recursos estáticos
    │   ├── components/# Componentes reutilizables
    │   │   ├── chats/        # Componentes de chat
    │   │   ├── compradores/  # Funcionalidad para compradores
    │   │   ├── InfoNegocios/ # Información de negocios
    │   │   ├── listNegocios/ # Listado de negocios
    │   │   └── ui/           # Componentes de interfaz
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    └── vite.config.js
```

## 📦 Instalación y Configuración

### Prerrequisitos

- Node.js (v18 o superior)
- Python (v3.9 o superior)
- MongoDB

### Backend (FastAPI)

```bash
# Clonar el repositorio
git clone https://github.com/CarlosCordovaGitHub/DEUNA.git
cd DEUNA/backend

# Crear entorno virtual
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate

# Instalar dependencias
pip install -r requirements.txt

# Configurar variables de entorno
cp .env.example .env
# Editar el archivo .env con tus credenciales

# Iniciar servidor
uvicorn main:app --reload
```

### Frontend (React + Vite)

```bash
# Navegar a la carpeta del frontend
cd ../frontend

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

## 👥 Equipo Push&Commit

- Sebastián Quijia - quijiasebastian@gmail.com - Scrum Master
- Gabriela Cárdenas - gaby.01221@gmail.com - Scrum Team
- Sebastián Jaramillo - sjaramillopuce@gmail.com - Scrum Team
- Dilan Andrade - andradedilan23@gmail.com - Scrum Team
- Carlos Córdova - carlos._cordova@hotmail.com - Scrum Team
- Hernán Sánchez - herez2002@gmail.com - Scrum Team

## 📊 Metodología de Implementación

Utilizamos la metodología Scrum para el desarrollo de este proyecto, combinada con principios de Design Thinking:

1. **Empatizar**: Entrevistas y encuestas a emprendedores para entender sus necesidades.
2. **Definir**: Identificación de problemas clave como la falta de verificación, altas comisiones y necesidad de herramientas de análisis.
3. **Idear**: Sesiones de brainstorming para generar soluciones innovadoras.
4. **Prototipar**: Diseño de interfaces y funcionalidades clave.
5. **Testear**: Pruebas con usuarios reales para obtener feedback.

## 🤝 Cómo Contribuir

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - un proyecto de código abierto desarrollado para el hackathon.

## 📬 Contacto

Si tienes preguntas o sugerencias, no dudes en contactarnos a través de:

- Email del equipo: quijiasebastian@gmail.com, gaby.01221@gmail.com, sjaramillopuce@gmail.com, andradedilan23@gmail.com, carlos._cordova@hotmail.com, herez2002@gmail.com

---

<div align="center">
  <p>Hecho por el equipo Push&Commit</p>
</div>