import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          setUser(userDoc.data());
        }
      }
    };

    fetchUserData();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = '/login';
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="relative">
        <div className="flex items-center space-x-4 cursor-pointer" onClick={toggleModal}>
          <span className="font-medium">{user ? user.name : 'Carregando...'}</span>
          <img src={user ? user.avatarUrl : 'path-to-default-avatar.jpg'} alt="avatar" className="w-10 h-10 rounded-full" />
        </div>
        {isModalOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="flex p-4">
              <img src={user ? user.avatarUrl : 'path-to-default-avatar.jpg'} alt="avatar" className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <h3 className="font-semibold">{user ? user.name : 'Carregando...'}</h3>
                <p className="text-gray-500">{user ? user.email : 'Carregando...'}</p>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <ul className="p-4">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Configurações do Serviço</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Customização</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Meu Plano</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>Sair</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
