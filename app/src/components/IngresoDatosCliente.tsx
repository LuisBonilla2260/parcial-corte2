import React, { useState } from 'react';
import { IonItem, IonLabel, IonInput } from '@ionic/react';

const IngresoDatosCliente: React.FC = () => {
  const [contacto, setContacto] = useState('');

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) { // 👈 Permitir solo números
      setContacto(value);
    }
  };

  return (
    <>
      <IonItem>
        <IonLabel position="stacked">Nombre</IonLabel>
        <IonInput placeholder="Ingrese su nombre" />
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Contacto</IonLabel>
        <IonInput
          placeholder="Ingrese su número de contacto"
          value={contacto}
          onIonInput={handleInputChange} // 👈 Validación en tiempo real
        />
      </IonItem>
    </>
  );
};

export default IngresoDatosCliente;
