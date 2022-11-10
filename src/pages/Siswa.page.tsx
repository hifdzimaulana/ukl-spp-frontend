import { useEffect, useState } from "react";
import { Navbar } from "../components";
import siswaService from "../services/siswa.service";
import IPagination from "../types/pagination.type";
import ISiswaData from "../types/siswa.type";

function SiswaPage() {
  const [dataSiswa, setDataSiswa] = useState<IPagination<ISiswaData>>();
  useEffect(() => {
    siswaService.getAll().then((response) => setDataSiswa(response.data));
  }, []);

  return (
    <div className="bg-slate-100 w-screen h-screen">
      <Navbar />
      Halo ini halaman siswa
      <div>
        {dataSiswa?.rows.map((val, key) => {
          return (
            <div key={key}>
              {val.nama} - {val.alamat}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SiswaPage;
