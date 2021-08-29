import { Injectable } from '@angular/core';
import { CarrierTariff, OverweightBaggageParams, PassengerData, Tariff } from './types';

@Injectable({
  providedIn: 'root'
})
export class TariffsService {

  constructor() { }

  
  rzdTariffs: CarrierTariff[] = [
    {
      name: 'Эконом',
      params: {
        costPerKm: 0.5,
        overweightBaggageParams: {
          weight: 15,
          isPerKg: true,
          cost: 50,
        },
        maxBaggageWeight: 50,
        ageDiscountParams: {
          age: 5,
          discountPercent: 50,
          isWithBaggage: false,
        },
      },
    },
    {
      name: 'Продвинутый',
      params: {
        costPerKm: 2,
        overweightBaggageParams: {
          weight: 20,
          isPerKg: true,
          cost: 50,
        },
        maxBaggageWeight: 60,
        ageDiscountParams: {
          age: 8,
          discountPercent: 30,
          isWithBaggage: false,
        },
      },
    },
    {
      name: 'Люкс',
      params: {
        costPerKm: 4,
        maxBaggageWeight: 60,
        ageDiscountParams: {
          age: 16,
          discountPercent: 20,
          isWithBaggage: true,
        },
      },
    },
  ]

  aeroflotTariffs: CarrierTariff[] = [
    {
      name: 'Эконом',
      params: {
        costPerKm: 4,
        overweightBaggageParams: {
          weight: 5,
          isPerKg: false,
          cost: 4000,
        },
        maxBaggageWeight: 20,
      },
    },
    {
      name: 'Продвинутый',
      params: {
        costPerKm: 8,
        overweightBaggageParams: {
          weight: 20,
          isPerKg: false,
          cost: 5000,
        },
        maxBaggageWeight: 50,
        ageDiscountParams: {
          age: 7,
          discountPercent: 30,
          isWithBaggage: false,
        },
      },
    },
    {
      name: 'Люкс',
      params: {
        costPerKm: 15,
        maxBaggageWeight: 50,
        ageDiscountParams: {
          age: 16,
          discountPercent: 30,
          isWithBaggage: false,
        },
      },
    },
  ]

  tariffs: any = {
    'Аэрофлот': this.aeroflotTariffs,
    'РЖД': this.rzdTariffs,
  }

  getTariffs(name: string): CarrierTariff[] {
    return this.tariffs[name];
  }

  getBaggageCost(baggageWeight: number, overweightBaggageParams: OverweightBaggageParams): number {
    if (baggageWeight <= overweightBaggageParams.weight) {
      return 0;
    }
    if (overweightBaggageParams.isPerKg) {
      return (baggageWeight - overweightBaggageParams.weight) * overweightBaggageParams.cost;
    }
    return overweightBaggageParams.cost;
  }

  getCost(tariff: Tariff, passengerData: PassengerData): number | null {
    const {
      costPerKm,
      overweightBaggageParams,
      maxBaggageWeight,
      ageDiscountParams,
    } = tariff;

    const {
      distance,
      age,
      baggageWeight,
    } = passengerData;

    if (baggageWeight > maxBaggageWeight) {
      return null;
    }

    const distanceCost = costPerKm * distance;
    const baggageCost = overweightBaggageParams 
      ? this.getBaggageCost(baggageWeight, overweightBaggageParams)
      : 0;

    const costWithoutDiscount = distanceCost + baggageCost;

    if (ageDiscountParams === undefined || age > ageDiscountParams.age) {
      return costWithoutDiscount;
    }
    
    if (ageDiscountParams.isWithBaggage) {
      return (costWithoutDiscount * (100 - ageDiscountParams.discountPercent)) / 100;
    }

    return (distanceCost * (100 - ageDiscountParams.discountPercent)) / 100 + baggageCost;
  }

}
