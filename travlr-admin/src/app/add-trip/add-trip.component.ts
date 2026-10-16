import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TripsService } from '../trips.service';
import { Trip } from '../trip';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent {

  trip: Trip = {
    _id: '',            
    code: '',
    name: '',
    description: '',
    resort: '',
    length: 0,
    start: '',
    perPerson: 0,
    image: ''
  };

  message = '';

  constructor(
    private tripsService: TripsService,
    private cdr: ChangeDetectorRef
  ) {}

  onSubmit() {
    console.log('AddTripComponent: SUBMIT CALLED', this.trip);

    this.tripsService.addTrip(this.trip).subscribe({
      next: (data) => {
        console.log('AddTripComponent: TRIP ADDED', data);
        this.message = 'Trip successfully added!';
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('AddTripComponent: ERROR', err);
        this.message = 'Error adding trip.';
        this.cdr.detectChanges();
      }
    });
  }
}
