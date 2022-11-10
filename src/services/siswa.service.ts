import { RawAxiosRequestHeaders } from "axios";
import http from "../../http-common";
import IPagination from "../types/pagination.type";
import ISiswaData from "../types/siswa.type";

const Headers: RawAxiosRequestHeaders = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJqb2huZG9lIiwibmFtYVBldHVnYXMiOiJKb2huIERvZSIsImxldmVsIjoic3VwZXJhZG1pbiIsImNyZWF0ZWRBdCI6IjIwMjItMDktMTZUMjM6NTc6MzQuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjItMDktMTZUMjM6NTc6MzQuMDAwWiIsImlhdCI6MTY2ODA2ODA4MCwiZXhwIjoxNjY4MzI3MjgwfQ.OQo0XZD7CcVNvBvF6-N-r6lvgZjSTgcETLMWvbTHHWw",
};

class SiswaService {
  getAll() {
    return http.get<IPagination<ISiswaData>>("/siswa", { headers: Headers });
  }
}

export default new SiswaService();
