import {
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import type { City } from "../types";

interface CitiesListProps {
  cities: City[];
  page: number;
  totalPages: number;
  selectedCityId: number | null;
  onSelectCity: (city: City) => void;
  onPageChange: (page: number) => void;
}

export default function CitiesList({
  cities,
  page,
  totalPages,
  selectedCityId,
  onSelectCity,
  onPageChange,
}: CitiesListProps) {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h6">Cities</Typography>

          <List>
            {cities.map((city) => (
              <ListItemButton
                key={city.id}
                selected={selectedCityId === city.id}
                onClick={() => onSelectCity(city)}
              >
                <ListItemText primary={city.name} />
              </ListItemButton>
            ))}
          </List>

          {totalPages > 1 && (
            <Pagination
              page={page + 1}
              count={totalPages}
              onChange={(_, value) => onPageChange(value - 1)}
              color="primary"
            />
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}