export interface IUser {
  id: string;
  name: string;
  mail: string;
  active: boolean;
  role: string;
}

export interface IUserMutation {
  name: string;
  mail: string;
  active: boolean;
  role: string;
}
