import React, { useState } from 'react';
import { IonItem, IonLabel, IonDatetime } from '@ionic/react';

const SeleccionFechaHora: React.FC = () => {
  const [fechaHora, setFechaHora] = useState<string | undefined>();

  return (
    <IonItem>
      <IonLabel position="stacked">Fecha y Hora</IonLabel>
      <IonDatetime
        value={fechaHora}
        presentation="date-time"
        onIonChange={(e) => {
          const valor = e.detail.value;
          if (typeof valor === 'string') {
            setFechaHora(valor);
          } else if (Array.isArray(valor)) {
            setFechaHora(valor[0]); // toma el primer valor si es arreglo
          }
        }}
      />
    </IonItem>
  );
};

export default SeleccionFechaHora;
