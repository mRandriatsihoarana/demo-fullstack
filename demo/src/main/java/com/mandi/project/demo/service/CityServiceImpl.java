package com.mandi.project.demo.service;

import com.mandi.project.demo.dto.CityDetailsResponse;
import com.mandi.project.demo.dto.CityResponse;
import com.mandi.project.demo.dto.PageResponse;
import com.mandi.project.demo.entities.City;
import com.mandi.project.demo.exception.ResourceNotFoundException;
import com.mandi.project.demo.repos.CityRepository;
import com.mandi.project.demo.repos.CountryRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityServiceImpl implements CityService{

    private final CityRepository cityRepository;
    private final CountryRepository countryRepository;

    public CityServiceImpl(CityRepository cityRepository, CountryRepository countryRepository) {
        this.cityRepository = cityRepository;
        this.countryRepository = countryRepository;
    }

    @Override
    public PageResponse<CityResponse> getCitiesByCountry(Long countryId, int page, int size) {
        if (!countryRepository.existsById(countryId)) {
            throw new ResourceNotFoundException("Country not found with id: " + countryId);
        }

        PageRequest pageable = PageRequest.of(page, size, Sort.by("name").ascending());
        Page<City> cityPage = cityRepository.findByCountryId(countryId, pageable);

        return new PageResponse<>(
                cityPage.getContent()
                        .stream()
                        .map(city -> new CityResponse(city.getId(), city.getName()))
                        .toList(),
                cityPage.getNumber(),
                cityPage.getSize(),
                cityPage.getTotalElements(),
                cityPage.getTotalPages(),
                cityPage.isFirst(),
                cityPage.isLast()
        );
    }

    @Override
    public CityDetailsResponse getCityDetails(Long cityId) {
        City city = cityRepository.findById(cityId)
                .orElseThrow(() -> new ResourceNotFoundException("City not found with id: " + cityId));

        return new CityDetailsResponse(
                city.getId(),
                city.getName(),
                city.getZipCode(),
                city.getPopulation(),
                city.getDescription(),
                city.getCountry().getId(),
                city.getCountry().getName(),
                city.getCountry().getCode()
        );
    }
}
