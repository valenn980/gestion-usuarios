import type { User } from '../types/user';

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('https://api.fake-rest.refine.dev/users');
  const data: User[] = await res.json();
  return data.filter(user => user.status);
};
