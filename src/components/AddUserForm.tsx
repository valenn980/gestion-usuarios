import { useState } from 'react';
import styles from './styles/AddUserForm.module.css';

interface Props {
  onAdd: (user: { firstName: string; lastName: string; email: string }) => void;
}

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
