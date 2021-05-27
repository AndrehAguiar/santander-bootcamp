package com.project.santander.bootcamp.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

public class StockDTO {

    private Long id;

    @NotNull(message = "The name can't be null")
    private String name;

    @NotNull(message = "The price can't be null")
    @DecimalMin(value = "0.00", message = "The minimum value is 0.00")
    @Digits(integer = 6, fraction = 2, message = "The valid format is 0.00 and 000000.00")
    private Double price;

    @NotNull(message = "The date can't be null, a valid format required 01/01/2000")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private LocalDate date;

    @NotNull(message = "The variation can't be null")
    @Digits(integer = 3, fraction = 2, message = "The valid format is 0.00 and 000.00")
    private Double variation;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Double getVariation() {
        return variation;
    }

    public void setVariation(Double variation) {
        this.variation = variation;
    }
}
