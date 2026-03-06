import { Card, CardContent, Stack, Typography } from "@mui/material";
import type { CityDetails as CityDetailsType } from "../types";

interface CityDetailsProps {
  cityDetails: CityDetailsType | null;
}

export default function CityDetails({ cityDetails }: CityDetailsProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          City Details
        </Typography>

        {!cityDetails ? (
          <Typography variant="body1">
            Select a city to see the details.
          </Typography>
        ) : (
          <Stack spacing={1}>
            <Typography>
              <strong>Name:</strong> {cityDetails.name}
            </Typography>
            <Typography>
              <strong>Zip Code:</strong> {cityDetails.zipCode}
            </Typography>
            <Typography>
              <strong>Population:</strong> {cityDetails.population}
            </Typography>
            <Typography>
              <strong>Description:</strong> {cityDetails.description}
            </Typography>
            <Typography>
              <strong>Country:</strong> {cityDetails.countryName}
            </Typography>
            <Typography>
              <strong>Country Code:</strong> {cityDetails.countryCode}
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}