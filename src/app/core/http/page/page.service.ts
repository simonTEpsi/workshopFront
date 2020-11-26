import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/models/page.model';
import { Application } from '../../../shared/models/application.model';

@Injectable({
    providedIn: 'root'
})
export class PageService {

    constructor(private readonly http: HttpClient) { }

    getPages(idApp: number): Observable<Page[]> {
        return this.http.get<Page[]>('url?idApp='+idApp, {withCredentials: true});
      }
    
}
