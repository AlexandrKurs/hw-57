import { IUser } from "../../types";
import UserItem from "./UserItem.tsx";

interface Props {
  users: IUser[];
}

const Users: React.FC<Props> = ({ users }) => {
  return (
    users && (
      <>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </>
    )
  );
};

export default Users;
