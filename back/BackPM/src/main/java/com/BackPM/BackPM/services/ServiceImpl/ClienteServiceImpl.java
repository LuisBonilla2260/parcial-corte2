package com.BackPM.BackPM.services.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BackPM.BackPM.models.Cliente;
import com.BackPM.BackPM.repositories.IBaseRepository;
import com.BackPM.BackPM.repositories.IClienteRepository;
import com.BackPM.BackPM.services.IService.IClienteService;

@Service
public class ClienteServiceImpl extends ABaseService<Cliente> implements IClienteService {

    @Autowired
    private IClienteRepository clienteRepository;

    @Override
    protected IBaseRepository<Cliente, Long> getRepository() {
        return clienteRepository;
    }
}
