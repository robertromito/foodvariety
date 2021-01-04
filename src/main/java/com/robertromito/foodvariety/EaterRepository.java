package com.robertromito.foodvariety;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "eaters", path = "eaters")
public interface EaterRepository extends PagingAndSortingRepository<Eater, Long> {
}