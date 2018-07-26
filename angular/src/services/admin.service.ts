import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from './service';
import { IAdmin } from '../interfaces/admin';
import { Admin } from '../classes/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService extends Service{

  constructor(private http:HttpClient) { super() }

  authenticate(admin:Admin):Observable<any>
  {
      this.Path = "/admin?username=" + admin.username + '&password=' + admin.password;
      return this.http.get<{success:boolean}>(this.Url);
  }
}
