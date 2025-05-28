import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import type { User } from '../types/user';

/**
 * Genera y descarga un archivo PDF con la lista de usuarios.
 * @param users Lista de usuarios a incluir en el PDF
 */
export function exportUsersToPDF(users: User[]) {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text('Lista de Usuarios Activos', 14, 22);

  autoTable(doc, {
    startY: 30,
    head: [['Nombre', 'Apellido', 'Email']],
    body: users.map(user => [user.firstName, user.lastName, user.email]),
  });

  doc.save('usuarios-activos.pdf');
}
