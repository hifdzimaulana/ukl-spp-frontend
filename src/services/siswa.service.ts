import http from "../../http-common";
import IPagination from "../types/pagination.type";
import ISiswaData from "../types/siswa.type";

class SiswaService {
  getAll() {
    return http.get<IPagination<ISiswaData>>("/siswa");
  }
}

export default new SiswaService();
