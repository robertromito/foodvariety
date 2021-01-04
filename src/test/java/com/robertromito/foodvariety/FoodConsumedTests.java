package com.robertromito.foodvariety;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Date;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class FoodConsumedTests {

    @Test
    void hasTheEaterAndWhatTheyAte() {
        var sut = new FoodConsumed("rob Apple");
        assertEquals("rob Apple", sut.getMessage());
    }

    @Test
    void presentsFriendlyStringRepresentation() {
        var sut = new FoodConsumed("dee Oatmeal");
        var now = new Date();
        org.springframework.test.util.ReflectionTestUtils.setField(
            sut, "created", now);
        
            assertEquals(
            String.format("[id:0] [created:%s] dee Oatmeal", now),
            sut.toString()
        );
    }   
}