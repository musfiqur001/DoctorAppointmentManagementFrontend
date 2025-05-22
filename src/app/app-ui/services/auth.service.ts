import { Injectable } from '@angular/core';
import { MasterService } from './master.service';
import { CustomResponse } from '../../utilities/types/Response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private masterService: MasterService) { }

  onLogin(dataObject: any) {
    return this.masterService.post<CustomResponse>('Auth/Login', dataObject);
  }
  onRegister(dataObject: any) {
    return this.masterService.post<CustomResponse>('Auth/Register', dataObject);
  }
}
