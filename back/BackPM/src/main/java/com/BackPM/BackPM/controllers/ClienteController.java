package com.BackPM.BackPM.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BackPM.BackPM.models.Cliente;
import com.BackPM.BackPM.services.IService.IClienteService;

@RestController
@RequestMapping("/clientes")
public class ClienteController extends ABaseController<Cliente, IClienteService> {

    public ClienteController(IClienteService service) {
        super(service, "Cliente");
    }
}
