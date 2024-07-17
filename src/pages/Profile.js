import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch('/api/profile');
      const data = await response.json();
      setProfile(data);
    };

    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Perfil</h2>
        <div className="mb-4">
          <strong>Email:</strong> {profile.email}
        </div>
        <div className="mb-4">
          <strong>Nome:</strong> {profile.name}
        </div>
        {/* Outros campos do perfil */}
      </div>
    </div>
  );
};

export default Profile;
