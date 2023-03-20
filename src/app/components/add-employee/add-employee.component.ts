import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  departments: Array<any> = [
    { id: 1, name: "HR", value: "HR", checked: false },
    { id: 2, name: "Sales", value: "Sales", checked: false },
    { id: 3, name: "Finance", value: "Finance", checked: false },
    { id: 4, name: "Engineer", value: "Engineer", checked: false },
    { id: 5, name: "Other", value: "Other", checked: false }
  ]


  ngOnInit(): void {
  }

  /**
    * Salary slider
    */
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

}
