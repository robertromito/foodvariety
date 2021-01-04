package com.robertromito.foodvariety;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Eater {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(insertable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date created;

    @Column(name = "eater_key")
    private String key;

    private String name;

    protected Eater() {
    }

    public Eater(String key, String name) {
        this.key = key;
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public String getKey() {
        return this.key;
    }

    @Override
    public String toString() {
        return String.format(
            "Eater[id:%d] key: %s, name: %s", 
            this.id, this.key, this.name);
    }
}