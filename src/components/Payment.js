import React, { useState } from 'react';
import axios from '../axiosConfig'; // Certifique-se de usar a configuração do Axios

const Payment = () => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handlePayment = async () => {
    try {
      const response = await axios.post('/api/payments', { amount });
      console.log('Pagamento realizado com sucesso:', response.data);
      setAmount('');
    } catch (error) {
      setError('Erro ao processar o pagamento.');
      console.error('Erro ao processar o pagamento:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Pagamento</h2>
        {error && <p className="error text-red-500 mb-4">{error}</p>}
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mb-4 p-2 w-full border border-gray-300 rounded"
        />
        <button
          onClick={handlePayment}
          className="bg-green-500 text-white p-2 w-full rounded"
        >
          Pagar
        </button>
      </div>
    </div>
  );
};

export default Payment;
