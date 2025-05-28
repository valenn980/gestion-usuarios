import type { User } from '../types/user';
import styles from './styles/UserTable.module.css';

interface Props {
  users: User[];
  onDelete: (id: number) => void;
}

export default function UserTable({ users, onDelete }: Props) {
  return (
    <table className={styles.containerTable}>
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2">Nombre</th>
          <th className="p-2">Apellido</th>
          <th className="p-2">Email</th>
          <th className="p-2">Acción</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id} className="border-t">
            <td className="p-2">{u.firstName}</td>
            <td className="p-2">{u.lastName}</td>
            <td className="p-2">{u.email}</td>
            <td className="p-2">
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => onDelete(u.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
