package com.mandi.project.demo.controller;

import com.mandi.project.demo.dto.CityDetailsResponse;
import com.mandi.project.demo.dto.CityResponse;
import com.mandi.project.demo.dto.PageResponse;
import com.mandi.project.demo.service.CityService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class CityController {
    private final CityService cityService;

    public CityController(CityService cityService) {
        this.cityService = cityService;
    }

    @GetMapping("/countries/{countryId}/cities")
    public PageResponse<CityResponse> getCitiesByCountry(
            @PathVariable Long countryId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size
    ) {
        return cityService.getCitiesByCountry(countryId, page, size);
    }

    @GetMapping("/cities/{cityId}")
    public CityDetailsResponse getCityDetails(@PathVariable Long cityId) {
        return cityService.getCityDetails(cityId);
    }
}
