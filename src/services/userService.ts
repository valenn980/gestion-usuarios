import type { User } from '../types/user';

/**
 * Función que obtiene la lista de usuarios desde una API externa.
 * 
 * Esta función hace una solicitud HTTP a la API de usuarios, convierte la
 * respuesta en formato JSON a un arreglo de objetos `User` y filtra
 * únicamente aquellos que tienen `status: true`.
 * 
 * @returns {Promise<User[]>} Una promesa que se resuelve con un array de usuarios activos.
 */

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('https://api.fake-rest.refine.dev/users');
  const data: User[] = await res.json();
  return data.filter(user => user.status);
};
