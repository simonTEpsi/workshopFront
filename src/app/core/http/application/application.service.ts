import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../../../shared/models/application.model';

@Injectable({
    providedIn: 'root'
})
export class ApplicationService {

    constructor(private readonly http: HttpClient) { }

    getApplications(): Observable<Application[]> {
        return this.http.get<Application[]>('url', {withCredentials: true});
      }
    
}
