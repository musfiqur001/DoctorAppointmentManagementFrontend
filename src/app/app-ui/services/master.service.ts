import { Injectable } from '@angular/core';
import { Common } from '../../utilities/Common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private apiUrl = Common.getApiBaseUrl();

  constructor(private http: HttpClient) { }

  // GET request method
  get<T>(endpoint: string): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get<T>(url, Common.getApiHeader());
  }

  // POST request method
  post<T>(endpoint: string, data: any): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.post<T>(url, data, Common.getApiHeader()
    );
  }

  // PUT request method
  put<T>(endpoint: string, data: any): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.put<T>(url, data, Common.getApiHeader());
  }

  // DELETE request method
  delete<T>(endpoint: string): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.delete<T>(url, Common.getApiHeader());
  }
}
