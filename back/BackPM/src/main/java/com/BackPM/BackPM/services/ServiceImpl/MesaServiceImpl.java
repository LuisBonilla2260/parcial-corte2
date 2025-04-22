package com.BackPM.BackPM.services.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BackPM.BackPM.models.Mesa;
import com.BackPM.BackPM.repositories.IBaseRepository;
import com.BackPM.BackPM.repositories.IMesaRepository;
import com.BackPM.BackPM.services.IService.IMesaService;

@Service
public class MesaServiceImpl extends ABaseService<Mesa> implements IMesaService {

    @Autowired
    private IMesaRepository mesaRepository;

    @Override
    protected IBaseRepository<Mesa, Long> getRepository() {
        return mesaRepository;
    }
}
