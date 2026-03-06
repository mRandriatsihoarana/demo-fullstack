package com.mandi.project.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CityDetailsResponse {
    private Long id;
    private String name;
    private String zipCode;
    private Long population;
    private String description;
    private Long countryId;
    private String countryName;
    private String countryCode;
}
