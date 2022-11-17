export interface ISiswaData {
  id: number;
  nama: string;
  idKelas: number;
  alamat: string;
  telepon: string;
  createdAt: string;
  updatedAt: string;
}

export type GetAllSiswaArgs = {
  page?: number;
  limit?: number;
};
