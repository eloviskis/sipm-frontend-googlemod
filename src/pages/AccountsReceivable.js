import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const AccountsReceivable = () => {
  const [accountsReceivable, setAccountsReceivable] = useState([]);

  useEffect(() => {
    const fetchAccountsReceivable = async () => {
      try {
        const response = await axios.get('/api/accounts-receivable');
        setAccountsReceivable(response.data);
      } catch (error) {
        console.error('Erro ao buscar contas a receber:', error);
      }
    };
    fetchAccountsReceivable();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Contas a Receber</h1>
          <div className="bg-white p-8 rounded shadow-md">
            {accountsReceivable.length === 0 ? (
              <p>Não há contas a receber cadastradas.</p>
            ) : (
              <ul>
                {accountsReceivable.map(account => (
                  <li key={account.id} className="mb-4">
                    <p><strong>Nome:</strong> {account.name}</p>
                    <p><strong>Valor:</strong> {account.amount}</p>
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
