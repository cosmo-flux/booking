import type { Frontend } from '@cosmo-flux/foundation.subscriber';
import { RedPlanetReservations } from '@cosmo-flux/booking.pages.red-planet-reservations';

export const bookingMfe: Frontend = (app) => {
  app.registerRoutes([
    {
      path: '/reservations',
      element: <RedPlanetReservations />,
    },
  ]);
  app.registerHeaderLinks([
    {
      label: 'Reservations',
      path: '/reservations',
    },
  ]);
  return app;
};
