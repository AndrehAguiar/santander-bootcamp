package com.project.santander.bootcamp.service;

import com.project.santander.bootcamp.exception.BusinessException;
import com.project.santander.bootcamp.exception.NotFoundException;
import com.project.santander.bootcamp.mapper.StockMapper;
import com.project.santander.bootcamp.model.dto.StockDTO;
import com.project.santander.bootcamp.model.entity.Stock;
import com.project.santander.bootcamp.repository.StockRepository;
import com.project.santander.bootcamp.util.MessageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class StockService {

    @Autowired
    private final StockRepository stockRepository;

    @Autowired
    private final StockMapper stockMapper;

    public StockService(StockRepository stockRepository, StockMapper stockMapper) {
        this.stockRepository = stockRepository;
        this.stockMapper = stockMapper;
    }

    @Transactional
    public StockDTO save(StockDTO stockDTO) {
        Optional<Stock> stockOptional = stockRepository
                .findByNameAndDate(stockDTO.getName(), stockDTO.getDate());

        if (stockOptional.isPresent()) {
            throw new BusinessException(MessageUtils.STOCK_ALREADY_EXISTS);
        }

        Stock stock = stockMapper.toEntity(stockDTO);
        stockRepository.save(stock);

        return stockMapper.toDTO(stock);
    }

    @Transactional
    public StockDTO update(StockDTO stockDTO) {
        Optional<Stock> stockOptional = stockRepository
                .findByStockUpdate(stockDTO.getName(), stockDTO.getDate(), stockDTO.getId());

        if (stockOptional.isPresent()) {
            throw new BusinessException(MessageUtils.STOCK_ALREADY_EXISTS);
        }

        Stock stock = stockMapper.toEntity(stockDTO);
        stockRepository.save(stock);

        return stockMapper.toDTO(stock);
    }

    @Transactional
    public StockDTO delete(Long id) {
        StockDTO stockDTO = this.findById(id);
        stockRepository.deleteById(stockDTO.getId());
        return stockDTO;
    }

    @Transactional(readOnly = true)
    public List<StockDTO> findAll() {
        return stockMapper.toDTO(stockRepository.findAll());
    }

    @Transactional(readOnly = true)
    public StockDTO findById(Long id) {
        return stockRepository.findById(id)
                .map(stockMapper::toDTO).orElseThrow(NotFoundException::new);
    }

    @Transactional(readOnly = true)
    public List<StockDTO> findByToday() {
        return stockRepository.findByToday(LocalDate.now())
                .map(stockMapper::toDTO).orElseThrow(NotFoundException::new);
    }
}
