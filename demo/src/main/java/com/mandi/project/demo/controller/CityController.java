package com.mandi.project.demo.controller;

import com.mandi.project.demo.dto.CityDetailsResponse;
import com.mandi.project.demo.dto.CityResponse;
import com.mandi.project.demo.dto.PageResponse;
import com.mandi.project.demo.service.CityService;
import com.mandi.project.demo.service.CityServiceImpl;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class CityController {
    private final CityServiceImpl cityServiceImpl;

    public CityController(CityServiceImpl cityServiceImpl) {
        this.cityServiceImpl = cityServiceImpl;
    }

    @GetMapping("/countries/{countryId}/cities")
    public PageResponse<CityResponse> getCitiesByCountry(
            @PathVariable Long countryId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size
    ) {
        return cityServiceImpl.getCitiesByCountry(countryId, page, size);
    }

    @GetMapping("/cities/{cityId}")
    public CityDetailsResponse getCityDetails(@PathVariable Long cityId) {
        return cityServiceImpl.getCityDetails(cityId);
    }
}
