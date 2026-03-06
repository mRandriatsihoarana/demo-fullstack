package com.mandi.project.demo.service;

import com.mandi.project.demo.dto.CityDetailsResponse;
import com.mandi.project.demo.dto.CityResponse;
import com.mandi.project.demo.dto.PageResponse;
import com.mandi.project.demo.entities.City;

public interface CityService {
    public PageResponse<CityResponse> getCitiesByCountry(Long countryId, int page, int size);
    public CityDetailsResponse getCityDetails(Long cityId);
}
