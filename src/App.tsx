import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Kelas,
  Login,
  Pembayaran,
  Petugas,
  Reports,
  Siswa,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/petugas" element={<Petugas />} />
        <Route path="/siswa" element={<Siswa />} />
        <Route path="/kelas" element={<Kelas />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
