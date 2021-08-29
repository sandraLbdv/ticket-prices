export interface PassengerData {
  distance: number;
  age: number;
  baggageWeight: number;
}

export interface Tariff {
  costPerKm: number;
  overweightBaggageParams?: OverweightBaggageParams
  maxBaggageWeight: number;
  ageDiscountParams?: {
    age: number;
    discountPercent: number;
    isWithBaggage: boolean;
  };
}

export interface OverweightBaggageParams {
  weight: number;
  isPerKg: boolean;
  cost: number;
}

export interface CarrierTariff {
  name: string;
  params: Tariff;
}

export interface TariffCost {
  name: string;
  cost: number;
}
