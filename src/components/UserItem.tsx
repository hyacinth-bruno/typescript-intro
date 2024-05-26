import React from "react";

interface Address {
  street: string;
  suite: string;
  city: string;
  zipCode: string;
}

interface User {
  name: string;
  username: string;
  phone: string;
  address: Address;
}

interface UserItemProps {
  user: User;
}

const UserItem = ({ user }: UserItemProps) => {
  return (
    <div className="user-item">
      <div className="user-avatar">
        <img src="/path-to-avatar-icon.png" alt="User Avatar" />
      </div>
      <div className="user-details">
        <h2>{user.name}</h2>
        <p><strong>User name:</strong> {user.username}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <div>
          <strong>Address:</strong>
          <ul>
            <li>street: {user.address.street}</li>
            <li>suite: {user.address.suite}</li>
            <li>city: {user.address.city}</li>
            <li>zipcode: {user.address.zipCode}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
