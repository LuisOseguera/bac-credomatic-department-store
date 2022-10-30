package com.luis.baccredomaticdepartmentstore.service;

public interface EmailSenderService {

    void SendEmail(String from, String to, String subject, String message);
}
