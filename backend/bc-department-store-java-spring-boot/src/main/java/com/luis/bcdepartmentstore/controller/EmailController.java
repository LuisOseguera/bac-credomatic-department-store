package com.luis.bcdepartmentstore.controller;

import com.luis.bcdepartmentstore.resource.EmailMessage;
import com.luis.bcdepartmentstore.service.EmailSenderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    private final EmailSenderService emailSenderService;

    public EmailController(EmailSenderService emailSenderService) {
        this.emailSenderService = emailSenderService;
    }

    @PostMapping("/send-email")
    public ResponseEntity sendEmail(@RequestBody EmailMessage emailMessage) {

        this.emailSenderService.SendEmail(emailMessage.getFrom(), emailMessage.getTo(), emailMessage.getSubject(), emailMessage.getMessage());

        return ResponseEntity.ok("Success!");
    }
}
