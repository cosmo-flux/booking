import { App } from '@cosmo-flux/foundation.subscriber';
import { MemoryRouter } from 'react-router-dom';
import { bookingMfe } from './booking-mfe.js';

export const BasicBookingMfe = () => {
  const app = new App();
  bookingMfe(app);
  return <MemoryRouter>{app.renderApp()}</MemoryRouter>;
};
