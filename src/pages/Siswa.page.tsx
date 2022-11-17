import { useEffect, useState } from "react";
import { Navbar } from "../components";
import siswaService from "../services/siswa.service";
import IPagination from "../types/pagination.type";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { GetAllSiswaArgs, ISiswaData } from "../types/siswa.type";

function SiswaPage() {
  const [dataSiswa, setDataSiswa] = useState<IPagination<ISiswaData>>();
  const [dataParams, setDataParams] = useState<GetAllSiswaArgs>({
    limit: 15,
    page: 1,
  });

  const fetchSiswa = (args?: GetAllSiswaArgs) => {
    siswaService.getAll(args).then((response) => {
      setDataSiswa(response.data);
    });
  };

  useEffect(() => {
    fetchSiswa();
  }, []);

  useEffect(() => {
    fetchSiswa(dataParams);
  }, [dataParams]);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      cellClassName: "text-gray-500",
    },
    { field: "nama", headerName: "Nama", width: 300 },
    { field: "alamat", headerName: "Alamat", width: 250 },
    { field: "telepon", headerName: "Telepon", width: 230 },
    {
      field: "createdAt",
      headerName: "Created at",
      width: 150,
      valueGetter: (params: GridValueGetterParams) =>
        new Date(params.row.createdAt).toLocaleDateString(),
      cellClassName: "text-gray-500",
    },
    {
      field: "updatedAt",
      headerName: "Last modified",
      width: 150,
      valueGetter: (params: GridValueGetterParams) =>
        new Date(params.row.createdAt).toLocaleDateString(),
      cellClassName: "text-gray-500",
    },
  ];

  return (
    <div className="bg-slate-100">
      <Navbar />

      <div className="h-[81vh] w-[95%] mx-auto">
        <DataGrid
          paginationMode="server"
          pageSize={dataParams.limit}
          onPageSizeChange={(newSize) => {
            setDataParams({ ...dataParams, limit: newSize });
          }}
          rowsPerPageOptions={[15, 25, 40]}
          columns={columns}
          rows={(dataSiswa?.rows as Array<ISiswaData>) || []}
          rowCount={dataSiswa?.count}
          page={(dataParams.page as number) - 1}
          onPageChange={(newPage) => {
            setDataParams({ ...dataParams, page: newPage + 1 });
          }}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default SiswaPage;
