import http from "../../http-common";
import jwt_decode from "jwt-decode";
import { IAccessTokenPayload, ILoginResponse } from "../types/auth.type";
import { ILoginForm } from "../types/form.type";
import { AxiosError } from "axios";

class AuthService {
  private tokenName: string;
  constructor() {
    this.tokenName = import.meta.env.VITE_ACCESS_TOKEN as string;
  }

  login = (data: ILoginForm): Promise<Boolean> => {
    return http
      .post<ILoginResponse>("/login", data)
      .then((response) => {
        if (response.data.loggedIn) {
          localStorage.setItem(
            this.tokenName,
            JSON.stringify(response.data.accessToken)
          );
          return true;
        } else {
          return false;
        }
      })
      .catch((e: AxiosError) => {
        console.log(e.response?.data);
        return false;
      });
  };

  logout = (): void => {
    localStorage.removeItem(this.tokenName);
  };

  getAccessToken = (): string | null => {
    return localStorage.getItem(this.tokenName);
  };

  getCurrentUser = (): IAccessTokenPayload | null => {
    try {
      return jwt_decode(
        <string>localStorage.getItem(this.tokenName)
      ) as IAccessTokenPayload;
    } catch (error) {
      return null;
    }
  };
}

export default new AuthService();
