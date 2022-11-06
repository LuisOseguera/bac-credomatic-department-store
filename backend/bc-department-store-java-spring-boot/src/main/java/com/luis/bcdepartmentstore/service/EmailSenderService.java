package com.luis.bcdepartmentstore.service;

public interface EmailSenderService {

    void SendEmail(String from, String to, String subject, String message);
}
