import { useEffect, useState } from 'react';
import type { User } from '../types/user';
import { fetchUsers } from '../services/userService';
import toast from 'react-hot-toast';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

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
        },
      });
  };

  const deleteUser = (id: number) => {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id));
      toast.success('Usuario eliminado con éxito', {
        duration: 2000,
        style: {
          background: '#333',
          color: '#fff',
        },
      });
    }
  };

  return { users, addUser, deleteUser };
};
