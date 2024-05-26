import React from "react";
import UserItem from "./UserItem";

interface Address {
  street: string;
  suite: string;
  city: string;
  zipCode: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  phone: string;
  address: Address;
}

interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => {
  return (
    <div className="user-list">
      <h1>User list</h1>
      <div className="user-list-container">
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
