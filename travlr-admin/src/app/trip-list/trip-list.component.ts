import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TripsService } from '../trips.service';
import { Trip } from '../trip';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, RouterModule],
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  trips: Trip[] = [];

  constructor(
    private tripsService: TripsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('TripListComponent: ngOnInit() RUNNING');
    this.loadTrips();
  }

  loadTrips() {
    console.log('TripListComponent: loadTrips() CALLED');

    this.tripsService.getTrips().subscribe({
      next: (data) => {
        console.log('TripListComponent: DATA RECEIVED:', data);
        this.trips = data;

        // Force Angular to update UI
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log('TripListComponent: ERROR:', err);
      }
    });
  }
}
