package com.robertromito.foodvariety;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "consumed", path = "consumed")
public interface FoodConsumedRepository extends PagingAndSortingRepository<FoodConsumed, Long> {
}