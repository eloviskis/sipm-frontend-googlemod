import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

// src/pages/Services.js

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Fetch services data
        axios.get('/api/services')
            .then(response => setServices(response.data))
            .catch(error => console.error('Erro ao buscar dados de serviços:', error));
    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 ml-64">
                <Header />
                <div className="p-8">
                    <h1 className="text-3xl font-bold mb-8">Serviços</h1>
                    <div className="bg-white p-8 rounded shadow-md">
                        {services.length === 0 ? (
                            <p>Não há serviços cadastrados.</p>
                        ) : (
                            <ul>
                                {services.map(service => (
                                    <li key={service.id} className="mb-4">
                                        <p><strong>Nome:</strong> {service.name}</p>
                                        <p><strong>Descrição:</strong> {service.description}</p>
                                        <p><strong>Preço:</strong> R$ {service.price}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;