import React from 'react';
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';

const SeleccionMesa: React.FC = () => {
  return (
    <IonItem>
      <IonLabel>Mesa</IonLabel>
      <IonSelect placeholder="Seleccione una mesa">
        <IonSelectOption value="mesa1">Mesa 1</IonSelectOption>
        <IonSelectOption value="mesa2">Mesa 2</IonSelectOption>
        <IonSelectOption value="mesa3">Mesa 3</IonSelectOption>
      </IonSelect>
    </IonItem>
  );
};

export default SeleccionMesa;
