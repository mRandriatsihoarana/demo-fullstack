export interface Country {
  id: number;
  name: string;
  code: string;
}

export interface City {
  id: number;
  name: string;
}

export interface CityDetails {
  id: number;
  name: string;
  zipCode: string;
  population: number;
  description: string;
  countryId: number;
  countryName: string;
  countryCode: string;
}

export interface CitiesResponse {
  content: City[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
}