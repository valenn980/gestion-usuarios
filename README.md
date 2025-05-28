# Gestión de Usuarios 👥

Una aplicación web construida con **React + TypeScript** que permite gestionar usuarios a través de una tabla interactiva. Los datos se consumen desde una API pública, con funcionalidades como agregado y eliminación de registros.

---

## 🚀 Tecnologías Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [react-hot-toast](https://react-hot-toast.com/) – Notificaciones elegantes
- CSS Modules – Estilos locales por componente

---

## 📦 Características

- 🔍 **Lectura de usuarios** desde una API pública (`https://api.fake-rest.refine.dev/users`)
- ✅ **Filtrado automático** de usuarios activos (`status: true`)
- ➕ **Agregar usuario** (formulario con nombre, apellido y email)
- ❌ **Eliminar usuario** con confirmación visual
- 📋 **Interfaz amigable** con estilos personalizados
- 🔔 **Toasts de éxito** al agregar o eliminar
- 📄 **Descarga de PDF** con listado de usuarios 

---

## 📁 Estructura del Proyecto

src/
│
├── components/ # Componentes reutilizables (tabla, formulario)
├── hooks/ # Custom hooks (lógica de usuarios)
├── services/ # Funciones de consumo de API
├── styles/ # Estilos en CSS Modules
├── types/ # Tipado TypeScript (interfaces)
├── App.tsx # Componente principal
└── main.tsx # Punto de entrada de la app

## 🧪 Scripts disponibles

En el directorio del proyecto puedes correr:

```bash
npm install       # Instala dependencias
npm run dev       # Corre la app en modo desarrollo
npm run build     # Construye la app para producción

