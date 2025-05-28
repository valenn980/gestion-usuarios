import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import { useUsers } from './hooks/useUsers';
import styles from './App.module.css';
import { Toaster } from 'react-hot-toast';
import { exportUsersToPDF } from './utils/exportToPdf';

/**
 * Componente principal de la aplicación.
 * 
 * Este componente maneja la visualización y gestión de usuarios.
 * Utiliza el hook `useUsers` para manejar:
 * - la obtención de usuarios desde una API,
 * - la adición de nuevos usuarios,
 * - y la eliminación de usuarios existentes.
 * 
 * Incluye:
 * - Un formulario para agregar usuarios.
 * - Una tabla para mostrar los usuarios activos.
 * - Un sistema de notificaciones (Toaster) para mostrar mensajes de éxito.
 * - Un botón para descargar pdf con los usuarios en la tabla
 */

function App() {
  // Hook personalizado que gestiona el estado y acciones sobre los usuarios
  const { users, addUser, deleteUser } = useUsers();

  return (
    <div className={styles.containerPrincipal}>
      <div className={styles.buttonPdfContainer}>
        <button className={styles.buttonPdf} onClick={() => exportUsersToPDF(users)}>
          Descargar PDF
        </button>
      </div>
      <h1 className={styles.titlePrincipal}>Gestión de Usuarios</h1>
      <AddUserForm onAdd={addUser} />
      <UserTable users={users} onDelete={deleteUser} />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
