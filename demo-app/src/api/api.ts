import type { CitiesResponse, CityDetails, Country } from "../types";

const BASE_URL = "http://localhost:8080/demo/api";

export async function fetchCountries(): Promise<Country[]> {
  const response = await fetch(`${BASE_URL}/countries`);

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  return response.json();
}

export async function fetchCitiesByCountry(
  countryId: number,
  page: number,
  size: number = 5
): Promise<CitiesResponse> {
  const response = await fetch(
    `${BASE_URL}/countries/${countryId}/cities?page=${page}&size=${size}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch cities");
  }

  return response.json();
}

export async function fetchCityDetails(cityId: number): Promise<CityDetails> {
  const response = await fetch(`${BASE_URL}/cities/${cityId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch city details");
  }

  return response.json();
}