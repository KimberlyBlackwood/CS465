import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trip } from './trip';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  private apiUrl = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }

  getTrip(tripCode: string): Observable<Trip> {
    const url = `${this.apiUrl}/${tripCode}`;
    return this.http.get<Trip>(url);
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.apiUrl, trip);
  }
}
