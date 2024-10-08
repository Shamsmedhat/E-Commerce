import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export type UserToken = undefined | string;
export type UsersList = {
  status: string;
  data: {
    users: {
      _id: string;
      username: string;
      email: string;
      firstName: string;
      lastName: string;
      role: string;
      photo: string;
      active: boolean;
      blocked: boolean;
      createdAt: string;
      updatedAt: string;
    }[];
  };
};

export type UserUiTable = {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string | undefined;
  photo: string;
  blocked: boolean;
  createdAt: string;
};

export interface SignInResponse {
  id: string;
  name: string;
  email: string;
  image: string;
  role?: string;
  accessToken: string;
}

export interface LoginResponse {
  user: SignInResponse;
  error: string | null;
}
