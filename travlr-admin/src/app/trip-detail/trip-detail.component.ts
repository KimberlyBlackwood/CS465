import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TripsService } from '../trips.service';
import { Trip } from '../trip';

@Component({
  selector: 'app-trip-detail',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TripDetailComponent {

  tripCode = '';
  trip?: Trip;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private tripsService: TripsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.tripCode = this.route.snapshot.params['tripCode'];
    console.log('TripDetailComponent: tripCode =', this.tripCode);

    this.tripsService.getTrip(this.tripCode).subscribe({
      next: (data) => {
        console.log('TripDetailComponent: DATA RECEIVED:', data);
        this.trip = data;
        this.errorMessage = '';
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('TripDetailComponent: ERROR:', err);
        this.errorMessage = 'Trip not found.';
        this.trip = undefined;
        this.cdr.detectChanges();
      }
    });
  }
}
