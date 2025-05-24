import { Injectable, inject } from '@angular/core';
import { MasterService } from './master.service';
import { CustomResponse } from '../../utilities/types/Response';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }

  //router = inject(Router);
  masterService = inject(MasterService);

  GetAll(pageIndex: number = 1, pageSize: number = 10, queryString: string = ``) {
    if (queryString == "")
      queryString = `?pageNumber=${pageIndex}&pageSize=${pageSize}`;

    const url = `Appointment/GetAll` + queryString;
    return this.masterService.get<CustomResponse>(url);
  }

}
