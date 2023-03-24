import { Component } from '@angular/core';
import { Employee } from '../../model/Employee';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  employeeCount: number = 0;
  employeeList: Employee[] = []

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getEmployeeData().subscribe(response => {
      this.employeeList = response.data;
      this.employeeCount = this.employeeList.length;
      console.log(this.employeeList);
    })
  }

  delete(employeeId: number): void {
    console.log(employeeId)
    this.httpService.deleteEmployeeData(employeeId).subscribe(response => {
      console.log(response);
      this.ngOnInit();
    });
  }

}
