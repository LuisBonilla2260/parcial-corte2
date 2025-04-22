package com.BackPM.BackPM.services.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BackPM.BackPM.models.Reserva;
import com.BackPM.BackPM.repositories.IBaseRepository;
import com.BackPM.BackPM.repositories.IReservaRepository;
import com.BackPM.BackPM.services.IService.IReservaService;

@Service
public class ReservaServiceImpl extends ABaseService<Reserva> implements IReservaService {

    @Autowired
    private IReservaRepository reservaRepository;

    @Override
    protected IBaseRepository<Reserva, Long> getRepository() {
        return reservaRepository;
    }
}
