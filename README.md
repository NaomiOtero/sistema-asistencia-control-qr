  # 📱 Control de Asistencia QR — App Web

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

Sistema web de control de asistencia escolar mediante códigos QR. Permite a los alumnos registrarse, generar su QR único y a los administradores escanear y gestionar la asistencia en tiempo real.

---

## 🚀 Demo

> Sirve los archivos con **Live Server** (VS Code) o cualquier servidor local en `localhost`.  
> La cámara requiere HTTPS o localhost para funcionar.

---

## ✨ Características

### Rol Alumno
- 🔐 Registro e inicio de sesión con correo y contraseña
- 📋 Perfil con datos académicos editables
- 🔲 Generación automática de QR único al registrarse
- 📊 Historial personal de entradas con filtros por mes y fecha
- 📱 Pantalla de QR a pantalla completa para facilitar el escaneo
- ⬇️ Descarga del QR como imagen PNG

### Rol Administrador
- 📈 Dashboard con estadísticas en tiempo real
- 📷 Escáner de QR mediante cámara del dispositivo
- 👥 Gestión completa de alumnos (CRUD)
- 📋 Historial global de asistencias con filtros
- 🔄 Sistema de baja/reactivación de alumnos
- 📑 Sección separada de alumnos activos e inactivos

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 + CSS3 + JS puro | Frontend sin frameworks |
| Firebase Authentication | Registro e inicio de sesión |
| Firebase Firestore | Base de datos en tiempo real |
| qrcode.js | Generación de códigos QR |
| html5-qrcode | Escáner QR desde cámara web |

---

## 📁 Estructura del proyecto

```
asistencia-web/
├── index.html              ← Login
├── registro.html           ← Registro + generación de QR
├── perfil.html             ← Perfil del alumno
├── entradas.html           ← Historial de asistencias
├── qr.html                 ← Pantalla de QR completo
├── admin/
│   ├── dashboard.html      ← Panel de administración
│   ├── alumnos.html        ← CRUD de alumnos
│   └── escanear.html       ← Escáner QR
├── css/
│   └── styles.css          ← Estilos globales
└── js/
    └── firebase-config.js  ← Configuración Firebase
```

---

## 🗄️ Estructura de la Base de Datos

### Colección `usuarios`
```json
{
  "uid": "string",
  "email": "string",
  "rol": "alumno | admin",
  "nombre": "string",
  "createdAt": "timestamp",
  "activo": "boolean"
}
```

### Colección `alumnos`
```json
{
  "uid": "string",
  "matricula": "string",
  "nombre": "string",
  "carrera": "string",
  "semestre": "number",
  "qrData": "string (uid)",
  "createdAt": "timestamp"
}
```

### Colección `asistencia`
```json
{
  "alumnoUid": "string",
  "alumnoNombre": "string",
  "matricula": "string",
  "fecha": "timestamp",
  "tipo": "entrada | salida",
  "registradoPor": "string (uid admin)",
  "registradoPorNombre": "string"
}
```

---

## ⚙️ Instalación y configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/control-asistencia-qr-web.git
cd control-asistencia-qr-web
```

### 2. Crear proyecto en Firebase

1. Ve a [console.firebase.google.com](https://console.firebase.google.com)
2. Crea un nuevo proyecto
3. Activa **Authentication** → Correo electrónico/contraseña
4. Crea una base de datos **Firestore** en modo prueba
5. En Configuración del proyecto → Tus apps → Web → copia las credenciales

### 3. Configurar Firebase

Abre `js/firebase-config.js` y reemplaza con tus credenciales:

```javascript
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROJECT_ID.firebaseapp.com",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_PROJECT_ID.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};
```

### 4. Crear índices en Firestore

La primera vez que cargues `entradas.html`, aparecerá en la consola del navegador un enlace para crear el índice necesario. Haz clic en él y espera 2-3 minutos.

### 5. Ejecutar

Abre el proyecto con **Live Server** en VS Code o cualquier servidor local. No abras los archivos directamente en el navegador (file://) ya que Firebase requiere un servidor.

---

## 🔒 Validaciones implementadas

| Campo | Regla |
|---|---|
| Nombre / Apellidos | Solo letras, espacios y acentos |
| Matrícula | Solo números, mínimo 6 dígitos |
| Correo | Formato válido con @ y dominio |
| Contraseña | Mínimo 6 caracteres |
| Confirmar contraseña | Debe coincidir exactamente |
| Selects | Selección obligatoria |

---

## 📸 Pantallas

| Pantalla | Descripción |
|---|---|
| Login | Inicio de sesión con validación y redirección por rol |
| Registro | Formulario con selector de rol y generación de QR |
| Perfil | Datos académicos con edición inline |
| Mis entradas | Historial con filtros por mes y fecha |
| Mi QR | QR a pantalla completa con opción de descarga |
| Dashboard admin | Estadísticas y últimas entradas |
| Gestión alumnos | CRUD con tabs activos/inactivos |
| Escanear QR | Cámara con registro de entrada/salida |

---

## 👩‍💻 Autora

**Naomi Otero Flores**  
Proyecto final — Aplicaciones Móviles  

---

## 📄 Licencia

Este proyecto fue desarrollado con fines académicos.
