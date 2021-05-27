package com.project.santander.bootcamp.exception;

import com.project.santander.bootcamp.util.MessageUtils;

public class NotFoundException extends RuntimeException {
    public NotFoundException() {
        super(MessageUtils.NO_RECORDS_FOUND);
    }
}
