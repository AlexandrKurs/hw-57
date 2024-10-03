import { IUser, IUserMutation } from "../../types";
import { useState } from "react";

interface Props {
  addNewUser: (newUser: IUser) => void;
}

const UserForm: React.FC<Props> = ({ addNewUser }) => {
  const [newUser, setNewUser] = useState<IUserMutation>({
    name: "",
    mail: "",
    active: true,
    role: "",
  });

  const changeUser = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      newUser.name.trim().length === 0 &&
      newUser.mail.trim().length === 0 &&
      newUser.role.trim().length === 0
    ) {
      alert("Заполните все поля");
    } else {
      addNewUser({
        id: String(new Date()),
        ...newUser,
        role: String(newUser.role),
      });

      setNewUser({
        name: "",
        mail: "",
        active: true,
        role: "",
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add new user</h3>

      <div className="form-group mb-2">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={newUser.name}
          onChange={changeUser}
          id="name"
          name="name"
          className="form-control"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="description">Mail:</label>
        <textarea
          value={newUser.mail}
          onChange={changeUser}
          name="mail"
          id="mail"
          className="form-control"
        ></textarea>
      </div>

      <div className="form-group mb-2">
        <input
          type="checkbox"
          checked={newUser.active === "yes"}
          onChange={(e) =>
            changeUser({
              target: {
                name: "active",
                value: e.target.checked ? "yes" : "no",
              },
            })
          }
          id="active"
          name="active"
          className="form-check-input"
        />
        <label htmlFor="active" className="form-check-label">
          {newUser.active === "yes" ? "Active" : "Inactive"}
        </label>
      </div>

      <div className="form-group mb-2">
        <label htmlFor="role">Role:</label>
        <select
          value={newUser.role}
          onChange={changeUser}
          id="role"
          name="role"
          className="form-control"
        >
          <option value="">Select a role</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <button className="btn btn-primary bg-black">Add</button>
    </form>
  );
};

export default UserForm;
