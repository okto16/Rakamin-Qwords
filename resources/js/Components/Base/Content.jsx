import React, { useState, useEffect } from "react";
import BackToTopButton from "@/Components/BackToTopButton";
import Contact from "@/Components/Part/Contact";
import DomainChecker from "@/Components/Part/DomainChecker";
import Package from "@/Components/Part/Package";
import OtherPackage from "@/Components/Part/OtherPackage";
import Banner from "@/Components/Part/Banner";
import Testi from "@/Components/Part/Testi";
import PreLoader from "@/Components/PreLoader";
import AOS from "aos";
import "aos/dist/aos.css";

const Content = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <main className="bg-white bg-gradient-to-tr from-blue-100 to-orange-200">
                <div className="app">
      {loading ? (
        <PreLoader />
      ) : (
        <div>
            <section
                data-aos="fade-down"
                data-aos-delay="100"
                className="bg-clip-border"
            >
                <Banner />
            </section>

            <section>
                <DomainChecker />
            </section>

            <section>
                <Package />
            </section>

            <section>
                <OtherPackage />
            </section>
            <section className="container-fluid">
                <div
                    data-aos="fade-up"
                    className="text-price row justify-content-center"
                >
                    <div className="col-start-2 col-span-4 text-center">
                        <h1 className="h4title text-center text-5xl font-bold">
                            Solusi Paket Hosting Terbaik dari Kami
                        </h1>
                        <p className="pdescription text-center text-lg font-normal">
                            Kami menawarkan solusi paket hosting terbaik untuk
                            segala kebutuhan website dan sistem Anda. Mulai dari
                            blog hingga website bisnis dan perusahaan
                        </p>
                    </div>
                </div>

                <div className="bodycards3">
                    <a
                        href="https://qwords.com/v2/hosting-dan-server-perusahaan/"
                        style={{ width: "388px" }}
                    >
                        <article
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="transition ease-in-out delay-150 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 cardaddings"
                            style={{
                                backgroundImage:
                                    "url('https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/company.webp')",
                                backgroundSize: "contain",
                                backgroundPosition: "bottom",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                                Perusahaan
                            </h5>
                            <p className="font-normal text-white dark:text-white">
                                Wujudkan website perusahaan profesional dan
                                berkelas dengan dukungan web hosting terbaik dan
                                fitur keamanan ekstra
                            </p>
                        </article>
                    </a>
                    <a
                        href="https://qwords.com/v2/hosting-dan-server-umkm/"
                        style={{ width: "388px" }}
                    >
                        <article
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="transition ease-in-out delay-150 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 cardaddings"
                            style={{
                                backgroundImage:
                                    "url('https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/umkm.webp')",
                                backgroundSize: "contain",
                                backgroundPosition: "bottom",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                                UMKM dan Toko Online
                            </h5>
                            <p className="font-normal text-white dark:text-white">
                                Memberikan hosting terbaik untuk mendukung
                                kebutuhan website pemasaran barang/jasa secara
                                online.
                            </p>
                        </article>
                    </a>
                    <a
                        href="https://qwords.com/v2/hosting-dan-server-organisasi/"
                        style={{ width: "388px" }}
                    >
                        <article
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="transition ease-in-out delay-150 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 cardaddings"
                            style={{
                                backgroundImage:
                                    "url('https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/orgs.webp')",
                                backgroundSize: "contain",
                                backgroundPosition: "bottom",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                                Organisasi dan Komunitas
                            </h5>
                            <p className="font-normal text-white dark:text-white">
                                Bikin website organisasi atau komunitas Anda
                                dengan paket hosting unggulan yang ramah
                                kantong.
                            </p>
                        </article>
                    </a>
                    <a
                        href="https://qwords.com/v2/hosting-dan-server-sekolah/"
                        style={{ width: "388px" }}
                    >
                        <article
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="transition ease-in-out delay-150 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 cardaddings"
                            style={{
                                backgroundImage:
                                    "url('https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/school.webp')",
                                backgroundSize: "contain",
                                backgroundPosition: "bottom",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                                Sekolah
                            </h5>
                            <p className="font-normal text-white dark:text-white">
                                Infrastruktur web hosting terbaik untuk
                                menunjang kegiatan e-learning. Didukung platform
                                MOODLE khusus pembelajaran daring
                            </p>
                        </article>
                    </a>
                    <a
                        href="https://qwords.com/v2/hosting-dan-server-developer/"
                        style={{ width: "388px" }}
                    >
                        <article
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="transition ease-in-out delay-150 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 cardaddings"
                            style={{
                                backgroundImage:
                                    "url('https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/dev.webp')",
                                backgroundSize: "contain",
                                backgroundPosition: "bottom",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                                Developer
                            </h5>
                            <p className="font-normal text-white dark:text-white">
                                Tersedia paket hosting Indonesia dengan
                                spesifikasi khusus yang dev-friendly. Ekstra
                                NodeJS dan Git Version Control
                            </p>
                        </article>
                    </a>
                    <a
                        href="https://qwords.com/v2/hosting-dan-server-blogger/"
                        style={{ width: "388px" }}
                    >
                        <article
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="transition ease-in-out delay-150 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 cardaddings"
                            style={{
                                backgroundImage:
                                    "url('https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/blog.webp')",
                                backgroundSize: "contain",
                                backgroundPosition: "bottom",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                                Blogger dan Personal
                            </h5>
                            <p className="font-normal text-white dark:text-white">
                                Memfasilitasi blogger dengan infrastruktur
                                hosting Indonesia terbaik serta template website
                                premium untuk tampil lebih profesional
                            </p>
                        </article>
                    </a>
                </div>
            </section>

            <section className="container-fluid">
                <div
                    data-aos="fade-up"
                    className="text-price row justify-content-center"
                >
                    <div className="col-start-2 col-span-4 text-center">
                        <h1 className="h4title text-center text-5xl font-bold">
                            Komitmen Qwords
                        </h1>
                        <p className="pdescription text-center text-lg font-normal">
                            Berbagai alasan mengapa pelanggan memilih sewa
                            hosting di Qwords
                        </p>
                    </div>
                </div>

                <div className="bodycards3 grid-rows-3 justify-center">
                    <article
                        data-aos="fade-up"
                        data-aos-delay="0"
                        className="cardglass w-96 bg-white shadow-xl"
                    >
                        <figure>
                            <img
                                src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/call.webp"
                                alt=""
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-black">
                                Layanan 24/7
                            </h2>
                            <p className="font-normal text-grey dark:text-grey">
                                Tim Technical Support dan Customer Service
                                Qwords siap membantu Anda selama 24 jam, 7 hari.
                                Anda dapat menghubungi melalui Live chat, Call
                                Center, danSupport Ticket.
                            </p>
                        </div>
                    </article>

                    <article
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="cardglass w-96  bg-white shadow-xl"
                    >
                        <figure>
                            <img
                                src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/book.webp"
                                alt=""
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-black">
                                Panduan Manual Lengkap
                            </h2>
                            <p className="font-normal text-grey dark:text-grey">
                                Qwords dilengkapi dengan halaman knowledge base
                                berisi tutorial dan tips seputar pengelolaan
                                website dan hosting. Dapat diakses dengan mudah
                                dan solutif
                            </p>
                        </div>
                    </article>

                    <article
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="cardglass w-96  bg-white shadow-xl"
                    >
                        <figure>
                            <img
                                src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/router.webp"
                                alt=""
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-black">
                                Up time 99.99%
                            </h2>
                            <p className="font-normal text-grey dark:text-grey">
                                Uptime Network & Server di atas 99. 99% dengan
                                konfigurasi server yang tepat. Didukung
                                manajemen jaringan dan multiple upstream tier 1
                                provider network serta multiple peering.
                            </p>
                        </div>
                    </article>

                    <article
                        data-aos="fade-up"
                        data-aos-delay="0"
                        className="cardglass w-96  bg-white shadow-xl"
                    >
                        <figure>
                            <img
                                src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/guard.webp"
                                alt=""
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-black">
                                Jaminan keamanan
                            </h2>
                            <p className="font-normal text-grey dark:text-grey">
                                Keamanan menjadi fokus utama kami di Qwords.
                                Tindakan pemantauan dan pencegahan yang
                                berstandar & berkelanjutan telah menjadi
                                perhatian utama kami.
                            </p>
                        </div>
                    </article>

                    <article
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="cardglass w-96  bg-white shadow-xl"
                    >
                        <figure>
                            <img
                                src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/networkAlt.webp"
                                alt=""
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-black">
                                Clustered DNS
                            </h2>
                            <p className="font-normal text-grey dark:text-grey">
                                DNS Server Cloud Hosting Qwords terhubung satu
                                dengan yang lainnya. Hal ini membuat DNS Server
                                akan selalu dapat di akses karena saling
                                membackup antar server.
                            </p>
                        </div>
                    </article>

                    <article
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="cardglass w-96  bg-white shadow-xl"
                    >
                        <figure>
                            <img
                                src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/diamond.webp"
                                alt=""
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-black">
                                High Enterprise Server
                            </h2>
                            <p className="font-normal text-grey dark:text-grey">
                                Standar server Qwords adalah server kelas
                                enterprise Dual Xeon Octa Core yang merupakan
                                hardware kelas terbaik. Hardware ini biasa
                                digunakan oleh perusahaan terkemuka.
                            </p>
                        </div>
                    </article>

                    <article
                        data-aos="fade-up"
                        data-aos-delay="0"
                        className="cardglass w-96  bg-white shadow-xl"
                    >
                        <figure>
                            <img
                                src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/router.webp"
                                alt=""
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-black">
                                Tier 1 Network
                            </h2>
                            <p className="font-normal text-grey dark:text-grey">
                                Tier 1 Network merupakan jaringan dunia tanpa
                                transit network, yang membuat jaringan lebih
                                cepat serta jalur routing yang lebih pendek dan
                                ketersediaan backup network.
                            </p>
                        </div>
                    </article>

                    <article
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="cardglass w-96  bg-white shadow-xl"
                    >
                        <figure>
                            <img
                                src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/network.webp"
                                alt=""
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-black">
                                Peering Network
                            </h2>
                            <p className="font-normal text-grey dark:text-grey">
                                Jaringan di Qwords terhubung langsung ke public
                                peering seperti OpenIXP dan CDIX yang membuat
                                latency atau waktu tunggu pengiriman data
                                semakin kecil.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
            <section>
                <div className="container-fluid p-44 phone:p-4 tablet:p-4">
                    <article
                        data-aos="fade-right"
                        data-aos-delay="100"
                        className="bw-ads-banner py-9 px-5  glass rounded-lg"
                    >
                        <div className="h-100 flex row align-items-center justify-content-center">
                            <div className="col-12 col-sm-5 col-lg-5 col-xxl-5 mb-3 mb-lg-0">
                                <div className="img-wrapper mx-auto">
                                    <img
                                        data-lazyloaded="1"
                                        data-placeholder-resp="665pxx650px"
                                        src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/illustrations/bw.webp"
                                        loading="lazy"
                                        data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/illustrations/bw.webp"
                                        alt="Jasa pembuatan website profesional"
                                        width="665px"
                                        height="650px"
                                        data-ll-status="loaded"
                                        className="entered litespeed-loaded"
                                    />
                                </div>
                            </div>
                            <div className="mb-4 mb-lg-0 ml-10 phone:ml-1 tablet:ml-1">
                                <h2 className="text-black phone:text-sm text-5xl font-extrabold mb-3 tablet:text-3xl">
                                    <span className="text-qw-primary">
                                        Bikin website impian
                                    </span>{" "}
                                    dengan udah disini hanya 1jutaan
                                </h2>
                                <p className="phone:my-1 phone:text-xs my-3 text-black tablet:text-sm tablet:my-1">
                                    Bikin website impian include paket hosting
                                    Indonesia terbaik hanya 1 jutaan Jasa
                                    pembuatan website profesional untuk
                                    Perusahaan, Bisnis &amp; UKM. Bikin Website
                                    Impian dengan mudah di sini, desain website
                                    elegan dan mudah dikelola
                                </p>
                                <a
                                    href="https://bikin.website/"
                                    className="btn btn-info hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-orange-300 hover:border-transparent dark:bg-blue-400 dark:hover:bg-orange-500 dark:focus:ring-orange-800 dark:hover:text-white rounded-full text-bold px-3"
                                >
                                    Lihat Selengkapnya
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section>
                <div className="container-fluid flex-row mb-12 mb-lg-5 px-40">
                    <article data-aos="fade-up" data-aos-delay="100">
                        <div className="text-5xl phone:text-2xl tablet:text-3xl text-center font-black text-black mb-3 mb-lg-5">
                            <h2>
                                Telah Dipercaya oleh 45.000+ Pelanggan Aktif
                            </h2>
                        </div>
                        <div className="col-12 text-center">
                            <div className="flex justify-center mb-6">
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="200pxx85px"
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/Cimory.webp"
                                    loading="lazy"
                                    data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/Cimory.webp"
                                    alt="Cimory"
                                    width="200px"
                                    height="85px"
                                    data-ll-status="loaded"
                                    className="phone:w-28 phone:h-10 tablet:w-28 tablet:h-10 entered litespeed-loaded"
                                />
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="200pxx85px"
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/Forisa.webp"
                                    loading="lazy"
                                    data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/Forisa.webp"
                                    alt="Forisa"
                                    width="200px"
                                    height="85px"
                                    data-ll-status="loaded"
                                    className="phone:w-28 phone:h-10 tablet:w-28 tablet:h-10 entered litespeed-loaded"
                                ></img>
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="200pxx85px"
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/Elsheskin.webp"
                                    loading="lazy"
                                    data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/Elsheskin.webp"
                                    alt="Elsheskin"
                                    width="200px"
                                    height="85px"
                                    data-ll-status="loaded"
                                    className="phone:w-28 phone:h-10 tablet:w-28 tablet:h-10 entered litespeed-loaded"
                                ></img>
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="200pxx85px"
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/Icon.webp"
                                    loading="lazy"
                                    data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/Icon.webp"
                                    alt="Icon +"
                                    width="200px"
                                    height="85px"
                                    data-ll-status="loaded"
                                    className="phone:w-28 phone:h-10 tablet:w-28 tablet:h-10 entered litespeed-loaded"
                                ></img>
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="200pxx85px"
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/MD.webp"
                                    loading="lazy"
                                    data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/MD.webp"
                                    alt="MD Pictures"
                                    width="200px"
                                    height="85px"
                                    data-ll-status="loaded"
                                    className="phone:w-28 phone:h-10 tablet:w-28 tablet:h-10 entered litespeed-loaded"
                                ></img>
                            </div>
                            <a
                                href="#"
                                className="text-qw-primary fw-bold flex transition ease-in-out hover:text-sky-400 justify-center"
                            >
                                Dan Masih Banyak yang Lainnya
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="20pxx20px"
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Right.webp"
                                    loading="lazy"
                                    className="ms-3 entered litespeed-loaded"
                                    data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Right.webp"
                                    alt="Right.webp"
                                    width="20px"
                                    height="20px"
                                    data-ll-status="loaded"
                                />
                            </a>
                        </div>
                    </article>
                </div>
            </section>

            <section>
                <div className="container-fluid flex-row justify-center px-40">
                    <article data-aos="fade-up" data-aos-delay="100">
                        <div className="col-12 text-5xl phone:text-3xl tablet:text-3xl text-center mb-3 mb-lg-4 font-black text-black">
                            <h2>Partner Kami</h2>
                        </div>
                        <div className="col-12 text-center">
                            <div className="flex justify-center mb-6 patner">
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="200pxx85px"
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Partner/Google.webp"
                                    loading="lazy"
                                    data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Partner/Google.webp"
                                    alt="Google Cloud"
                                    width="200px"
                                    height="85px"
                                    data-ll-status="loaded"
                                    className="phone:w-28 phone:h-10 tablet:w-28 tablet:h-10 entered litespeed-loaded"
                                ></img>
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="200pxx85px"
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Partner/Cpanel.webp"
                                    loading="lazy"
                                    data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Partner/Cpanel.webp"
                                    alt="Cpanel"
                                    width="200px"
                                    height="85px"
                                    data-ll-status="loaded"
                                    className="phone:w-28 phone:h-10 tablet:w-28 tablet:h-10 entered litespeed-loaded"
                                ></img>
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="200pxx85px"
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Partner/Archi.webp"
                                    loading="lazy"
                                    data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Partner/Archi.webp"
                                    alt="Archi"
                                    width="200px"
                                    height="85px"
                                    data-ll-status="loaded"
                                    className="phone:w-28 phone:h-10 tablet:w-28 tablet:h-10 entered litespeed-loaded"
                                ></img>
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="200pxx85px"
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Partner/dotid.webp"
                                    loading="lazy"
                                    data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Partner/dotid.webp"
                                    alt="dotid"
                                    width="200px"
                                    height="85px"
                                    data-ll-status="loaded"
                                    className="phone:w-28 phone:h-10 tablet:w-28 tablet:h-10 entered litespeed-loaded"
                                ></img>
                            </div>
                            <a
                                href="https://qwords.com/v2/about-qwordscom/partner/"
                                className="text-qw-primary fw-bold transition ease-in-out hover:text-sky-400 flex justify-center"
                            >
                                Lihat Semua Partner
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="20pxx20px"
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Right.webp"
                                    loading="lazy"
                                    className="ms-3 entered litespeed-loaded"
                                    data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Right.webp"
                                    alt="Right.webp"
                                    width="20px"
                                    height="20px"
                                    data-ll-status="loaded"
                                />
                            </a>
                        </div>
                    </article>
                </div>
            </section>

            <section>
                <div className="container-fluid flex justify-center p-44 phone:p-4 tab:p-4 tablet:p-4">
                    <article
                        data-aos="fade-left"
                        data-aos-delay="100"
                        className="bw-ads-banner py-9 px-5  glass rounded-lg"
                    >
                        <div className="h-100 flex row align-items-center justify-content-center">
                            <div className="col-12 col-sm-5 col-lg-5 col-xxl-5 mb-3 mb-lg-0">
                                <div className="img-wrapper mx-auto">
                                    <img
                                        data-lazyloaded="1"
                                        data-placeholder-resp="100%x100%"
                                        src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/illustrations/guarantee.webp"
                                        loading="lazy"
                                        data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/illustrations/guarantee.webp"
                                        alt="guarantee.webp"
                                        width="100%"
                                        height="100%"
                                        data-ll-status="loaded"
                                        className="entered litespeed-loaded"
                                    ></img>
                                </div>
                            </div>
                            <div className="flex items-center text-left ">
                                <div className=" text-black mx-auto text-5xl font-extrabold mb-3 phone:text-3xl tablet:text-3xl">
                                    <h2 className="mb-4">
                                        Garansi 30 Hari
                                        <span className="ml-2 text-qw-primary">
                                            Uang Kembali
                                        </span>
                                    </h2>
                                    <p className="text-lg phone:text-base tablet:text-base">
                                        Untuk menjaga kepuasan pelanggan, kami
                                        memberikan garansi uang kembali yang
                                        berlaku hingga 30 hari setelah hosting
                                        aktif.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section>
                <Testi/>
            </section>

            <section>
                <div className="container-fluid flex-row mb-12 mb-lg-5 px-40">
                    <article
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className=""
                    >
                        <div className="text-5xl text-center font-black text-black mb-3 mb-lg-5 phone:text-3xl tablet:text-3xl">
                            <h2>
                                Telah Dipercaya oleh 45.000+ Pelanggan Aktif
                            </h2>
                        </div>
                        <div className="col-12 text-center">
                            <div className="flex flex-wrap justify-center mb-6">
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="200pxx85px"
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/liputan/Detikcom.webp"
                                    loading="lazy"
                                    alt="Cimory"
                                    width="200px"
                                    height="85px"
                                    data-ll-status="loaded"
                                    className="entered litespeed-loaded"
                                />
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="200pxx85px"
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/liputan/Liputan6.webp"
                                    loading="lazy"
                                    alt="Forisa"
                                    width="200px"
                                    height="85px"
                                    data-ll-status="loaded"
                                    className="entered litespeed-loaded"
                                ></img>
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="200pxx85px"
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/liputan/TribunJogja.webp"
                                    loading="lazy"
                                    alt="Elsheskin"
                                    width="200px"
                                    height="85px"
                                    data-ll-status="loaded"
                                    className="entered litespeed-loaded"
                                ></img>
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="200pxx85px"
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/liputan/antara.webp"
                                    loading="lazy"
                                    alt="Icon +"
                                    width="200px"
                                    height="85px"
                                    data-ll-status="loaded"
                                    className="entered litespeed-loaded"
                                ></img>
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="200pxx85px"
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/liputan/RM.webp"
                                    loading="lazy"
                                    alt="MD Pictures"
                                    width="200px"
                                    height="85px"
                                    data-ll-status="loaded"
                                    className="entered litespeed-loaded"
                                ></img>
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="200pxx85px"
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/liputan/KoranBernas.webp"
                                    loading="lazy"
                                    alt="MD Pictures"
                                    width="200px"
                                    height="85px"
                                    data-ll-status="loaded"
                                    className="entered litespeed-loaded"
                                ></img>
                            </div>
                            <a
                                href="https://www.qwords.com/v2/media-publication/"
                                className="text-qw-primary fw-bold flex justify-center"
                            >
                                Lihat Semua Liputan
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="20pxx20px"
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Right.webp"
                                    loading="lazy"
                                    className="ms-3 entered litespeed-loaded"
                                    data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Right.webp"
                                    alt="Right.webp"
                                    width="20px"
                                    height="20px"
                                    data-ll-status="loaded"
                                />
                            </a>
                        </div>
                    </article>
                </div>
            </section>

            <section>
                <div className="container-fluid flex-row mb-12 mb-lg-5 px-40 phone:px-16 tablet:px-16">
                    <article data-aos="fade-up" data-aos-delay="100">
                        <div className="text-5xl text-center font-black text-black mb-3 mb-lg-5 phone:text-3xl tablet:text-3xl">
                            <h2>
                                Pilih metode e-payment otomatis. Layanan Domain,
                                Hosting, VPS langsung aktif tanpa perlu
                                konfirmasi bayar.
                            </h2>
                        </div>
                        <div className="col-12 text-center">
                            <div className="flex flex-wrap justify-center mb-6">
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="100%x100%"
                                    src="all-payment-PhotoRoom.png"
                                    loading="lazy"
                                    data-src="all-payment-PhotoRoom.png"
                                    alt="payment.webp"
                                    width="100%"
                                    height="100%"
                                    data-ll-status="loaded"
                                    className="entered litespeed-loaded"
                                />
                            </div>
                            <a
                                href="https://www.qwords.com/v2/media-publication/"
                                className="text-qw-primary fw-bold flex justify-center"
                            >
                                Lihat Semua Liputan
                                <img
                                    data-lazyloaded="1"
                                    data-placeholder-resp="20pxx20px"
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Right.webp"
                                    loading="lazy"
                                    className="ms-3 entered litespeed-loaded"
                                    data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Right.webp"
                                    alt="Right.webp"
                                    width="20px"
                                    height="20px"
                                    data-ll-status="loaded"
                                />
                            </a>
                        </div>
                    </article>
                </div>
            </section>

            <section>
                <div className="container-fluid">
                    <article
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="flex justify-center"
                    >
                        <div className="text-5xl text-center font-black text-black w-4/5 phone:text-3xl tablet:text-3xl">
                            <h2>
                                Pertanyaan seputar{" "}
                                <span className="text-qw-primary">
                                    Layanan Web Hosting
                                </span>{" "}
                                Qwords
                            </h2>
                        </div>
                    </article>
                    <article
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="flex justify-center"
                    >
                        <div className="join join-vertical w-4/5">
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input
                                    type="radio"
                                    name="my-accordion-4"
                                    defaultChecked="defaultChecked"
                                />
                                <div className="collapse-title text-black text-xl font-medium">
                                    Apa itu web hosting?
                                </div>
                                <div className="collapse-content text-black">
                                    <p>
                                        Hosting adalah tempat penyimpanan file
                                        dan data website seperti teks, video dan
                                        gambar website. File dan data tersebut
                                        di simpan di dalam server yang
                                        terkoneksi dengan internet sehingga data
                                        tersebut dapat diakses oleh siapa saja,
                                        kapan saja dan di mana saja.
                                        <br />
                                        <br />
                                        Penjelasan lebih lanjut dapat Anda baca
                                        pada artikel ini :
                                        https://qwords.com/blog/apa-itu-hosting/
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-black text-xl font-medium">
                                    Ada berapa jenis hosting di Qwords?
                                </div>
                                <div className="collapse-content text-black">
                                    <p>
                                        Untuk mendukung kesuksesan bisnis di era
                                        digital, Qwords menghadirkan beragam
                                        paket hosting Indonesia yang bisa
                                        dipilih sesuai kebutuhan.
                                    </p>
                                    <br />
                                    <h4 className="font-bold">
                                        Value Performance
                                    </h4>
                                    <br />
                                    Value Cloud Hosting merupakan paket cloud
                                    hosting murah Indonesia yang dirancang
                                    khusus untuk keperluan sederhana seperti
                                    UKM, toko online, blog, website sederhana,
                                    hingga email untuk penggunaan personal.
                                    <br />
                                    <br />
                                    <h4 className="font-bold">
                                        High Performance Cloud Hosting Bisnis
                                    </h4>
                                    <br />
                                    Productivity starts here! Berikan Hosting
                                    terbaik untuk bisnis Anda. Kinerja lebih
                                    produktif dengan performa tinggi & optimal
                                    untuk website profesional perusahaan,
                                    e-commerce, startup bisnis, serta support
                                    Moodle--platform open source yang memudahkan
                                    sistem pembelajaran online
                                    <br />
                                    <br />
                                    <h4 className="font-bold">
                                        High Performance Cloud Hosting
                                        Enterprise
                                    </h4>
                                    <br />
                                    Nikmati versi terbaik dedicated hosting
                                    melalui paket HPCH Enterprise. Tampil lebih
                                    premium dengan resource dedicated hanya
                                    untuk 1 pengguna. Performa lebih stabil,
                                    bebas gangguan dari Cloud Hosting lainnya.
                                    More productivity, less drama
                                    <br />
                                    <br />
                                    <h4 className="font-bold">
                                        WordPress Hosting
                                    </h4>
                                    <br />
                                    Hosting khusus bagi Anda yang menggunakan
                                    CMS WordPress. Dilengkapi CloudPop untuk
                                    kinerja WordPress yang optimal.
                                    <br />
                                    WordPress Hosting Indonesia yang
                                    dioptimalkan dengan CloudPOP
                                    <br />
                                    <br />
                                    <h4 className="font-bold">
                                        Unlimited Hosting
                                    </h4>
                                    <br />
                                    Paket Unlimited Hosting Indonesia yang dapat
                                    diandalkan, tanpa batasan! Free Domain & SSL
                                    Certificate dengan Uptime Server 99,99%.
                                    <br />
                                    Didukung Website Builder dan Web Accelerator
                                    dengan Module LSAPI PRO + CRIU. Akses
                                    internasional ngebut, serta garansi 30 hari
                                    uang kembali.
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-black text-xl font-medium">
                                    Apa kelebihan dari cloud hosting Qwords?
                                </div>
                                <div className="collapse-content text-black">
                                    <p>
                                        Cloud hosting Qwords sudah dipercaya
                                        45,000+ pelanggan dari dalam dan luar
                                        negeri. Anda akan mendapatkan jaminan
                                        keamanan, Uptime 99.99%, dukungan teknis
                                        selama 24 jam, 7 hari melalui Live chat,
                                        Call Center, atau Support Ticket dan
                                        masih banyak lagi.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-black text-xl font-medium">
                                    Mengapa saya perlu web hosting?
                                </div>
                                <div className="collapse-content text-black">
                                    <p>
                                        Tanpa web hosting, Anda tidak bisa
                                        membuat website company profile, portal
                                        berita, blog pribadi, website toko
                                        online, atau jenis website lain yang
                                        bisa diakses secara online.
                                    </p>
                                    <br />
                                    <br />
                                    Penyedia layanan web hosting seperti
                                    Qwords.com membantu memastikan data-data dan
                                    file website Anda tetap aman serta responsif
                                    ketika diakses oleh pengguna secara online.
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-black text-xl font-medium">
                                    Bagaimana cara membeli hosting?
                                </div>
                                <div className="collapse-content text-black">
                                    <p>
                                        Kami memiliki panduan cara membeli
                                        hosting di Qwords sesuai kebutuhan
                                        dengan mudah yang dapat Anda akses
                                        selengkapnya{" "}
                                        <a href="https://qwords.com/blog/cara-membeli-hosting/"></a>
                                        . Beli hosting Indonesia di Qwords kini
                                        juga semakin mudah dengan adanya
                                        berbagai metode pembayaran
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-black text-xl font-medium">
                                    Apakah saya bisa transfer Hosting ke Qwords
                                    Cloud Web Hosting Indonesia?
                                </div>
                                <div className="collapse-content text-black">
                                    <p>
                                        Ya, Anda bisa melakukan transfer Hosting
                                        dari provider lain ke Qwords Cloud
                                        Hosting Indonesia. Caranya, silahkan
                                        lakukan pemesanan Cloud Hosting baru
                                        sesuai paket yang Anda inginkan,
                                        kemudian informasikan kebutuhan migrasi
                                        pada tim support kami, lalu proses
                                        migrasi akan dibantu hingga selesai.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section>
                <Contact />
            </section>
        </div>
      )}
    </div>
            <BackToTopButton />
        </main>
    );
};
export default Content;
