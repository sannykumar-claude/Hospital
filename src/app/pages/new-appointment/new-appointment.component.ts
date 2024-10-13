import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrl: './new-appointment.component.css'
})
export class NewAppointmentComponent implements OnInit {
  public patientForm: FormGroup;
  public submitted:boolean= false;


constructor(private fb: FormBuilder){
  this.patientForm = this.fb.group({
    name: ['', Validators.required],
    age: ['', [Validators.required, Validators.min(0)]],
    gender: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    email: ['', [Validators.required, Validators.email]],
  });
}
ngOnInit(): void {}

  onSubmit() {
    this.submitted=true;
    if (this.patientForm.valid) {
      this.submitted=false;
      console.log('Patient Details:', this.patientForm.value);
    }
  }



}
