import React from "react";
import kreditUsahaRakyat from "../assets/img/pinjaman/kredit-usaha-rakyat(-k-u-r).png";
import { Table } from "react-bootstrap";

function KreditUsahaRakyatPage() {
  return (
    <>
      <div className="pinjaman-item-container">
        <h3>Kredit Usaha Rakyat (KUR)</h3>
        <p>
          Kredit Usaha Rakyat (KUR) adalah Kredit/Pembiayaan Modal Kerja
          dan/atau investasi kepada debitur usaha yang produktif dan layak
          (feasible) namun belum memiliki agunan tambahan atau agunan tambahan
          belum cukup (belum bankable)
        </p>
        <div className="pinjaman-item_logo">
          <img
            src={kreditUsahaRakyat}
            alt="Logo kredit linkage program"
            width="500px"
          />
        </div>
        <div className="pinjaman-item_detail">
          <div className="pinjaman-item_detail-information">
            <h4>Informasi</h4>
            <Table striped bordered variant="light">
              <thead>
                <tr>
                  <th>URAIAN</th>
                  <th>KUR SUPER MIKRO</th>
                  <th>KUR MIKRO</th>
                  <th>KUR KECIL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SUKU BUNGA</td>
                  <td>3%</td>
                  <td>6%</td>
                  <td>6%</td>
                </tr>
                <tr>
                  <td>PLAFOND</td>
                  <td>Rp.0 s.d Rp.10 juta per penerima KUR</td>
                  <td>Diatas Rp.10 s.d Rp.100 juta per penerima KUR</td>
                  <td>Diatas Rp.100 s.d Rp.500 juta per penerima KUR</td>
                </tr>
                <tr>
                  <td>TOTAL AKUMULASI</td>
                  <td>Tidak dibatasi</td>
                  <td>
                    <ul>
                      <li>Produksi maksimal 4x</li>
                      <li>Non Produksi maks 2x</li>
                    </ul>
                  </td>
                  <td>Rp. 500 juta per penerima KUR</td>
                </tr>
                <tr>
                  <td rowSpan={3}>JANGKA WAKTU</td>
                  <td>
                    Kredit Modal Kerja : 3 tahun dan suplesi menjadi 4 tahun.
                  </td>
                  <td>
                    Kredit Modal Kerja : 3 tahun dan suplesi menjadi 4 tahun.
                  </td>
                  <td>
                    Kredit Modal Kerja : 3 tahun dan suplesi menjadi 4 tahun.
                  </td>
                </tr>
                <tr>
                  <td>
                    Kredit Investasi : 5 tahun dan suplesi menjadi 7 tahun.
                  </td>
                  <td>
                    Kredit Investasi : 5 tahun dan suplesi menjadi 7 tahun.
                  </td>
                  <td>
                    Kredit Investasi : 5 tahun dan suplesi menjadi 7 tahun.
                  </td>
                </tr>
                <tr>
                  <td>Grace period sesuai dengan penilaian Penyalur KUR.</td>
                  <td>Grace period sesuai dengan penilaian Penyalur KUR.</td>
                  <td>Grace period sesuai dengan penilaian Penyalur KUR.</td>
                </tr>
                <tr>
                  <td>AGUNAN POKOK</td>
                  <td>Usaha atau Obyek yang dibiayai</td>
                  <td>Usaha atau Obyek yang dibiayai</td>
                  <td>Usaha atau Obyek yang dibiayai</td>
                </tr>
                <tr>
                  <td>TAMBAHAN</td>
                  <td>Tidak dipersyaratkan</td>
                  <td>Tidak dipersyaratkan</td>
                  <td>Sesuai dengan penilaian Penyalur KUR</td>
                </tr>
              </tbody>
            </Table>
            <p>Sektor KUR :</p>
            <ol type="1">
              <li>Pertanian, Perburuan, Kehutanan</li>
              <li>Kelautan & Perikanan</li>
              <li>Industri Pengolahan</li>
              <li>Konstruksi</li>
              <li>Pertambangan Garam Rakyat</li>
              <li>Pariwisata</li>
              <li>Jasa Produksi</li>
            </ol>
            <p>Silahkan download tabel angsuran pada link berikut :</p>
            <a
              href="https://drive.google.com/file/d/1_X2vCbVoW-Y0BtEZ9nWYmovrTAXbUyic/view"
              target="_blank"
              rel="noreferrer"
            >
              https://drive.google.com/file/d/1_X2vCbVoW-Y0BtEZ9nWYmovrTAXbUyic/view
            </a>
          </div>
          <div className="pinjaman-item_detail-requirement">
            <h4>Ketentuan</h4>
            <Table striped bordered variant="light">
              <thead>
                <tr>
                  <th>KUR SUPER MIKRO</th>
                  <th>KUR MIKRO</th>
                  <th>KUR KECIL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. Belum pernah menerima KUR</td>
                  <td>
                    1. Individu (perorangan) yang melakukan usaha produktif dan
                    layak
                  </td>
                  <td>
                    1. Individu (perorangan) yang melakukan usaha produktif dan
                    layak
                  </td>
                </tr>
                <tr>
                  <td>
                    2. Waktu pendirian usaha kurang dari 6 bulan atau 0 bulan
                    harus memenuhi syarat berikut :
                  </td>
                  <td>
                    2. Telah melakukan usaha secara aktif minimal 6 bulan.
                  </td>
                  <td>
                    2. Telah melakukan usaha secara aktif minimal 6 bulan.
                  </td>
                </tr>
                <tr>
                  <td>- Mengikuti program pendampingan</td>
                  <td rowSpan={3}>
                    3. Tidak sedang menerima kredit perbankan komersial (modal
                    kerja/investasi) kecuali kredit konsumtif seperti KPR, KKB,
                    Kartu Kredit.
                  </td>
                  <td rowSpan={3}>
                    3. Tidak sedang menerima kredit perbankan komersial (modal
                    kerja/investasi) kecuali kredit konsumtif seperti KPR, KKB,
                    Kartu Kredit.
                  </td>
                </tr>
                <tr>
                  <td>- Mengikuti pelatihan kewirausahaan</td>
                </tr>
                <tr>
                  <td>- Tergabung dalam kelompok usaha</td>
                </tr>
                <tr>
                  <td>
                    - Memiliki anggota keluarga yang telah mempunyai usaha
                    produktif dan layak
                  </td>
                  <td>
                    4. Persyaratan administrasi : identitas berupa KTP, Kartu
                    Keluarga (KK) dan Surat Keterangan Usaha (SKU)
                  </td>
                  <td>
                    4. Persyaratan administrasi : identitas berupa KTP, Kartu
                    Keluarga (KK) dan memiliki izin usaha (NIB).
                  </td>
                </tr>
                <tr>
                  <td rowSpan={2}>
                    3. Memiliki izin usaha seperti SKU yang diterbitkan
                    RT/RW/Lurah/Kades atau yang dipersamaan.
                  </td>
                  <td>
                    5. Wajib memiliki NPWP dengan pengajuan plafon diatas 50
                    juta.
                  </td>
                  <td>5. Wajib memiliki NPWP </td>
                </tr>
                <tr>
                  <td>
                    6. Jika sedang memiliki fasilitas kredit konsumtif, harus
                    dalam kolektibilitas lancar berdasarkan informasi data
                    debitur pada SLIK OJK (dilakukan oleh Bank)
                  </td>
                  <td>
                    6. Jika sedang memiliki fasilitas kredit konsumtif, harus
                    dalam kolektibilitas lancar berdasarkan informasi data
                    debitur pada SLIK OJK (dilakukan oleh Bank)
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default KreditUsahaRakyatPage;
