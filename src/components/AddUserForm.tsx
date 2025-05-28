import { useState } from 'react';
import styles from './styles/AddUserForm.module.css';

/**
 * Props del componente AddUserForm.
 * 
 * @property onAdd - Función que se llama al enviar el formulario, recibe los datos del nuevo usuario.
 */
interface Props {
  onAdd: (user: { firstName: string; lastName: string; email: string }) => void;
}

/**
 * Componente de formulario para agregar un nuevo usuario.
 * 
 * Permite ingresar nombre, apellido y correo electrónico. Al enviar el formulario:
 * - Llama a la función `onAdd` pasada por props con los datos ingresados.
 * - Limpia el formulario para una nueva entrada.
 * 
 * @param onAdd Función para agregar un nuevo usuario (pasada desde el componente padre).
 * @returns JSX que representa el formulario de entrada.
 */
export default function AddUserForm({ onAdd }: Props) {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(form);
    setForm({ firstName: '', lastName: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.containerForm}>
        <div className={styles.containerItem}>
            <p className={styles.titleItem}>Nombre*</p>
            <input
                className={styles.inputItem}
                placeholder=""
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                required
            />
        </div>
        <div className={styles.containerItem}>
            <p className={styles.titleItem}>Apellido*</p>
            <input
                className={styles.inputItem}
                placeholder=""
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                required
            />
        </div>
        <div className={styles.containerItem}>
            <p className={styles.titleItem}>Email*</p>
            <input
                className={styles.inputItem}
                placeholder=""
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
            />
        </div>
        <div className={styles.containerButton}>
            <button className={styles.button} type="submit">
                Agregar
            </button>
        </div>
    </form>
  );
}
