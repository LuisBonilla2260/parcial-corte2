import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import GestionReservas from './pages/GestionReservas'; // 👈 Importar Gestión de Reservas


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import VisualizarReservas from './pages/VisualizarReservas';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        <Route exact path="/visualizar-reservas">
          <VisualizarReservas />
        </Route>

        {/* 👇 Nueva ruta para la pantalla principal de Gestión de Reservas */}
        <Route exact path="/gestion-reservas">
          <GestionReservas />
        </Route>

        {/* 👇 Nueva ruta para la vista de Visualización de Reservas */}
        <Route exact path="/visualizar-reservas">
          <VisualizarReservas />
        </Route>

        {/* Redirección por defecto */}
        <Route exact path="/">
          <Redirect to="/visualizar-reservas" />
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
