package com.mandi.project.demo.service;

import com.mandi.project.demo.dto.CountryResponse;
import com.mandi.project.demo.entities.Country;
import com.mandi.project.demo.repos.CountryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }
    @Override
    public List<CountryResponse> getAllCountries() {
        return countryRepository.findAll()
                .stream()
                .map(country -> new CountryResponse(
                        country.getId(),
                        country.getName(),
                        country.getCode()
                ))
                .toList();
    }
}
