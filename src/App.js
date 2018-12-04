import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";

const App = () => {
  const usersData = [
    { id: 1, name: "Umer", username: "UmerMo" },
    { id: 2, name: "Fred", username: "Freddie" },
    { id: 3, name: "John", username: "John112" }
  ];

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const [users, setUsers] = useState(usersData);
  return (
    <div className="conatiner">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
