package com.mandi.project.demo.repos;

import com.mandi.project.demo.entities.City;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CityRepository extends JpaRepository<City, Long> {

    Page<City> findByCountryId(Long countryId, Pageable pageable);
}
