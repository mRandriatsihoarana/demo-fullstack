import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import CountriesList from "./components/CountriesList";
import CitiesList from "./components/CitiesList";
import CityDetails from "./components/CityDetails";
import { fetchCitiesByCountry, fetchCityDetails, fetchCountries } from "./api/api";
import type { CitiesResponse, City, CityDetails as CityDetailsType, Country } from "./types";

export default function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const [citiesResponse, setCitiesResponse] = useState<CitiesResponse | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [cityDetails, setCityDetails] = useState<CityDetailsType | null>(null);

  const [page, setPage] = useState<number>(0);

  const [countriesLoading, setCountriesLoading] = useState<boolean>(false);
  const [citiesLoading, setCitiesLoading] = useState<boolean>(false);
  const [detailsLoading, setDetailsLoading] = useState<boolean>(false);

  const [error, setError] = useState<string>("");

  useEffect(() => {
    loadCountries();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      loadCities(selectedCountry.id, page);
    }
  }, [selectedCountry, page]);

  useEffect(() => {
    if (selectedCity) {
      loadCityDetails(selectedCity.id);
    }
  }, [selectedCity]);

  const loadCountries = async () => {
    try {
      setCountriesLoading(true);
      setError("");

      const data = await fetchCountries();
      setCountries(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setCountriesLoading(false);
    }
  };

  const loadCities = async (countryId: number, currentPage: number) => {
    try {
      setCitiesLoading(true);
      setError("");

      const data = await fetchCitiesByCountry(countryId, currentPage, 5);
      setCitiesResponse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setCitiesLoading(false);
    }
  };

  const loadCityDetails = async (cityId: number) => {
    try {
      setDetailsLoading(true);
      setError("");

      const data = await fetchCityDetails(cityId);
      setCityDetails(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setDetailsLoading(false);
    }
  };

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
    setPage(0);
    setSelectedCity(null);
    setCityDetails(null);
    setCitiesResponse(null);
  };

  const handleSelectCity = (city: City) => {
    setSelectedCity(city);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setSelectedCity(null);
    setCityDetails(null);
  };

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Countries / Cities / Details
      </Typography>

      {error && (
        <Box sx={{ mb: 2 }}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          {countriesLoading ? (
            <CircularProgress />
          ) : (
            <CountriesList
              countries={countries}
              selectedCountryId={selectedCountry?.id ?? null}
              onSelectCountry={handleSelectCountry}
            />
          )}
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          {!selectedCountry ? (
            <Alert severity="info">Select a country to see the cities.</Alert>
          ) : citiesLoading ? (
            <CircularProgress />
          ) : (
            <CitiesList
              cities={citiesResponse?.content ?? []}
              page={citiesResponse?.page ?? 0}
              totalPages={citiesResponse?.totalPages ?? 0}
              selectedCityId={selectedCity?.id ?? null}
              onSelectCity={handleSelectCity}
              onPageChange={handlePageChange}
            />
          )}
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          {detailsLoading ? (
            <CircularProgress />
          ) : (
            <CityDetails cityDetails={cityDetails} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}