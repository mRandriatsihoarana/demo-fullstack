package com.mandi.project.demo.service;

import com.mandi.project.demo.dto.CountryResponse;

import java.util.List;

public interface CountryService {
    public List<CountryResponse> getAllCountries();
}
