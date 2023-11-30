import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testi = () => {
    
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="container-fluid">
        <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex flex-wrap items-center justify-center"
        >
            <div className="text-black w-3/6 phone:w-full tablet:w-full text-center">
                <h2 className="font-black text-7xl phone:text-3xl tablet:text-3xl">
                    Apa Kata Mereka?
                </h2>
                <p>
                    Apa kata mereka yang sudah menggunakan layanan
                    web hosting Indonesia dari Qwords? Simak
                    pengalaman mereka yang telah membuktikan sendiri
                    fitur dari layanan kami.
                </p>
            </div>
        </div>

        <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="carousel w-full"
        >
            <article
                id="slide1"
                className="carousel-item active relative w-full h-1/6"
            >
                <div className="hero min-h-screen ">
                    <div className="hero-content rounded-lg bg-white flex-col lg:flex-row-reverse glass">
                        <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/testi1.webp" />
                        <div className="ml-5 text-black">
                            <h1 className="text-5xl font-bold phone:text-3xl tablet:text-3xl">
                                <img
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/shapes/cite.png"
                                    alt=""
                                    className="absolute left-0 phone:left-0 tablet:left-0"
                                    width={35}
                                    height={30}
                                />
                                Semoga Qwords dapat terus bertahan,
                                sehingga kami dan masyarakat
                                Indonesia bisa mendapatkan layanan
                                yang terbaik dari Qwords.
                            </h1>
                            <p className="py-6">
                                Kami, ID Cert, merupakan sebuah
                                perusahaan yang bergerak dalam
                                bidang penyedia jasa informasi
                                keamanan di Indonesia. Oleh karena
                                itu, kami membutuhkan Qwords untuk
                                mendukung kebutuhan kami terhadap
                                server dan hosting yang selalu up
                                selama 24 jam.
                            </p>
                            <div className="flex">
                                <h6 className="font-bold">
                                    Budi Raharjo{" "}
                                </h6>
                                <span className="ml-2">
                                    Founder ID Cert
                                </span>
                            </div>
                            <div className="text-qw-primary mt-2">
                                <a
                                    className="flex transition ease-in-out hover:text-sky-400"
                                    href="https://youtu.be/q2bJogin3eE"
                                >
                                    Lihat Video Selengkapnya
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
                                    ></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-ghost">
                        ❮
                    </a>
                    <a href="#slide2" className="btn btn-ghost">
                        ❯
                    </a>
                </div>
            </article>

            <article
                id="slide2"
                className="carousel-item relative w-full"
            >
                <div className="hero min-h-screen">
                    <div className="hero-content rounded-lg bg-white flex-col lg:flex-row-reverse glass">
                        <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/testi2.webp" />
                        <div className="ml-5 text-black">
                            <h1 className="text-5xl font-bold phone:text-3xl tablet:text-3xl">
                                <img
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/shapes/cite.png"
                                    alt=""
                                    className="absolute left-0 phone:left-0 tablet:left-0"
                                    width={35}
                                    height={30}
                                />
                                Pelayanan Qwords sangat cepat dan
                                responsif, sehingga tidak butuh
                                waktu lama untuk membantu website
                                kami kembali normal. Terbaik
                                pokoknya, mah!
                            </h1>
                            <p className="py-6">
                                Sebagai media penyedia kabar seputar
                                kota Bandung, Info BDG menggunakan
                                website sebagai rumah informasi.
                                Website kami yang sempat down kini
                                menunjukkan traffic yang tinggi
                                setelah menggunakan dukungan dari
                                Qwords.
                            </p>
                            <div className="flex">
                                <h6 className="font-bold">
                                    Kuns Kurniawan{" "}
                                </h6>
                                <span className="ml-2">
                                    PR Event Info BDG
                                </span>
                            </div>
                            <div className="text-qw-primary mt-2">
                                <a
                                    className="flex transition ease-in-out hover:text-sky-400"
                                    href="https://youtu.be/f15zt4C2e4A"
                                >
                                    Lihat Video Selengkapnya
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
                                    ></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-ghost">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-ghost">
                        ❯
                    </a>
                </div>
            </article>

            <article
                id="slide3"
                className="carousel-item relative w-full"
            >
                <div className="hero min-h-screen">
                    <div className="hero-content rounded-lg bg-white flex-col lg:flex-row-reverse glass">
                        <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/testi3.webp" />
                        <div className="ml-5 text-black">
                            <h1 className="text-5xl font-bold phone:text-3xl tablet:text-3xl">
                                <img
                                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/shapes/cite.png"
                                    alt=""
                                    className="absolute left-0 phone:left-0 tablet:left-0"
                                    width={35}
                                    height={30}
                                />
                                Hingga saat ini pula, kami tidak
                                pernah menemukan masalah yang
                                berarti dari layanan yang diberikan
                                Qwords. Layanan Customer Service
                                yang sangat baik, membuat kami tidak
                                ingin berpindah dari Qwords.
                            </h1>
                            <p className="py-6">
                                Penjualan Rumah Kopi Temanggung 90%
                                dilakukan secara online, salah
                                satunya menggunakan website.
                                Semenjak tahun 2015 hingga saat ini,
                                kami menggunakan hosting dan domain
                                dari Qwords.
                            </p>
                            <div className="flex">
                                <h6 className="font-bold">
                                    Denden Sofiudin
                                </h6>
                                <span className="ml-2">
                                    Owner Rumah Kopi temanggung
                                </span>
                            </div>
                            <div className="text-qw-primary mt-2">
                                <a
                                    className="flex transition ease-in-out hover:text-sky-400"
                                    href="https://youtu.be/ftJMF63RznM"
                                >
                                    Lihat Video Selengkapnya
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
                                    ></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-ghost">
                        ❮
                    </a>
                    <a href="#slide1" className="btn btn-ghost">
                        ❯
                    </a>
                </div>
            </article>
        </div>
    </div>
    );
};
export default Testi;
