import React from "react";
import logo from "../assets/logo.jpg";
import { Tree, TreeNode } from "react-organizational-chart";

function About() {
  return (
    <div className="about-container">
      <h3>Tentang Kami</h3>
      <div className="about-container_company">
        <div className="about-container_company-logo">
          <img src={logo} alt="Logo Bank Lampung" />
        </div>
        <div className="about-container_company-text">
          <h4>Deskripsi</h4>
          <p>
            Bank Lampung KCP Menggala adalah salah satu cabang Bank Pembangunan
            Daerah (BPD) yang berlokasi di daerah Menggala, Lampung. Dengan visi
            menjadi BPD komersial yang kompetitif, cabang ini memiliki komitmen
            yang kuat dalam mengembangkan Usaha Mikro, Kecil, dan Menengah
            (UMKM) sebagai kontribusi terhadap pembangunan daerah setempat.
            Sebagai mitra strategis Pemerintah Daerah, Bank Lampung KCP Menggala
            berdedikasi dalam meningkatkan perekonomian masyarakat di wilayah
            tersebut dan memberikan nilai tambah bagi seluruh stakeholders.
            Cabang ini memfokuskan layanannya pada segmen salary-based loan
            business dan project-based financing, dengan upaya untuk
            mempertahankan pangsa pasar yang telah dibangun melalui peningkatan
            kualitas layanan. Selain itu, Bank Lampung KCP Menggala juga aktif
            dalam mengembangkan UMKM dengan menekankan pada hilirisasi pertanian
            dan ekosistem pasar secara komprehensif dalam aspek intermediasi
            finansial. Dengan semangat pelayanan dan kontribusinya dalam
            pembangunan daerah, Bank Lampung KCP Menggala bertekad untuk menjadi
            kekuatan yang mendorong pertumbuhan ekonomi di daerah Menggala,
            Lampung.
          </p>
        </div>
      </div>
      <div className="about-container_duty">
        <div className="about-container_duty-vismis">
          <h4>Visi dan Misi</h4>
          <div className="about-container_duty-vission">
            <h5>Visi</h5>
            <p>
              Menjadi BPD komersial yang kompetitif dengan fokus pada
              pengembangan UMKM dalam kontribusi terhadap pembangunan daerah.
            </p>
          </div>
          <div className="about-container_duty-mission">
            <h5>Misi</h5>
            <ul>
              <li>
                Menjadi mitra strategis Pemerintah Daerah dalam meningkatkan
                perekonomian masyarakat Lampung dan memberikan nilai tambah bagi
                stakeholders.
              </li>
              <li>
                Mempertahankan pangsa pasar captive market pada segmen
                salary-based loan business dan project-based financing dengan
                peningkatan kualitas layanan.
              </li>
              <li>
                Mengembangkan UMKM dengan fokus pada penguasaan hilirisasi
                pertanian dan ekosistem pasar secara komprehensif dalam aspek
                intermediasi finansial.
              </li>
              <li>
                Mengembangkan integrated financial solution dalam menerapkan
                transaction culture termasuk menjadi Bank devisa.
              </li>
              <li>
                Meningkatkan kinerja untuk menjadi Bank BUKU 2 dengan modal
                minimal Rp 3 triliun.
              </li>
              <li>
                Menjalankan tata kelola perusahaan dan manajemen risiko yang
                baik termasuk dalam aspek Sumber Daya Manusia dan IT.
              </li>
            </ul>
          </div>
        </div>
        <div className="about-container_value">
          <h4>Nilai - Nilai Perusahaan</h4>
          <div className="value-container">
            <div className="value-icon-top">
              <svg>
                <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
              </svg>
            </div>
            <div className="value-text-top">
              <h5>Integritas</h5>
              <p>Berprilaku jujur dan disiplin untuk membangun kepercayaan</p>
            </div>
          </div>
          <div className="value-container">
            <div className="value-icon-top">
              <svg>
                <path d="M15.94,10.179l-2.437-0.325l1.62-7.379c0.047-0.235-0.132-0.458-0.372-0.458H5.25c-0.241,0-0.42,0.223-0.373,0.458l1.634,7.376L4.06,10.179c-0.312,0.041-0.446,0.425-0.214,0.649l2.864,2.759l-0.724,3.947c-0.058,0.315,0.277,0.554,0.559,0.401l3.457-1.916l3.456,1.916c-0.419-0.238,0.56,0.439,0.56-0.401l-0.725-3.947l2.863-2.759C16.388,10.604,16.254,10.22,15.94,10.179M10.381,2.778h3.902l-1.536,6.977L12.036,9.66l-1.655-3.546V2.778z M5.717,2.778h3.903v3.335L7.965,9.66L7.268,9.753L5.717,2.778zM12.618,13.182c-0.092,0.088-0.134,0.217-0.11,0.343l0.615,3.356l-2.938-1.629c-0.057-0.03-0.122-0.048-0.184-0.048c-0.063,0-0.128,0.018-0.185,0.048l-2.938,1.629l0.616-3.356c0.022-0.126-0.019-0.255-0.11-0.343l-2.441-2.354l3.329-0.441c0.128-0.017,0.24-0.099,0.295-0.215l1.435-3.073l1.435,3.073c0.055,0.116,0.167,0.198,0.294,0.215l3.329,0.441L12.618,13.182z"></path>
              </svg>
            </div>
            <div className="value-text-top">
              <h5>Profesionalisme</h5>
              <p>Bekerja atas dasar kompetensi dan tanggung jawab</p>
            </div>
          </div>
          <div className="value-container">
            <div className="value-icon-top">
              <svg>
                <path d="M15.684,16.959L10.879,8.52c0.886-0.343,1.517-1.193,1.517-2.186c0-1.296-1.076-2.323-2.396-2.323S7.604,5.037,7.604,6.333c0,0.993,0.63,1.843,1.517,2.186l-4.818,8.439c-0.189,0.311,0.038,0.708,0.412,0.708h10.558C15.645,17.667,15.871,17.27,15.684,16.959 M8.562,6.333c0-0.778,0.645-1.382,1.438-1.382s1.438,0.604,1.438,1.382c0,0.779-0.645,1.412-1.438,1.412S8.562,7.113,8.562,6.333 M5.55,16.726L10,8.91l4.435,7.815H5.55z M15.285,9.62c1.26-2.046,1.26-4.525,0-6.572c-0.138-0.223-0.064-0.512,0.162-0.646c0.227-0.134,0.521-0.063,0.658,0.16c1.443,2.346,1.443,5.2,0,7.546c-0.236,0.382-0.641,0.17-0.658,0.159C15.221,10.131,15.147,9.842,15.285,9.62 M13.395,8.008c0.475-1.063,0.475-2.286,0-3.349c-0.106-0.238,0.004-0.515,0.246-0.62c0.242-0.104,0.525,0.004,0.632,0.242c0.583,1.305,0.583,2.801,0,4.106c-0.214,0.479-0.747,0.192-0.632,0.242C13.398,8.523,13.288,8.247,13.395,8.008 M3.895,10.107c-1.444-2.346-1.444-5.2,0-7.546c0.137-0.223,0.431-0.294,0.658-0.16c0.226,0.135,0.299,0.424,0.162,0.646c-1.26,2.047-1.26,4.525,0,6.572c0.137,0.223,0.064,0.512-0.162,0.646C4.535,10.277,4.131,10.489,3.895,10.107 M5.728,8.387c-0.583-1.305-0.583-2.801,0-4.106c0.106-0.238,0.39-0.346,0.631-0.242c0.242,0.105,0.353,0.382,0.247,0.62c-0.475,1.063-0.475,2.286,0,3.349c0.106,0.238-0.004,0.515-0.247,0.62c-0.062,0.027-0.128,0.04-0.192,0.04C5.982,8.668,5.807,8.563,5.728,8.387"></path>
              </svg>
            </div>
            <div className="value-text-top">
              <h5>Visioner</h5>
              <p>
                Berpikir serta bertindak secara inovatif dan kreatif untuk
                mewujudkan kemajuan dan pertumbuhan perusahaan.
              </p>
            </div>
          </div>
          <div className="value-container">
            <div className="value-icon-top">
              <svg>
                <path d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path>
              </svg>
            </div>
            <div className="value-text-top">
              <h5>Customer Oriented</h5>
              <p>
                Mengutamakan kepentingan nasabah internal dan eksternal dengan
                memberi pelayanan dan solusi terbaik.
              </p>
            </div>
          </div>
          <div className="value-container">
            <div className="value-icon-top">
              <svg>
                <path d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"></path>
              </svg>
            </div>
            <div className="value-text-top">
              <h5>Sinergi</h5>
              <p>Membangun kemitraan yang produktif untuk hasil terbaik.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-container-structure">
        <h3>Struktur Organisasi</h3>
        <Tree
          lineWidth={"2px"}
          lineColor={"black"}
          lineBorderRadius={"10px"}
          label={
            <div className="div-structure">
              <h4>
                <u>ALAMSYAH</u>
              </h4>
              <p>PIMPINAN KCP KELAS 1</p>
            </div>
          }
        >
          <TreeNode
            label={
              <div className="div-structure">
                <h4>
                  <u>ADHIS ARIFAN</u>
                </h4>
                <p>SPV. BISNIS</p>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="div-structure">
                  <h4>
                    <u>RIYADHI ADYAN SYAH</u>
                  </h4>
                  <p>ACCOUNT OFFICER</p>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="div-structure">
                    <h4>
                      <u>M NAUFAL RAFIF</u>
                    </h4>
                    <p>ACCOUNT OFFICER</p>
                  </div>
                }
              >
                <TreeNode
                  label={
                    <div className="div-structure">
                      <h4>
                        <u>YUSI LORENCIA</u>
                      </h4>
                      <p>ACCOUNT OFFCER</p>
                    </div>
                  }
                />
              </TreeNode>
            </TreeNode>
          </TreeNode>

          <TreeNode
            label={
              <div className="div-structure">
                <h4>
                  <u>PERY FEBRIANSYAH</u>
                </h4>
                <p>SPV. OPERASIONAL</p>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="div-structure">
                  <h4>
                    <u>DERA AYOURA</u>
                  </h4>
                  <p>STAFF JUNIOR ADM KREDIT</p>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="div-structure">
                    <h4>
                      <u>VINA HUSNA WAHAB P</u>
                    </h4>
                    <p>STAFF JUNIOR SDM DAN UMUM</p>
                  </div>
                }
              >
                <TreeNode
                  label={
                    <div className="div-structure">
                      <h4>
                        <u>REGINA GITA AYU</u>
                      </h4>
                      <p>CUSTOMER SERVICE</p>
                    </div>
                  }
                >
                  <TreeNode
                    label={
                      <div className="div-structure">
                        <h4>
                          <u>AHMAD YUSUF</u>
                        </h4>
                        <p>TELLER</p>
                      </div>
                    }
                  >
                    <TreeNode
                      label={
                        <div className="div-structure">
                          <h4>
                            <u>ASUNDER HARISON</u>
                          </h4>
                          <p>TELLER SAMSAT MENGGALA</p>
                        </div>
                      }
                    />
                  </TreeNode>
                </TreeNode>
              </TreeNode>
            </TreeNode>

            <TreeNode
              label={
                <div className="div-structure">
                  <h4>
                    <u>DRIVER</u>
                  </h4>
                  <p>BUDI SETIAWAN</p>
                  <p>HIDAYATULLOH</p>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="div-structure">
                    <h4>
                      <u>SECURITY</u>
                    </h4>
                    <p>NURDIN EFFENDI</p>
                    <p>HANDIKA SAPUTRA</p>
                    <p>DONI</p>
                    <p>SHANDRI DWIARTO</p>
                    <p>CHANDRA</p>
                  </div>
                }
              >
                <TreeNode
                  label={
                    <div className="div-structure">
                      <h4>
                        <u>CLEANING SERVICE</u>
                      </h4>
                      <p>MIRHAN</p>
                      <p>KURNIAWAN</p>
                      <p>YOGI RINALDI</p>
                    </div>
                  }
                />
              </TreeNode>
            </TreeNode>
          </TreeNode>

          <TreeNode
            label={
              <div className="div-structure">
                <h4>
                  <u>TATOK ARISTO SETIAWAN</u>
                </h4>
                <p>QUALITY ASSURANCE</p>
              </div>
            }
          ></TreeNode>
        </Tree>
      </div>
    </div>
  );
}

export default About;
