import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

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

  employeeForm!: FormGroup

  constructor(private formBuilder: FormBuilder) {

    this.employeeForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required,
      Validators.maxLength(30),
      Validators.minLength(3)]),
      profilePic: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      department: new FormArray([], Validators.required),
      salary: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      note: new FormControl('', Validators.required)

    })
  }

  public myError = (controlName: string, errorName: string) => {
    return this.employeeForm.controls[controlName].hasError(errorName)
  }
  get fullName(): FormControl {
    return this.employeeForm.get('name') as FormControl
  }



  submitForm() {
    console.log(this.employeeForm.value)
  }

  resetForm() {

    this.employeeForm = this.formBuilder.group({
      name: new FormControl(''),
      profilePic: new FormControl(''),
      gender: new FormControl(''),
      salary: new FormControl(''),
      startDate: new FormControl(''),
      note: new FormControl(''),
      department: new FormArray([])
    })

  }


  /**
   * On change event for checkbox. In this we can select multiple checkobox 
   * for department and store is as an array.
   * @param event 
   */
  onCheckboxChange(event: MatCheckboxChange) {
    const department: FormArray = this.employeeForm.get('department') as FormArray;

    if (event.checked) {
      department.push(new FormControl(event.source.value));
      console.log(department);
    } else {
      const index = department.controls.findIndex(x => x.value === event.source.value);
      department.removeAt(index);
    }
  }

  /**
    * To read Salary value from slider
    */
  salary: number = 400000;
  updateSetting(event: any) {
    this.salary = event.value;
  }


  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

}
