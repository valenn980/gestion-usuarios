import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import { useUsers } from './hooks/useUsers';
import styles from './App.module.css';
import { Toaster } from 'react-hot-toast';

function App() {
  const { users, addUser, deleteUser } = useUsers();

  return (
    <div className={styles.containerPrincipal}>
      <h1 className={styles.titlePrincipal}>Gestión de Usuarios</h1>
      <AddUserForm onAdd={addUser} />
      <UserTable users={users} onDelete={deleteUser} />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
