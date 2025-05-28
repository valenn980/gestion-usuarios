import { useEffect, useState } from 'react';
import type { User } from '../types/user';
import { fetchUsers } from '../services/userService';

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
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const deleteUser = (id: number) => {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id));
    }
  };

  return { users, addUser, deleteUser };
};
