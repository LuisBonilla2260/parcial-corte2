package com.BackPM.BackPM.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BackPM.BackPM.models.Mesa;
import com.BackPM.BackPM.services.IService.IMesaService;

@RestController
@RequestMapping("/mesas")
public class MesaController extends ABaseController<Mesa, IMesaService> {

    public MesaController(IMesaService service) {
        super(service, "Mesa");
    }
}
