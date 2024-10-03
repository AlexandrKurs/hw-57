import { IUser } from "../../types";

interface Props {
  user: IUser;
}

const UserItem: React.FC<Props> = ({ user }) => {
  return (
    <div className="card mb-3 p-4">
      <div className="row justify-content-between">
        <div className="col-6">
          <h5 className="card-title">Name: {user.name}</h5>
          <p className="card-text">Mail: {user.mail}</p>
          <p className="card-text">Active: {user.active}</p>
          <p className="card-text">Role: {user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
