import type { User } from '../types/user';
import styles from './styles/UserTable.module.css';

/**
 * Props del componente UserTable.
 * 
 * @property users - Lista de usuarios a mostrar en la tabla.
 * @property onDelete - Función que se ejecuta al eliminar un usuario, recibe el ID del usuario.
 */
interface Props {
  users: User[];
  onDelete: (id: number) => void;
}

/**
 * Componente que renderiza una tabla con la información de los usuarios.
 *
 * Muestra los campos: nombre, apellido, email, y un botón para eliminar
 * cada usuario. 
 *
 * @param users Lista de usuarios activos.
 * @param onDelete Función que se ejecuta al presionar el botón "Eliminar".
 * @returns JSX con la tabla de usuarios.
 */
export default function UserTable({ users, onDelete }: Props) {
  return (
    <table className={styles.containerTable}>
      <thead>
        <tr>
          <th className={styles.titleTable}>Nombre</th>
          <th className={styles.titleTable}>Apellido</th>
          <th className={styles.titleTable}>Email</th>
          <th className={styles.titleTable}>Acción</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id} className="border-t">
            <td className={styles.itemTable}>{u.firstName}</td>
            <td className={styles.itemTable}>{u.lastName}</td>
            <td className={styles.itemTable}>{u.email}</td>
            <td className={styles.itemTable}>
                <div className={styles.containerButton}>
                    <button className={styles.button} onClick={() => onDelete(u.id)}>
                        Eliminar
                    </button>
                </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
