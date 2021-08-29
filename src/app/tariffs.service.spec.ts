import { TestBed } from '@angular/core/testing';

import { TariffsService } from './tariffs.service';

describe('TariffsService', () => {
  let service: TariffsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [TariffsService] });
    service = TestBed.inject(TariffsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getCost should return correct value', () => {
    const passengerData = {
      distance: 100,
      age: 10,
      baggageWeight: 10,
    };

    const tariffWithNoOverweight = {
      costPerKm: 10,
      maxBaggageWeight: 50,
      ageDiscountParams: {
        age: 16,
        discountPercent: 30,
        isWithBaggage: false,
      },
    };

    const tariffWithBaggagePerKg = {
      costPerKm: 10,
      overweightBaggageParams: {
        weight: 0,
        isPerKg: true,
        cost: 100,
      },
      maxBaggageWeight: 50,
      ageDiscountParams: {
        age: 5,
        discountPercent: 50,
        isWithBaggage: false,
      },
    };    

    const tariffWithAgeDiscountWithBaggage = {
      costPerKm: 2,
      overweightBaggageParams: {
        weight: 0,
        isPerKg: true,
        cost: 100,
      },
      maxBaggageWeight: 60,
      ageDiscountParams: {
        age: 16,
        discountPercent: 50,
        isWithBaggage: true,
      },
    };

    const tariffWithMaxOverweight  = {
      costPerKm: 1,
      maxBaggageWeight: 1,
      ageDiscountParams: {
        age: 5,
        discountPercent: 50,
        isWithBaggage: true,
      },
    };

    expect(service.getCost(tariffWithNoOverweight, passengerData))
      .toBe(700, 'no overweight info');

    expect(service.getCost(tariffWithBaggagePerKg, passengerData))
      .toBe(2000, 'baggage costs per kg');

    expect(service.getCost(tariffWithAgeDiscountWithBaggage, passengerData))
      .toBe(600, 'age discount applies to baggage')

    expect(service.getCost(tariffWithMaxOverweight, passengerData))
      .toBe(null, 'max overweight')
  });
});
