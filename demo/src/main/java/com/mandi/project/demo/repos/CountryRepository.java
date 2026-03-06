package com.mandi.project.demo.repos;

import com.mandi.project.demo.entities.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<Country, Long> {
}
