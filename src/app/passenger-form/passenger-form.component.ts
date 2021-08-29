import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PassengerData } from '../types';
import { TariffsService } from '../tariffs.service';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss'],
})
export class PassengerFormComponent implements OnInit {
  passengerData!: PassengerData;

  carriers!: string[];

  passengerForm = this.fb.group({
    distance: [null, [
      Validators.required,
      Validators.min(1),
    ]],
    age: [null, [
      Validators.required,
      Validators.min(0),
    ]],
    baggageWeight: [null, [
      Validators.required,
      Validators.min(0),
    ]],
  });

  constructor(
    private fb: FormBuilder,
    private tariffsService: TariffsService,
  ) {
  }

  ngOnInit(): void {
    this.carriers = Object.keys(this.tariffsService.tariffs);
  }

  onSubmit(): void {
    this.passengerData = this.passengerForm.value;
  }

}
