export interface ILoginResponse {
  loggedIn?: boolean;
  accessToken?: string;
}

export interface IAccessTokenPayload {
  id: number;
  username: string;
  namaPetugas: string;
  level: "superadmin" | "admin" | "owner";
  createdAt: string;
  updatedAt: string;
  iat: number;
  exp: number;
}
