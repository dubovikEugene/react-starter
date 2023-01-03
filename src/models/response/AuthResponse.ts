import { IUser } from "./../IUser";
export interface AuthResponse {
  token: string;
  refresh_token: string;
  user: IUser;
}
