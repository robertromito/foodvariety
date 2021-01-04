package com.robertromito.foodvariety;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class EaterTests {

    @Test
    void hasANameAndKey() {
        var sut = new Eater("rob", "Robbie");
        assertEquals("rob", sut.getKey());
        assertEquals("Robbie", sut.getName());
    }

    @Test
    void presentsFriendlyStringRepresentation() {
        var sut = new Eater("rob", "Robbie");
        assertEquals(
            "Eater[id:0] key: rob, name: Robbie",
            sut.toString()
        );
    }
    
}
