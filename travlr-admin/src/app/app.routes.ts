import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'trips',
    loadComponent: () =>
      import('./trip-list/trip-list.component')
        .then(m => m.TripListComponent)
  },

  {
    path: '',
    redirectTo: 'trips',
    pathMatch: 'full'
  },

  {
    path: 'trips/:tripCode',
    loadComponent: () =>
      import('./trip-detail/trip-detail.component')
        .then(m => m.TripDetailComponent)
  },

  {
    path: 'add-trip',
    loadComponent: () =>
      import('./add-trip/add-trip.component')
        .then(m => m.AddTripComponent)
  }

];
