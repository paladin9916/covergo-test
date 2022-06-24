import { Location, Currency, Package } from "./enums";

export const additionalPercentage = {
  [Package.STANDARD]: 0,
  [Package.SAFE]: 50,
  [Package.SUPER_SAFE]: 75,
};

export const rateAndCurrency = {
  [Location.HONG_KONG]: {
    rate: 1,
    currency: Currency.HONG_KONG
  },
  [Location.UNITED_STATES]: {
    rate: 2,
    currency: Currency.UNITED_STATES
  },
  [Location.AUSTRALIA]: {
    rate: 3,
    currency: Currency.AUSTRALIA
  },
};
