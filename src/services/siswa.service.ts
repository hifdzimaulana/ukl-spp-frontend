import http from "../../http-common";
import IPagination from "../types/pagination.type";
import { GetAllSiswaArgs, ISiswaData } from "../types/siswa.type";

class SiswaService {
  getAll(args?: GetAllSiswaArgs) {
    return http.get<IPagination<ISiswaData>>("/siswa", { params: args });
  }
}

export default new SiswaService();
