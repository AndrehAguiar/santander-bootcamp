package com.project.santander.bootcamp.mapper;

import com.project.santander.bootcamp.model.dto.StockDTO;
import com.project.santander.bootcamp.model.entity.Stock;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class StockMapper {

    public Stock toEntity(StockDTO stockDTO) {
        Stock stock = new Stock();
        stock.setId(stockDTO.getId());
        stock.setName(stockDTO.getName());
        stock.setPrice(stockDTO.getPrice());
        stock.setVariation(stockDTO.getVariation());
        stock.setDate(stockDTO.getDate());
        return stock;
    }

    public StockDTO toDTO(Stock stock) {
        StockDTO stockDTO = new StockDTO();
        stockDTO.setId(stock.getId());
        stockDTO.setName(stock.getName());
        stockDTO.setPrice(stock.getPrice());
        stockDTO.setVariation(stock.getVariation());
        stockDTO.setDate(stock.getDate());
        return stockDTO;
    }

    public List<StockDTO> toDTO(List<Stock> stockList) {
        return stockList.stream().map(this::toDTO)
                .collect(Collectors.toList());
    }
}
