package com.BackPM.BackPM.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BackPM.BackPM.models.Reserva;
import com.BackPM.BackPM.services.IService.IReservaService;

@RestController
@RequestMapping("/reservas")
public class ReservaController extends ABaseController<Reserva, IReservaService> {

    public ReservaController(IReservaService service) {
        super(service, "Reserva");
    }
}
