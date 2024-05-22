import { Component } from '@angular/core';
import { Service, DataItem } from './app-service';

@Component({
  selector: 'app-root',
  providers: [Service],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
 
  data: DataItem[];
  
  constructor(service: Service) {
    this.data = service.getChartData();
  }
  customizeArgumentAxisText(date: any) {
    const year = date.value.getFullYear();
    const month = (date.value.getMonth() + 1).toString().padStart(2, '0'); 
    const day = date.value.getDate().toString().padStart(2, '0');
    const hours = date.value.getHours().toString().padStart(2, '0');
    const minutes = date.value.getMinutes().toString().padStart(2, '0');
    const seconds = date.value.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
}

