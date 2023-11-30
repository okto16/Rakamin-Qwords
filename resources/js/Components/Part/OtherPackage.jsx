import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OtherPackage = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
<section className="container-fluid">
<div
    data-aos="fade-up"
    data-aos-delay="100"
    className="text-price row justify-content-center"
>
    <div className="col-start-2 col-span-4 text-center">
        <h1 className="h4title text-center text-5xl font-black">
            Lihat Juga Layanan Kami Yang Lain
        </h1>
        <p className="pdescription text-center text-lg font-normal">
            Optimalkan performa website bisnis Anda dengan
            berbagai layanan berkualitas dari Qwords
        </p>
    </div>
</div>
<div className="bodycards">
    <article data-aos="fade" data-aos-delay="100">
        <div className="card adds w-full shadow-xl justify-center flex">
            <div className="">
                <div className="absolute -top-6 left-0 badge bg-gradient-to-tr to-transparent py-6 border-transparent badge-lg">
                    <img
                        src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/smallicons/ssl.webp"
                        alt=""
                    />
                </div>
                <h2 className="card-title mb-1">SSL</h2>
                <p className="font-normal text-gray-700 dark:text-gray-400 mb-1">
                    Jadikan website Anda lebih terpercaya dan
                    disukai oleh search engine dengan
                    menggunakan SSL Certificate. Mulai dari
                </p>
                <span className="text-3xl font-semibold price">
                    <abbr>Rp</abbr> 112.000
                    <small className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                        {" "}
                        / tahun
                    </small>
                </span>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-200 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:hover:text-white ">
                    Pesan Sekarang
                </button>
            </div>
        </div>
    </article>

    <article data-aos="fade" data-aos-delay="300">
        <div className="card adds w-full shadow-xl justify-center flex">
            <div className="">
                <div className="absolute -top-6 left-0 badge bg-gradient-to-tr to-transparent py-6 border-transparent badge-lg">
                    <img
                        src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/smallicons/dbstack.webp"
                        alt=""
                    />
                </div>
                <h2 className="card-title mb-3">
                    Dedicated Server
                </h2>
                <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
                    Nikmati kelola Dedicated Server sendiri
                    dengan akses remote dariseluruh dunia tanpa
                    batas. Mulai dari
                </p>
                <span className="text-3xl font-semibold price">
                    <abbr>Rp</abbr> 499.000
                    <small className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                        {" "}
                        / bulan
                    </small>
                </span>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-200 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:hover:text-white ">
                    Pesan Sekarang
                </button>
            </div>
        </div>
    </article>

    <article data-aos="fade" data-aos-delay="500">
        <div className="card adds w-full shadow-xl justify-center flex">
            <div className="">
                <div className="absolute -top-6 left-0 badge bg-gradient-to-tr to-transparent py-6 border-transparent badge-lg">
                    <img
                        src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/smallicons/disk.webp"
                        alt=""
                    />
                </div>
                <h2 className="card-title mb-1">
                    Colocation Server
                </h2>
                <p className="font-normal text-gray-700 dark:text-gray-400 mb-1">
                    Akses cepat dari seluruh dunia dengan
                    fasilitas 24x7 full monitoring dengan
                    cooling system terbaik serta fire
                    extinguisher. Mulai dari
                </p>
                <span className="text-3xl font-semibold price">
                    <abbr>Rp</abbr> 500.000
                    <small className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                        {" "}
                        / bulan
                    </small>
                </span>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-200 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:hover:text-white ">
                    Pesan Sekarang
                </button>
            </div>
        </div>
    </article>
</div>
</section>
    );
};
export default OtherPackage;