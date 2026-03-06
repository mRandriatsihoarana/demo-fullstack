package com.mandi.project.demo.controller;

import com.mandi.project.demo.dto.CountryResponse;
import com.mandi.project.demo.service.CountryService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/countries")
public class CountryController {

    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping
    public List<CountryResponse> getAllCountries() {
        return countryService.getAllCountries();
    }
}
