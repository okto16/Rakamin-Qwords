import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DomainChecker = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="fade-up" className="container-fluid">
        <div className="background h-full w-full">
            <div className="bg-[url('https://qwords.com/v2/wp-content/themes/qwords/assets/images/shapes/search-domain-bg.png')] tablet:flex-wrap phone:flex-wrap flex gap-4 pl-6 py-9 ">
                <div className="font-semibold text-white justify-center text-left w-full gap-4">
                    <p className="tablet:text-3xl phone:text-2xl text-5xl mb-3">
                        Cari Nama Domainmu
                    </p>
                    <p className="w-5/6 text-xl tablet:text-sm phone:text-ms  leading-8">
                        <span>
                            {" "}
                            Nama Domain digunakan untuk mempermudah
                            pengunjung menuju ke situs Anda. Pilih
                            nama domain yang paling mencerminkan
                            bisnis, produk, atau layanan Anda.
                        </span>
                        <br />
                        <span>
                            {" "}
                            Get your perfect domain starting from Rp
                            77.000.
                        </span>
                    </p>
                </div>
                <div className="py-10 tablet:py-0 phone:py-0">
                    <form>
                        <div className="flex inline-block align-middle h-20 tablet:h-12 phone:h-12">
                            <div className="stats shadow rounded-full bg-white ">
                                <div className="stat tablet:p-0 phone:p-0">
                                    <input
                                        type="text"
                                        placeholder="Cari nama domain Anda"
                                        className="input  bg-transparent border-transparent"
                                    />
                                </div>
                                <div className="stat tablet:p-0 phone:p-0">
                                    <select className="align-middle select bg-transparent border-transparent">
                                        <option
                                            disabled
                                            defaultValue
                                        >
                                            Pilih domain
                                        </option>
                                        <option>.com</option>
                                        <option>.id</option>
                                        <option>.info</option>
                                    </select>
                                </div>
                                <div className="stat tablet:p-0 phone:p-0">
                                    <button
                                        className="p-0.5 mb-1 mr-0 text-sm font-medium text-gray-900 group bg-gradient-to-br from-pink-500 to-orange-400 rounded-full align-bottom tablet:mt-1 phone:mt-1
                                    tablet:mr-1
                                    phone:mr-1 tablet:p-0 phone:p-0"
                                    >
                                        <div className="px-8 py-2.5 tablet:px-6 phone:py-0 text-center mr-0 mb-0 ">
                                            Cari
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex text-white justify-center  font-semibold text-xl">
                            <h2>
                                .com Rp 165.000 .id Rp 225.000 .info
                                Rp 77.000
                            </h2>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};
export default DomainChecker;
