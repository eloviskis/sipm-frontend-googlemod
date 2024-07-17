// src/pages/AccountsReceivable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const AccountsReceivable = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Fetch accounts receivable data
    axios.get('/api/accounts-receivable')
      .then(response => setAccounts(response.data))
      .catch(error => console.error('Erro ao buscar dados de contas a receber:', error));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Contas a Receber</h1>
          <div className="bg-white p-8 rounded shadow-md">
            {accounts.length === 0 ? (
              <p>Não há contas a receber.</p>
            ) : (
              <ul>
                {accounts.map(account => (
                  <li key={account.id} className="mb-4">
                    <p><strong>Cliente:</strong> {account.clientName}</p>
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

export default AccountsReceivable;
