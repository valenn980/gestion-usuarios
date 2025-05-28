import { useEffect, useState } from 'react';
import type { User } from '../types/user';
import { fetchUsers } from '../services/userService';
import toast from 'react-hot-toast';

/**
 * Hook personalizado para gestionar la lista de usuarios.
 *
 * Este hook encapsula la lógica de obtención, adición y eliminación de usuarios,
 * así como el manejo de estado y notificaciones con `react-hot-toast`.
 *
 * @returns Un objeto con:
 * - `users`: Lista actual de usuarios activos.
 * - `addUser`: Función para agregar un nuevo usuario.
 * - `deleteUser`: Función para eliminar un usuario existente.
 */

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  /**
   * Agrega un nuevo usuario a la lista.
   *
   * @param user Objeto con los datos del usuario sin incluir id ni status.
   */
  const addUser = (user: Omit<User, 'id' | 'status'>) => {
    const newUser: User = {
      id: Date.now(),
      status: true,
      ...user,
    };
    setUsers((prevUsers) => [newUser, ...prevUsers]);
    toast.success('Usuario agregado con éxito', {
        duration: 2000,
        style: {
          background: '#333',
          color: '#fff',
          fontFamily: 'Montserrat'
        },
      });
  };

  /**
   * Elimina un usuario del listado por su ID, previa confirmación.
   *
   * @param id Identificador del usuario a eliminar.
   */
  const deleteUser = (id: number) => {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id));
      toast.success('Usuario eliminado con éxito', {
        duration: 2000,
        style: {
          background: '#333',
          color: '#fff',
          fontFamily: 'Montserrat'
        },
      });
    }
  };

  return { users, addUser, deleteUser };
};
