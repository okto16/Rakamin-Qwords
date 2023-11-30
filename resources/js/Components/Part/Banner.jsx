import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div
        data-aos="fade-down"
        data-aos-delay="100"
         className="bg-gradient-to-b from-orange-200 to-transparent">
            <div className="col-md-7 col-md-offset-0 text-left pl-6">
                <div className="display-t">
                    <div
                        className="display-t bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url(https://qwords.com/v2/wp-content/themes/qwords/assets/images/shapes/webp/main-bg.webp)",
                            backgroundPosition: "0px 0px",
                        }}
                    >
                        <div className="justify-center w-full h-full itens-center inline-flex">
                            <div className="flex-col justify-center items-start inline-flex">
                                <h1 className="mb-4 text-6xl font-black text-gray-900 dark:text-black phone:text-2xl tablet:text-3xl">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-amber-500 from-orange-600">
                                        Cloud Hosting Untuk
                                    </span>{" "}
                                    Kesuksesan Websitemu!
                                </h1>
                                <div className="text-black w-2/3 phone:text-xs tablet:text-sm text-xl mb-4 font-sans leading-8 phone:leading-3">
                                    Qwords menawarkan layanan Cloud
                                    Hosting yang Cepat, Aman, dan
                                    Dukungan 24 jam untuk memenuhi
                                    kebutuhan hosting Anda.
                                    Tersertifikasi ISO 27001 dengan Data
                                    Center Tier 3.
                                </div>
                                <div className="justify-center items-center inline-flex gap-5 tablet:mb-5 phone:mb-5">
                                    <div
                                        className="phone:w-24 tablet:w-32 tablet:h-8 phone:h-6 w-40 h-14 justify-center items-center flex"
                                        style={{
                                            gap: "13.18px",
                                        }}
                                    >
                                        <div
                                            className="phone:text-xs tablet:text-sm phone:font-light font-semibold text-sm"
                                            style={{
                                                color: "rgba(0, 0, 0, 0.80)",
                                                fontFamily: "Inter",
                                                wordWrap: "break-word",
                                            }}
                                        >
                                            <button className="phone:p-1  tablet:p-1 buttonget tablet:text-ms">
                                                {" "}
                                                <a href="">
                                                    Cek Domain Dulu
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="phone:w-38 phone:h-8 w-40 h-14 justify-center items-center flex">
                                        <div
                                            className="phone:text-xs tablet:text-sm phone:font-light font-semibold text-sm"
                                            style={{
                                                fontFamily: "Inter",
                                                wordWrap: "break-word",
                                            }}
                                        >
                                            <button className="phone:p-1  tablet:p-4 buttonpack">
                                                <a href="#package">
                                                    View Packages{" "}
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <h2 className="text-black">
                                        Terdaftar di PSE, ICANN dan
                                        Partner Lainnya
                                    </h2>
                                    <div className="flex items-center">
                                        <img
                                            data-lazyloaded="1"
                                            data-placeholder-resp="100%x100%"
                                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/code.webp"
                                            loading="lazy"
                                            data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/code.webp"
                                            width="70px"
                                            height="70px"
                                            alt="code.webp"
                                            data-ll-status="loaded"
                                            className="entered litespeed-loaded"
                                        />
                                        <img
                                            data-lazyloaded="1"
                                            data-placeholder-resp="100%x100%"
                                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/icann-logo.webp"
                                            loading="lazy"
                                            data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/icann-logo.webp"
                                            alt="icann-logo.webp"
                                            data-ll-status="loaded"
                                            width="70px"
                                            height="70px"
                                            className="entered litespeed-loaded"
                                        ></img>
                                        <img
                                            data-lazyloaded="1"
                                            data-placeholder-resp="100pxx100px"
                                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/badge_litespeed.svg"
                                            loading="lazy"
                                            data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/badge_litespeed.svg"
                                            alt="badge_litespeed.svg"
                                            width="70px"
                                            height="70px"
                                            data-ll-status="loaded"
                                            className="entered litespeed-loaded"
                                        />
                                        <img
                                            data-lazyloaded="1"
                                            data-placeholder-resp="100pxx100px"
                                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/badge_whmadmin.svg"
                                            loading="lazy"
                                            data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/badge_whmadmin.svg"
                                            alt="badge_whmadmin.svg"
                                            width="70px"
                                            height="70px"
                                            data-ll-status="loaded"
                                            className="entered litespeed-loaded"
                                        ></img>
                                        <img
                                            data-lazyloaded="1"
                                            data-placeholder-resp="100%x100%"
                                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/acronis-cloud-tech.webp"
                                            loading="lazy"
                                            data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/acronis-cloud-tech.webp"
                                            alt="acronis-cloud-tech.webp"
                                            width="70px"
                                            height="70px"
                                            data-ll-status="loaded"
                                            className="entered litespeed-loaded"
                                        ></img>
                                        <img
                                            data-lazyloaded="1"
                                            data-placeholder-resp="100%x100%"
                                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/acronis-cloud-sales.webp"
                                            loading="lazy"
                                            data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/acronis-cloud-sales.webp"
                                            alt="acronis-cloud-sales.webp"
                                            width="70px"
                                            height="70px"
                                            data-ll-status="loaded"
                                            className="entered litespeed-loaded"
                                        ></img>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-aos="fade-down"
                                data-aos-delay="100"
                                className="relative w-full h-full tablet:w-full phone:w-full"
                            >
                                <img src="bg.png" alt="" />
                                <img
                                    src="casual-life.png"
                                    className="absolute bottom-6 w-full h-4/5 right-0"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
};
export default Banner;
