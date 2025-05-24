import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { CustomResponse } from '../../../utilities/types/Response';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-appointment',
  imports: [
    TableModule,
  ],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {
  appointment: any[] = [];
  loading: boolean = true;
  @ViewChild('filter') filter!: ElementRef;
  service = inject(AppointmentService);
  totalRecords: number = 0;
  ngOnInit(): void {
    this.loadPaginatedData({ first: 0, rows: 10 });
  }
  loadPaginatedData(event: any) {
    this.loading = true;
    const pageIndex = event.first / event.rows + 1;
    const pageSize = event.rows;
    this.service.GetAll(pageIndex, pageSize, "").subscribe(
      (response: CustomResponse) => {
        this.appointment = response.data.paginatedData;
        this.totalRecords = response.data.totalPages * pageSize;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading data', error);
        this.loading = false;
      }
    );
  }



  getSeverity(status: string) {
    switch (status) {
      
      case '1':
      case '3':
      case '5':
      case '7':
      case '9':
        return 'success';

      case 'negotiation':
      case 'lowstock':
      case 'LOWSTOCK':
      case 'PENDING':
      case 'pending':
        return 'warn';

      case 'string':
      case 'instock':
      case 'INSTOCK':
      case 'DELIVERED':
      case 'delivered':
        return 'danger';

      default:
        return 'info';
    }
  }
}
