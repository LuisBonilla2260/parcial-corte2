import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import SeleccionFechaHora from '../components/SeleccionFechaHora';
import IngresoDatosCliente from '../components/IngresoDatosCliente';
import SeleccionMesa from '../components/SeleccionMesa';

const GestionReservas: React.FC = () => {
  const history = useHistory();

  const handleViewReservations = () => {
    history.push('/visualizar-reservas'); // 👈 Navegación dinámica
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gestión de Reservas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <SeleccionFechaHora />
        <IngresoDatosCliente />
        <SeleccionMesa />
        <IonButton expand="full" onClick={handleViewReservations}>
          Ver Reservas
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default GestionReservas;
