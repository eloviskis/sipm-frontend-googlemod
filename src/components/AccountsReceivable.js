import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig'; // Certifique-se de usar a configuração do Axios

const AccountsReceivable = () => {
  const [accounts, setAccounts] = useState([]);
  const [newAccount, setNewAccount] = useState({
    name: '',
    amount: '',
    dueDate: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get('/api/accounts-receivable');
        setAccounts(response.data);
      } catch (error) {
        setError('Erro ao buscar contas a receber.');
        console.error('Erro ao buscar contas a receber:', error);
      }
    };
    fetchAccounts();
  }, []);

  const handleAddAccount = async () => {
    try {
      const response = await axios.post('/api/accounts-receivable', newAccount);
      setAccounts([...accounts, response.data]);
      setNewAccount({ name: '', amount: '', dueDate: '' });
    } catch (error) {
      setError('Erro ao adicionar nova conta.');
      console.error('Erro ao adicionar nova conta:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Contas a Receber</h2>
        {error && <p className="error text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nome da Conta"
            value={newAccount.name}
            onChange={(e) => setNewAccount({ ...newAccount, name: e.target.value })}
            className="p-2 w-full border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Valor"
            value={newAccount.amount}
            onChange={(e) => setNewAccount({ ...newAccount, amount: e.target.value })}
            className="p-2 w-full border border-gray-300 rounded mt-2"
          />
          <input
            type="date"
            placeholder="Data de Vencimento"
            value={newAccount.dueDate}
            onChange={(e) => setNewAccount({ ...newAccount, dueDate: e.target.value })}
            className="p-2 w-full border border-gray-300 rounded mt-2"
          />
          <button
            onClick={handleAddAccount}
            className="bg-green-500 text-white p-2 w-full rounded mt-2 hover:bg-green-700 transition duration-200"
          >
            Adicionar Conta
          </button>
        </div>
        <ul>
          {accounts.map((account, index) => (
            <li key={index} className="mb-4 p-4 bg-gray-200 rounded">
              <p>Nome: {account.name}</p>
              <p>Valor: {account.amount}</p>
              <p>Data de Vencimento: {account.dueDate}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccountsReceivable;
