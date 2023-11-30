import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="container-fluid mt-10 phone:mt-5 tablet:mt-5">
            <article
                data-aos="fade"
                data-aos-delay="100"
                className="bw-ads-banner py-9 px-5  glass rounded-lg bg-orange-500 text-white phone:px-3 phone:py-5 tablet:px-3 tablet:py-5"
            >
                <div className="flex justify-center flex-wrap">
                    <div>
                        <h4 className="font-bold text-5xl phone:text-3xl tablet:text-3xl">
                            Butuh
                            <span className="text-qw-primary"> Bantuan?</span>
                        </h4>
                        <p className="flex justify-center phone:text-sm tablet:text-sm">
                            Kami siap membantu anda 24 Jam
                        </p>
                    </div>
                </div>
                <div className="contact-list flex gap-2 align-center justify-start justify-md-start justify-center mt-3 mt-lg-5 px-3 phone:px-0 phone:flex-wrap tablet:flex-wrap tablet:px-0">
                    <a href="tel:+628041808888">
                        <div className="btn btn-outline btn-warning contact-col flex items-center mb-3">
                            <img
                                data-lazyloaded="1"
                                data-placeholder-resp="30pxx30px"
                                src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/phoneAlt.svg"
                                loading="lazy"
                                data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/phoneAlt.svg"
                                alt="phone.webp"
                                className="me-2 entered litespeed-loaded"
                                width="30px"
                                height="30px"
                                data-ll-status="loaded"
                            />
                            <p className="text-white mb-0 h6home">
                                0804-1-808-888
                            </p>
                        </div>
                    </a>
                    <a href="tel:02139708800">
                        <div className="btn btn-outline btn-warning contact-col flex items-center mb-3">
                            <img
                                data-lazyloaded="1"
                                data-placeholder-resp="30pxx30px"
                                src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/phoneAlt.svg"
                                loading="lazy"
                                data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/phoneAlt.svg"
                                alt="phone2.webp"
                                className="me-2 entered litespeed-loaded"
                                width="30px"
                                height="30px"
                                data-ll-status="loaded"
                            />
                            <p className="mb-0 text-white h6home">
                                021 39708800
                            </p>
                        </div>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=62817437111">
                        <div className="btn btn-outline btn-warning contact-col flex items-center mb-3">
                            <img
                                data-lazyloaded="1"
                                data-placeholder-resp="30pxx30px"
                                src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/waAlt.svg"
                                loading="lazy"
                                data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/waAlt.svg"
                                alt="Whatsapp.webp"
                                className="me-2 entered litespeed-loaded"
                                width="30px"
                                height="30px"
                                data-ll-status="loaded"
                            />
                            <p className="mb-0 text-white h6home">
                                +6281 7437 111 ( WhatsApp only )
                            </p>
                        </div>
                    </a>
                    <a href="mailto:info@qwords.com">
                        <div className="btn btn-outline btn-warning contact-col flex items-center mb-3">
                            <img
                                data-lazyloaded="1"
                                data-placeholder-resp="30pxx30px"
                                src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/emailAlt.svg"
                                loading="lazy"
                                data-src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/emailAlt.svg"
                                alt="Email.webp"
                                className="me-2 entered litespeed-loaded"
                                width="30px"
                                height="30px"
                                data-ll-status="loaded"
                            />
                            <p className="mb-0 text-white h6home">
                                info@qwords.com
                            </p>
                        </div>
                    </a>
                </div>
                <div className="flex mt-3 gap-5">
                    <div>
                        <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white text">
                            Kantor Surabaya
                        </h2>
                        <ul className="text-white font-medium">
                            <li>
                                <h2>
                                    Gedung Bursa Efek Indonesia Lt.10, Jl. Taman
                                    AIS Nasution No.21, Surabaya 60271 -
                                    Indonesia 031 30008800
                                </h2>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Kantor Yogyakarta
                        </h2>
                        <ul className="text-white font-medium">
                            <li>
                                <h2>
                                    Jl. Blotan no. 18 Kayen Wedomartani,
                                    Ngemplak, Sleman, Yogyakarta 55584 -
                                    Indonesia 0274 6058800
                                </h2>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Kantor Jakarta
                        </h2>
                        <ul className="text-white font-medium">
                            <li>
                                <h2>
                                    Gedung Cyber 1 Lantai 3, Jl.Kuningan Barat
                                    no.8, Jakarta 12710 - Indonesia 021 39708800
                                </h2>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Kantor Bandung
                        </h2>
                        <ul className="text-white font-medium">
                            <li>
                                <h2>
                                    Jl. Terusan Setra Indah I No.19, Sukagalih,
                                    Sukajadi, Bandung 40163 - Indonesia 022
                                    30508800
                                </h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
    );
};
export default Contact;
