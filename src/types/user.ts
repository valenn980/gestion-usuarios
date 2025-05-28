/**
 * Interfaz que representa un usuario en la aplicación.
 * 
 * Esta interfaz se utiliza para tipar los objetos de usuario que se
 * obtienen desde la API o que se crean manualmente en la aplicación.
 */
export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    status: boolean;
}