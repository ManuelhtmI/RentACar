// UserInfo.js
import React from 'react';

function UserInfo({ user }) {
  return (
    <div className="user-info">
      <h2>Informations sur l'utilisateur :</h2>
      <p><strong>Nom :</strong> {user.firstName} {user.lastName}</p>
      <p><strong>Téléphone :</strong> {user.phone}</p>
      <p><strong>Adresse :</strong> {user.address}</p>
    </div>
  );
}

export default UserInfo;
