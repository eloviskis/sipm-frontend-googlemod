import React, { useState, useEffect } from 'react';

const AccountsPayable = () => {
  const [accounts, setAccounts] = useState([]);
  const [newAccount, setNewAccount] = useState({
    name: '',
    amount: '',
    dueDate: ''
  });

  useEffect(() => {
    // Simulação de requisição para obter contas a pagar existentes
    const fetchAccounts = async () => {
      const response = await fetch('/api/accounts-payable');
      const data = await response.json();
      setAccounts(data);
    };
    fetchAccounts();
  }, []);

  const handleAddAccount = async () => {
    // Código para adicionar nova conta ao backend
    const response = await fetch('/api/accounts-payable', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAccount),
    });
    const data = await response.json();
    setAccounts([...accounts, data]);
    setNewAccount({ name: '', amount: '', dueDate: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Contas a Pagar</h2>
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
            className="bg-red-500 text-white p-2 w-full rounded mt-2 hover:bg-red-700 transition duration-200"
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

export default AccountsPayable;
