package com.BackPM.BackPM.models;

import jakarta.persistence.*;

@Entity
public class Mesa extends ABaseEntity {

    @Column(name = "numero", nullable = false)
    private String numero;

    @Column(name = "capacidad", nullable = false)
    private int capacidad;

    @Column(name = "disponible", nullable = true)
    private Boolean disponible;

    // Getters and Setters
    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public int getCapacidad() {
        return capacidad;
    }

    public void setCapacidad(int capacidad) {
        this.capacidad = capacidad;
    }

    public Boolean getDisponible() {
        return disponible;
    }

    public void setDisponible(Boolean disponible) {
        this.disponible = disponible;
    }
}
