import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonFooter } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const VisualizarReservas: React.FC = () => {
  const history = useHistory();

  const reservas = [
    { id: 1, nombre: 'Juan Pérez', fecha: '2023-10-01', hora: '19:00', mesa: 'Mesa 1' },
    { id: 2, nombre: 'Ana Gómez', fecha: '2023-10-02', hora: '20:00', mesa: 'Mesa 2' },
    { id: 3, nombre: 'Carlos López', fecha: '2023-10-03', hora: '18:30', mesa: 'Mesa 3' },
    { id: 4, nombre: 'Lucía Fernández', fecha: '2023-10-04', hora: '21:00', mesa: 'Mesa 4' },
  ]; // 👈 Datos de ejemplo

  const handleAddReservation = () => {
    history.push('/gestion-reservas');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reservas Actuales</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {reservas.length > 0 ? (
          <IonList>
            {reservas.map((reserva) => (
              <IonItem key={reserva.id}>
                <IonLabel>
                  <h2>{reserva.nombre}</h2>
                  <p>
                    Fecha: {reserva.fecha} - Hora: {reserva.hora} - {reserva.mesa}
                  </p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        ) : (
          <p style={{ textAlign: 'center', marginTop: '20px' }}>No hay reservas disponibles.</p>
        )}
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton expand="full" onClick={handleAddReservation}>
            Agregar Nueva Reserva
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default VisualizarReservas;
