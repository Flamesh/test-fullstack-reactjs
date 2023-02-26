export interface postLoginParam {
  email: string;
  password: string;
}

export interface postRegisterParam {
  username: string;
  email: string;
  password: string;
}

export interface putUserParam {
  username: string;
}

export interface IUser {
  username: string;
  email: string;
  password: string;
}
