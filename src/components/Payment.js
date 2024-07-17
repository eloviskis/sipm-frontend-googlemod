import React, { useState } from 'react';

const Payment = () => {
  const [amount, setAmount] = useState('');

  const handlePayment = async () => {
    // Código para integração com o provedor de pagamento
    const response = await fetch('/api/payments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Pagamento</h2>
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
