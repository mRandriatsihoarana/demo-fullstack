import {
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import type { Country } from "../types";

interface CountriesListProps {
  countries: Country[];
  selectedCountryId: number | null;
  onSelectCountry: (country: Country) => void;
}

export default function CountriesList({
  countries,
  selectedCountryId,
  onSelectCountry,
}: CountriesListProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Countries
        </Typography>

        <List>
          {countries.map((country) => (
            <ListItemButton
              key={country.id}
              selected={selectedCountryId === country.id}
              onClick={() => onSelectCountry(country)}
            >
              <ListItemText
                primary={country.name}
                secondary={`Code: ${country.code}`}
              />
            </ListItemButton>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}