// src/pages/AccountsPayable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const AccountsPayable = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Fetch accounts payable data
    axios.get('/api/accounts-payable')
      .then(response => setAccounts(response.data))
      .catch(error => console.error('Erro ao buscar dados de contas a pagar:', error));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Contas a Pagar</h1>
          <div className="bg-white p-8 rounded shadow-md">
            {accounts.length === 0 ? (
              <p>Não há contas a pagar.</p>
            ) : (
              <ul>
                {accounts.map(account => (
                  <li key={account.id} className="mb-4">
                    <p><strong>Fornecedor:</strong> {account.vendorName}</p>
                    <p><strong>Valor:</strong> R$ {account.amount}</p>
                    <p><strong>Data de Vencimento:</strong> {account.dueDate}</p>
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

export default AccountsPayable;
