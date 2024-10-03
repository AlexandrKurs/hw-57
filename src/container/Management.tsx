import ToolBar from "../components/ToolBar/ToolBar.tsx";
import { useState } from "react";
import Cart from "../components/Cart/Cart.tsx";
import { IUser } from "../types";
import UserForm from "../components/UserForm/UserForm.tsx";
import Users from "../components/Users/Users.tsx";

const Management = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const addNewUser = (newUser: IUser) => {
    setUsers((prevState) => [...prevState, newUser]);
  };

  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className="container mt-4">
        <div className="row">
          <div className="col-4 mb-2">
            <UserForm addNewUser={addNewUser} />
          </div>
          <div className="col-4 mb-2">
            <h3>List users</h3>
            <Users users={users} />
          </div>
          <div className="col-4 mb-2">
            <Cart />
          </div>
        </div>
      </main>
    </>
  );
};

export default Management;
