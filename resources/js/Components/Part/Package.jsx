import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Package = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section className="container-fluid">
        <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-price row justify-content-center"
            id="package"
        >
            <div className="col-start-2 col-span-4 text-center">
                <h1 className="h4title text-center text-5xl font-black">
                    Cloud Hosting Indonesia{" "}
                    <span className="text-qw-primary">
                        Diskon Hingga 50%
                    </span>
                </h1>
                <p className="pdescription text-center text-lg font-normal">
                    Layanan cloud hosting indonesia terbaik dengan
                    teknologi andal untuk website anda
                </p>
            </div>
        </div>
        <div className="bodycards">
            <article
                data-aos="fade"
                data-aos-delay="100"
                className="transition ease-in-out delay-150 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 card"
            >
                <h2>Value Cloud Hosting</h2>
                <h2 className="text-3xl font-extrabold">VCH1</h2>
                <span className="line-through text-base font-normal leading-tight text-gray-500">
                    <abbr>Rp</abbr> Rp 24.500
                </span>
                <span className="text-3xl font-semibold price">
                    <abbr>Rp</abbr> 14.500
                </span>
                <ul>
                    <li>
                        <svg
                            className="fill-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 24"
                            style={{ width: "12px", height: "24px" }}
                        >
                            <path d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"></path>
                        </svg>
                        <p>Disk</p>
                        <p className="font-bold">3 GB</p>
                    </li>
                    <li>
                        <svg
                            className="fill-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 24"
                            style={{ width: "12px", height: "24px" }}
                        >
                            <path d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"></path>
                        </svg>
                        <p>Bandwith</p>
                        <p className="font-bold">Unlimited</p>
                    </li>
                    <li>
                        <svg
                            className="fill-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 24"
                            style={{ width: "12px", height: "24px" }}
                        >
                            <path d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"></path>
                        </svg>
                        <p>Core CPU</p>
                        <p className="font-bold">0.5 Core</p>
                    </li>
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 24"
                            aria-label="cross"
                            role="presentation"
                            className="fill-red-600"
                            style={{ width: "12px", height: "24px" }}
                        >
                            <g data-v-575a134c="">
                                <path
                                    data-v-575a134c=""
                                    d="m11.807 16.415-1.395 1.392a.654.654 0 0 1-.927 0L6 14.324l-3.483 3.483a.657.657 0 0 1-.93 0L.193 16.415a.657.657 0 0 1 0-.93L3.675 12 .193 8.517a.662.662 0 0 1 0-.93l1.394-1.394a.657.657 0 0 1 .93 0L6 9.678l3.485-3.485a.654.654 0 0 1 .927 0l1.395 1.392a.662.662 0 0 1 .002.932L8.324 12l3.483 3.485a.657.657 0 0 1 0 .93Z"
                                ></path>
                            </g>
                        </svg>
                        <p>Parked domain</p>
                    </li>
                </ul>
                <button className="inline-flex px-3 py-2 text-sm font-medium text-center text-white bg-blue-200 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:hover:text-white ">
                    Pesan Sekarang
                </button>
            </article>

            <article
                data-aos="fade"
                data-aos-delay="300"
                className="transition ease-in-out delay-150 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 card"
            >
                <p className="text-white font-bold absolute top-0 bg-orange-400 w-full rounded-tl-full rounded-tr-full text-center">
                Best Offers!
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="absolute top-1 left-3 bi bi-star"
                        viewBox="0 0 16 16"
                    >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="absolute top-1 right-3 bi bi-star"
                        viewBox="0 0 16 16"
                    >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>{" "}
                </p>
                <h2>Unlimited Hosting</h2>
                <h2 className="text-3xl font-extrabold">Signature</h2>
                <span className="line-through text-base font-normal leading-tight text-gray-500">
                    <abbr>Rp</abbr>
                    109.000
                </span>
                <span className="text-3xl font-semibold price">
                    <abbr>Rp</abbr> 89.900
                </span>
                <ul>
                    <li>
                        <svg
                            className="fill-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 24"
                            style={{ width: "12px", height: "24px" }}
                        >
                            <path d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"></path>
                        </svg>
                        <p>Disk</p>
                        <p className="font-bold">Unlimited</p>
                    </li>
                    <li>
                        <svg
                            className="fill-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 24"
                            style={{ width: "12px", height: "24px" }}
                        >
                            <path d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"></path>
                        </svg>
                        <p>Bandwith</p>
                        <p className="font-bold">Unlimited</p>
                    </li>
                    <li>
                        <svg
                            className="fill-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 24"
                            style={{ width: "12px", height: "24px" }}
                        >
                            <path d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"></path>
                        </svg>
                        <p>Core CPU</p>
                        <p className="font-bold">1 Core</p>
                    </li>
                    <li>
                        <svg
                            className="fill-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 24"
                            style={{ width: "12px", height: "24px" }}
                        >
                            <path d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"></path>
                        </svg>
                        <p>Parked domain</p>
                        <p className="font-bold">5 / 5</p>
                    </li>
                </ul>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-200 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:hover:text-white ">
                    Pesan Sekarang
                </button>
            </article>

            <article
                data-aos="fade"
                data-aos-delay="500"
                className="transition ease-in-out delay-150 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 card"
            >
                <p className="text-white font-bold absolute top-0 bg-blue-400 w-full rounded-tl-full rounded-tr-full text-center">
                Penawaran Terbaik!{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="absolute top-1 left-3 bi bi-star"
                        viewBox="0 0 16 16"
                    >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="absolute top-1 right-3 bi bi-star"
                        viewBox="0 0 16 16"
                    >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>{" "}
                </p>
                <h2>Cloud VPS KVM SSD</h2>
                <h2 className="text-3xl font-extrabold">VPS SC1</h2>
                <span className="line-through text-base font-normal leading-tight text-gray-500">
                    <abbr>Rp</abbr>
                    135.000
                </span>
                <span className="text-3xl font-semibold price">
                    <abbr>Rp</abbr> 75.000
                </span>
                <ul>
                    <li>
                        <svg
                            className="fill-green-400"
                            url="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 24"
                            style={{ width: "12px", height: "24px" }}
                        >
                            <path d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"></path>
                        </svg>
                        <p>Disk</p>
                        <p className="font-bold">25 GB</p>
                    </li>
                    <li>
                        <svg
                            className="fill-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 24"
                            style={{ width: "12px", height: "24px" }}
                        >
                            <path d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"></path>
                        </svg>
                        <p>Bandwith</p>
                        <p className="font-bold">Unlimited</p>
                    </li>
                    <li>
                        <svg
                            className="fill-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 24"
                            style={{ width: "12px", height: "24px" }}
                        >
                            <path d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"></path>
                        </svg>
                        <p>Core CPU</p>
                        <p className="font-bold">1 Core</p>
                    </li>
                    <li>
                        <svg
                            className="fill-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 24"
                            style={{ width: "12px", height: "24px" }}
                        >
                            <path d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"></path>
                        </svg>
                        <p>Parked domain</p>
                        <p className="font-bold -mx-2">Unlimited</p>
                    </li>
                </ul>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-200 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-700  dark:hover:text-white dark:focus:ring-blue-800">
                    Pesan Sekarang
                </button>
            </article>

            <article
                data-aos="fade"
                data-aos-delay="700"
                className="transition ease-in-out delay-150 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 card"
            >
                <h2>High Performance</h2>
                <h2 className="text-3xl font-extrabold">
                    HPCH Bisnis 1
                </h2>
                <span className="line-through text-base font-normal leading-tight text-gray-500">
                    <abbr>Rp</abbr>
                    90.000
                </span>
                <span className="text-3xl font-semibold price">
                    <abbr>Rp</abbr> 79.000
                </span>
                <ul>
                    <li>
                        <svg
                            className="fill-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 24"
                            style={{ width: "12px", height: "24px" }}
                        >
                            <path d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"></path>
                        </svg>
                        <p>Disk</p>
                        <p className="font-bold">3 GB</p>
                    </li>
                    <li>
                        <svg
                            className="fill-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 24"
                            style={{ width: "12px", height: "24px" }}
                        >
                            <path d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"></path>
                        </svg>
                        <p>Bandwith</p>
                        <p className="font-bold">Unlimited</p>
                    </li>
                    <li>
                        <svg
                            className="fill-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 24"
                            style={{ width: "12px", height: "24px" }}
                        >
                            <path d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"></path>
                        </svg>
                        <p>Core CPU</p>
                        <p className="font-bold">1 Core</p>
                    </li>
                    <li>
                        <svg
                            className="fill-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 24"
                            style={{ width: "12px", height: "24px" }}
                        >
                            <path d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"></path>
                        </svg>
                        <p>Parked domain</p>
                        <p className="font-bold">-</p>
                    </li>
                </ul>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-200 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:hover:text-white ">
                    Pesan Sekarang
                </button>
            </article>
        </div>
    </section>
    );
};
export default Package;
