import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TariffsService } from '../tariffs.service';
import { CarrierTariff, PassengerData, TariffCost } from '../types';

@Component({
  selector: 'app-cost-info',
  templateUrl: './cost-info.component.html',
  styleUrls: ['./cost-info.component.scss'],
})
export class CostInfoComponent implements OnChanges {
  @Input() carrierName!: string;

  @Input() passengerData!: PassengerData;

  tariffs!: CarrierTariff[];

  tariffsCosts!: any[];

  constructor(private tariffsService: TariffsService) { }

  ngOnChanges(passengerData: SimpleChanges) {
    if (passengerData) {
      this.tariffs = this.tariffsService.getTariffs(this.carrierName);

      this.tariffsCosts = this.tariffs
        .map(({ name, params }): TariffCost | null => {            
          const cost = this.tariffsService.getCost(params, this.passengerData);

          const result = cost
            ? { name, cost }
            : null;
          
          return result;
        })
        .filter((tariffCost) => tariffCost !== null);   
    }
  }
}
