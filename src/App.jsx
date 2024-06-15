import { useState } from "react";
import BaseLayout from "./components/BaseLayout/BaseLayout";
// BaseLayout
function App() {
  return (
    <>
      <BaseLayout>
        <div className="h-screen relative pt-14 bg-[#F4E0B7] bg-opacity-15 overflow-hidden">
          <div className=" h-full flex flex-row justify-end items-end ">
            <div className="flex-1 flex flex-col gap-10 px-24 py-32">
              <div>
                <p className="text-title font-primary font-semibold text-primary">
                  No #1 Platform
                </p>
                <p className="text-title font-primary font-semibold ">
                  Pernikahan Digital
                </p>
                <p className="font-primary font-light">
                  Wedding Planner(soon) - Invitation - Digital Guestbook
                </p>
              </div>
              <div>
                <p className="font-primary">
                  One stop solution your wedding buddy!
                </p>
                <p className="font-primary font-bold">
                  Solusi pernikahanmu jadi lebih modern, efisien dan terukur
                </p>
              </div>
              <button className="btn w-44 btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-lg btn-primary">
                <p className="font-primary text-regular font-semibold">
                  Buat Sekarang
                </p>
              </button>
            </div>
            <div className="flex-1">
              <img src="./src/assets/image/main-banner.gif" />
            </div>
          </div>
          <div className="absolute w-[60rem] h-[60rem] bg-[#F4E0B7] bg-opacity-15 top-0 left-0 -z-10 rounded-full -translate-x-64 -translate-y-40"></div>
          <div className="absolute w-[80rem] h-[80rem] bg-[#F4E0B7] bg-opacity-15 top-0 left-0 -z-10 rounded-full -translate-x-64 -translate-y-40"></div>
        </div>
        {/* testii */}
        <div className="h-screen flex flex-row relative bg-[#F4E0B7] bg-opacity-15 overflow-hidden">
          <img
            className="h-full w-full absolute -z-10 object-cover"
            src="./src/assets/image/portowrap.jpg"
            alt=""
          />
          <div className="flex-1 h-full"></div>
          <div className="flex-1 h-full flex flex-col gap-16 items-center">
            <div className="pt-14 flex flex-col justify-center items-center">
              <p className="text-title2 font-primary font-semibold text-primary">
                36.865
              </p>
              <p className="text-subTitle font-primary font-semibold ">
                Pasangan berbahagia
              </p>
              <p className="font-primary text-regular2">
                Dari luar dan dalam negeri sudah membuat undangannya. giliran
                kamu untuk mencoba :)
              </p>
            </div>
            <div className="carousel carousel-center max-w-md p-4 space-x-4 h-72 rounded-box">
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                  className="rounded-box"
                />
              </div>
            </div>
            <div className="px-24 w-full flex flex-row justify-start gap-8">
              <button className="btn  btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-lg btn-primary">
                <p className="font-primary text-regular font-semibold">
                  Lebih Banyak Porto
                </p>
              </button>
              <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-lg btn-primary">
                <p className="font-primary text-primary hover:text-base-100 text-regular font-semibold">
                  Buat Undanganmu Sekarang Gratiss
                </p>
              </button>
            </div>
          </div>
        </div>
        {/* how to */}
        <div className="px-24 py-6 flex flex-col gap-8">
          <div className="flex flex-row  gap-12">
            <div className="flex-1 flex flex-col gap-6">
              <div>
                <p className="text-subTitle2 font-primary font-semibold text-primary">
                  Cara Membuat Undangan kamu
                </p>
                <p className="font-primary text-regular2 pr-24">
                  Cara mudah membuat undangan, hanya butuh 5 menit undangan kamu
                  sudah bisa di sebarkan.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  {
                    value:
                      "1. Registrasi untuk membuat akun undangan kamu di sini.",
                  },
                  {
                    value:
                      "2. Isi Info Acara & Profile dan juga upload foto/gallery. Customize undangan kamu.",
                  },
                  {
                    value:
                      "3. Pilih Preset / Template. Lihat daftar template kita.",
                  },
                  {
                    value:
                      "4. Aktifkan , dan undangan kamu siap untuk di sebarkan.",
                  },
                ].map((e) => {
                  return (
                    <div className="flex flex-row gap-8">
                      <div className="w-14 h-14 bg-primary"></div>
                      <div>
                        <p className="font-primary text-regular2 ">{e.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex-1 py-12 flex flex-col gap-4">
              <div>
                <p className="text-regular font-primary font-semibold">
                  Lihat Video
                </p>
                <p className="font-primary text-regular2 font-light">
                  (Buat Undangan Dengan Mudah)
                </p>
              </div>
              <div className="w-full h-52 bg-primary rounded-md"></div>
            </div>
          </div>
          <div className="w-full border-b-2 border-primary opacity-20"></div>
        </div>
        <div className="px-24 flex flex-col gap-10 py-6">
          <p className="text-subTitle2 font-primary font-semibold text-primary">
            Fitur yang keren dan lengkap
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                icon: "count",
                title: "Hitungan Mundur",
                value:
                  "Jangan sampai terlewatkan moment indah kamu, hitung mundur tanggal acara pernikahanmu.",
              },
              {
                icon: "count",
                title: "Design Modern dan Responsif",
                value:
                  "Jangan sampai terlewatkan moment indah kamu, hitung mundur tanggal acara pernikahanmu.",
              },
              {
                icon: "count",
                title: "Support Native Share",
                value:
                  "Jangan sampai terlewatkan moment indah kamu, hitung mundur tanggal acara pernikahanmu.",
              },
              {
                icon: "count",
                title: "Support Native Share",
                value:
                  "Jangan sampai terlewatkan moment indah kamu, hitung mundur tanggal acara pernikahanmu.",
              },
              {
                icon: "count",
                title: "Support Native Share",
                value:
                  "Jangan sampai terlewatkan moment indah kamu, hitung mundur tanggal acara pernikahanmu.",
              },
              {
                icon: "count",
                title: "Support Native Share",
                value:
                  "Jangan sampai terlewatkan moment indah kamu, hitung mundur tanggal acara pernikahanmu.",
              },
            ].map((e) => {
              return (
                <div className="w-full bg-base-100 shadow-md p-8 flex flex-row gap-8 rounded-md">
                  <div>
                    <p>icon</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-regular font-primary font-semibold">
                      {e.title}
                    </p>
                    <p className="font-primary text-regular2 font-light">
                      {e.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full border-b-2 border-primary opacity-20"></div>
        </div>
        <div className="px-24 flex flex-col gap-10 py-6">
          <div>
            <p className="text-subTitle2 font-primary font-semibold text-primary">
              Preset Make Easy
            </p>
            <p className="font-primary text-regular2 font-light">
              54 Presets tersedia. Dengan adanya preset kamu tinggal pilih
              design undangan sesuai dengan yang kamu mau!
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                icon: "count",
                title: "Hitungan Mundur",
                value:
                  "Jangan sampai terlewatkan moment indah kamu, hitung mundur tanggal acara pernikahanmu.",
              },
              {
                icon: "count",
                title: "Design Modern dan Responsif",
                value:
                  "Jangan sampai terlewatkan moment indah kamu, hitung mundur tanggal acara pernikahanmu.",
              },
              {
                icon: "count",
                title: "Support Native Share",
                value:
                  "Jangan sampai terlewatkan moment indah kamu, hitung mundur tanggal acara pernikahanmu.",
              },
              {
                icon: "count",
                title: "Support Native Share",
                value:
                  "Jangan sampai terlewatkan moment indah kamu, hitung mundur tanggal acara pernikahanmu.",
              },
              {
                icon: "count",
                title: "Support Native Share",
                value:
                  "Jangan sampai terlewatkan moment indah kamu, hitung mundur tanggal acara pernikahanmu.",
              },
              {
                icon: "count",
                title: "Support Native Share",
                value:
                  "Jangan sampai terlewatkan moment indah kamu, hitung mundur tanggal acara pernikahanmu.",
              },
            ].map((e) => {
              return (
                <div className="w-full bg-base-100 shadow-md p-8 flex flex-row gap-8 rounded-md">
                  <div>
                    <p>icon</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-regular font-primary font-semibold">
                      {e.title}
                    </p>
                    <p className="font-primary text-regular2 font-light">
                      {e.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col justify-center items-center">
            <button className="btn  btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-lg btn-primary">
              <p className="text-regular font-primary font-semibold">
                Lihat Lebih Banyak Preset
              </p>
            </button>
          </div>
          <div className="w-full border-b-2 border-primary opacity-20"></div>
        </div>
        <div className="px-24 flex flex-row gap-8 py-6 bg-primary bg-opacity-15">
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <p className="text-subTitle2 font-primary font-semibold ">
                Digital
              </p>
              <p className="text-subTitle2 font-primary font-semibold text-primary">
                Guestbook
              </p>
            </div>
            <div>
              <p className="font-primary text-regular2 font-light">
                Jangan mau dibohongi dengan harga yang mahal! disini cuma 250rb
                dapat undangan luxury + digital guestbook!
              </p>
            </div>
            <div>
              <p className="font-primary text-regular2 font-light">
                Bukan hanya untuk sebar undangan, kami hadir untuk memenuhi
                segala kebutuhan dengan harga yang terjangkau
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { icon: "", value: "Aplikasi Penerima Tamu" },
                { icon: "", value: "layar Sapa" },
                { icon: "", value: "Food, Table, & Souvenir Management" },
                { icon: "", value: "Cetak Qr Fisik" },
                { icon: "", value: "Ticket Kedatangan" },
              ].map((e) => {
                return (
                  <div className="flex flex-row gap-8 p-4 rounded-md bg-primary">
                    <div>icon</div>
                    <p>{e.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1">
            <img
              className="h-full w-full object-cover"
              src="./src/assets/image/appguest.png"
              alt=""
            />
            <div>
              <p className=" -mt-8 font-primary text-regular2 font-light">
                Dengan aplikasi penerima tamu tidak ada lagi antrian untuk
                menerima tamu undangan, tinggal scan QR code tamu, tamu langsung
                ter data dgn akurat.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-4">
          <div>
            <p>dsa</p>
          </div>
        </div>
      </BaseLayout>
    </>
  );
}

export default App;
