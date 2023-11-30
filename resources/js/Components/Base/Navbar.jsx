import React, { useEffect, useState } from 'react';
import NavList from "@/Components/NavList";

const Navbar = () => {
    const CloudHostingList = [
        {
          href: 'https://qwords.com/v2/hosting-murah',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Value Cloud Hsting.webp',
          title: 'Value Cloud Hosting',
          description: 'Harga ekonomis dengan performa optimal',
        },
        {
          href: 'https://qwords.com/v2/business-cloud-hosting',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/High Performance Bisnis.webp',
          title: 'High Performance Bisnis',
          description: 'Untuk perusahaan, e-commerce, startup & website e-learning',
        },
        {
          href: 'https://qwords.com/v2/high-performance-cloud-hosting',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/High Peformance Enterprise.webp',
          title: 'High Performance Enterprise',
          description: 'Hosting dengan dedicated resource. Tanpa gangguan & batasan',
        },
        {
          href: 'https://qwords.com/v2/wordpress-hosting',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Wordpress Hosting.webp',
          title: 'WordPress Hosting',
          description: 'Hosting khusus bagi Anda yang menggunakan CMS WordPress',
        },
        {
          href: 'https://qwords.com/v2/unlimited-hosting',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Unlimited Hosting.webp',
          title: 'Unlimited Hosting',
          description: 'Hosting dengan Unlimited resource yang dapat diandalkan',
        },
        {
          href: 'https://qwords.com/v2/private-label-hosting-reseller',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Private Label cPanel Reseller.webp',
          title: 'Private Label cPanel Reseller',
          description: 'Bergabung dan mulai Bisnis Sukses bersama Qwords',
        },
      ];
      
    const ServerList = [
        {
          href: 'https://qwords.com/v2/vps-indonesia/cloud-vps-kvm-ssd',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/server/Cloud VPS KVM SSD.webp',
          title: 'Cloud VPS KVM SSD',
          description: 'KVM Ultrafast dengan Easy Install & OS terbaru',
        },
        {
          href: 'https://qwords.com/v2/dedicated-server/server-sekolah',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/server/Server Sekolah.webp',
          title: 'Server sekolah CBT/Moodle',
          description: 'Untuk kebutuhan e-learning, ujian sekolah, dsb',
        },
        {
          href: 'https://qwords.com/v2/dedicated-server/dedicated-box',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/server/Dedicated Server.webp',
          title: 'Dedicated Server',
          description: 'Multiple Internet Connection up to 10Gbps, Monitoring 24/7',
        },
        {
          href: 'https://qwords.com/v2/dedicated-server/colocation-server',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/server/Colocation Server.webp',
          title: 'Colocation Server',
          description: '99% Uptime Server, UPS Backup, On-Site & OffSite Monitoring',
        },
        {
          href: 'https://qwords.com/v2/dedicated-server/leased-to-owned-dedicated-server',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/server/Leased To Owned.webp',
          title: 'Leased To Owned Server',
          description: 'Sekarang sewa, Nanti jadi hak milik Anda!',
        },
        {
          href: 'https://fleksibel.com/',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/server/Fleksibel VPS.webp',
          title: 'Fleksibel VPS',
          description: 'KVM Pay as you Growth! Mulai Rp 200/jam',
        },
      ];
      
    const DomainList = [
        {
          href: 'https://qwords.com/v2/domain-name',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/domain/Daftar Domain.webp',
          title: 'Daftar Domain',
          description: 'Miliki Domain terbaik untuk identitas website Anda',
        },
        {
          href: 'https://qwords.com/v2/domain-premium-id',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/domain/Daftar Domain.webp',
          title: 'Domain Premium .id',
          description: 'Domain premium berkualitas untuk website Anda',
        },
        {
          href: 'https://qwords.com/v2/domain-backorder',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/domain/Daftar Domain.webp',
          title: 'Domain Backorder',
          description: 'Dapatkan Domain berkualitas yang tidak diperbarui pemiliknya',
        },
        {
          href: 'https://qwords.com/v2/domain-privacy-protection',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/domain/Daftar Domain.webp',
          title: 'Domain Privacy Protection',
          description: 'Lindungi data pribadi & rahasia Anda dari publik',
        },
        {
          href: 'https://qwords.com/v2/sewa-domain-domain-lease',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/domain/Daftar Domain.webp',
          title: 'Sewa Domain',
          description: 'Dapatkan Domain Premium tanpa bayar biaya penuh',
        },
        {
          href: 'https://qwords.com/v2/jual-beli-lelang-domain',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/domain/Daftar Domain.webp',
          title: 'Jual Beli & Lelang Domain',
          description: 'Untung berlipat dari Domain cantik dengan sistem lelang',
        },
        {
          href: 'https://qwords.com/v2/domain-broker-domain-negotiator',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/domain/Daftar Domain.webp',
          title: 'Domain Negotiator/Broker',
          description: 'Broker negosiasikan harga terbaik untuk Domain impian Anda',
        },
        {
          href: 'https://qwords.com/v2/private-label-domain-reseller',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/domain/Daftar Domain.webp',
          title: 'Private Label Domain Reseller',
          description: 'Paket Reseller Domain dengan harga yang bersaing',
        },
      ];
      
    const EmailSuiteList = [
        {
          href: 'https://qwords.com/v2/titan-email',
          iconSrc: 'https://www.qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/email suite/titanemail-icon.webp',
          title: 'Titan Email',
          description: 'Bisnis tampil profesional dengan email domain khusus dari Titan.',
        },
        {
          href: 'https://qwords.com/v2/eccs',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/email suite/EC Suite.webp',
          title: 'EC Collaboration Suite',
          description: 'Email premium dengan Kapasitas 25GB hingga 1000 akun.',
        },
        {
          href: 'https://qwords.com/v2/microsoft365',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/email suite/office365.webp',
          title: 'Microsoft 365',
          description: 'Untuk meningkatkan produktivitas kerja perusahaan Anda.',
        },
        {
          href: 'https://qwords.com/v2/google-workspace',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/email suite/google-workspace.webp',
          title: 'Google Workspace',
          description: 'Layanan Premium dari Google dengan Nama Domain Anda.',
        },
        {
          href: 'https://qwords.com/v2/mailtogo',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/email suite/Mailtogo.webp',
          title: 'Mailtogo',
          description: 'Marketing online lebih mudah dijalankan melalui MailToGo.',
        },
      ];      
    
    const ServicesList = [
        {
          href: 'https://qwords.com/v2/secured-sockets-layer-certificate',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/services/SSL.webp',
          title: 'SSL',
          description: 'Amankan komunikasi data anda',
        },
        {
          href: 'https://qwords.com/v2/advanced-backup',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/services/Advance Backup.webp',
          title: 'Advanced Backup',
          description: 'Advanced Backup berbasis Acronis',
        },
        {
          href: 'https://qwords.com/v2/services/extended-support',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/services/Extend Support.webp',
          title: 'Extended Support',
          description: 'Bantuan ekstra untuk akun Hosting Cpanel',
        },
        {
          href: 'https://qwords.com/v2/services/offline-backup',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/services/Offline Backup.webp',
          title: 'Offline Backup',
          description: 'Backup offline dari server anda',
        },
        {
          href: 'https://qwords.com/v2/licenses',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/services/License.webp',
          title: 'Licenses',
          description: 'Lisensi software bagi bisnis anda',
        },
        {
          href: 'https://qwords.com/v2/services/digital-signature',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/services/Digital Signature.webp',
          title: 'Digital Signature',
          description: 'Tandatangani dokumen online dengan mudah',
        },
        {
          href: 'https://qwords.com/v2/services/hosting-insurance',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/services/Hosting Insurance.webp',
          title: 'Hosting Insurance',
          description: 'Asuransi downtime untuk Hosting',
        },
        {
          href: 'https://qwords.com/v2/manage-the-box-dedicated-colocation-server',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/services/Box Server.webp',
          title: 'Manage The Box Server',
          description: 'Manage Service untuk mengatur Server Anda',
        },
        {
          href: 'https://qwords.com/v2/diego-vpn',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/services/VPN.webp',
          title: 'Diego VPN',
          description: 'Private Network yang aman, super cepat, dan easy to use',
        },
      ];
      
      const internetAccessList = [
        {
          href: 'https://qwords.com/v2/internet-rumah',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/internet access/Broadband Home.webp',
          title: 'Broadband Home',
          description: 'Internet untuk kebutuhan rumah/personal dengan koneksi stabil tanpa buffering hingga 1Gbps. Kuota Unlimited',
        },
        {
          href: 'https://qwords.com/v2/internet-bisnis',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/internet access/Broadband Business.webp',
          title: 'Broadband Bisnis',
          description: 'Jalankan bisnis bisa lebih fokus dengan jaringan internet cepat, koneksi stabil, dan aman',
        },
        {
          href: 'https://qwords.com/v2/internet-wireless',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/internet access/Broadband Wireless.webp',
          title: 'VBroadband Wireless',
          description: 'Internet dengan teknologi wireless super cepat, bebas FUP untuk kebutuhan rumah & bisnis.',
        },
        {
          href: 'https://qwords.com/v2/check-coverage',
          iconSrc: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/internet access/Check Coverage.webp',
          title: 'Check Coverage',
          description: 'Mau pasang internet? Cek jangkauan internet Broadband Qwords di area rumah Anda.',
        },
      ];
      
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.pageYOffset;
          if (scrollPosition > 0) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
    return (
        <nav className={`z-50 bg-gradient-to-b from-white-50 to-transparent dark:from-white-900 fixed navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar fixed top-0 left-0 z-50">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
                    >
                        <li>
                            <details>
                                <summary className="md:w-auto phone:w-auto text-black">
                                    Cloud Hosting
                                </summary>
                                <NavList
                                items={CloudHostingList}
                                className="bg-base-100 ms-24 w-72 grid grid-cols-2"
                                style={{ width: "24rem"}}
                                    />
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary className="md:w-auto sm:w-auto text-black">
                                    Server
                                </summary>
                                <NavList
                                items={ServerList}
                                className="bg-base-100 ms-24 w-72 grid grid-cols-2"
                                style={{ width: "24rem"}}
                                    />
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary className="md:w-auto sm:w-auto text-black">
                                    Domain
                                </summary>
                                <NavList
                                items={DomainList}
                                className="bg-base-100 ms-24 w-72 grid grid-cols-2"
                                style={{ width: "24rem"}}
                                    />
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary className="md:w-auto sm:w-auto text-black">
                                    Email Suite
                                </summary>
                                <NavList
                                items={EmailSuiteList}
                                className="bg-base-100 ms-24 w-72 grid grid-cols-2"
                                style={{ width: "24rem"}}
                                    />
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary className="md:w-auto sm:w-auto text-black">
                                    Services
                                </summary>
                                <NavList
                                items={ServicesList}
                                className="bg-base-100 ms-24 w-72 -top-20 grid grid-cols-2"
                                style={{ width: "24rem"}}
                                    />
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary className="md:w-auto sm:w-10 text-black ">
                                    Internet Access
                                </summary>
                                <NavList
                                items={internetAccessList}
                                className="bg-base-100 ms-24 w-72 grid grid-cols-2"
                                style={{ width: "24rem"}}
                                    />
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 relative -top-4 left-9 tablet:top-0 tablet:left-0 phone:left-0 phone:top-0">
                    <a href="#">
                        {" "}
                        <img
                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/logo-qw-light.webp"
                            width="110px"
                            height="70px"
                            className="h-10 mr-112 flex max-w-xs tablet:w-16 tablet:h-8"
                            alt="Qwords Logo"
                        />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary className="md:w-auto sm:w-auto text-black font-black text-base">
                                    Cloud Hosting
                                </summary>
                                <NavList
                                items={ServerList}
                                className="bg-base-100 ms-24 w-72 grid grid-cols-2"
                                style={{ width: "30rem", left: "-223px" }}
                                    />
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary className="md:w-auto text-black font-black text-base">
                                    Server
                                </summary>
                                <NavList
                                items={ServerList}
                                className="bg-base-100 ms-24 w-72 grid grid-cols-2"
                                style={{ width: "30rem", left: "-223px" }}
                                    />
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary className="md:w-auto text-black font-black text-base">
                                    Domain
                                </summary>
                                <NavList
                                items={DomainList}
                                className="bg-base-100 ms-24 w-72 grid grid-cols-2"
                                style={{ width: "30rem", left: "-223px" }}
                                    />
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary className="md:w-auto text-black font-black text-base">
                                    Email Suite
                                </summary>
                                <NavList
                                items={EmailSuiteList}
                                className="bg-base-100 ms-24 w-72 grid grid-cols-2"
                                style={{ width: "30rem", left: "-223px" }}
                                    />
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary className="md:w-auto text-black font-black text-base">
                                    Services
                                </summary>
                                <NavList
                                items={ServicesList}
                                className="bg-base-100 ms-24 w-72 grid grid-cols-2"
                                style={{ width: "30rem", left: "-223px" }}
                                    />
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary className="md:w-auto text-black font-black text-base">
                                    Internet Access
                                </summary>
                                <NavList
                                items={internetAccessList}
                                className="bg-base-100 ms-24 w-72 grid grid-cols-2"
                                style={{ width: "30rem", left: "-223px" }}
                                    />
                            </details>
                        </li>
                        <li className="ms-3 me-1 md:w-auto text-black font-black text-base">
              <a href="#">
                🎁 Promo
              </a>
            </li>

                        <div
                            data-dropdown-toggle="dropdownNavbar7"
                            className="flex items-center max-w-xs top-3 right-1px bg-ghost"
                            role="alert"
                        ></div>
                    </ul>
                </div>
                <button className="button" aria-expanded="false">
                    <span className="button-content">Login</span>
                </button>
                <button className="button" aria-expanded="false">
                    <span className="button-content">Daftar</span>
                </button>
            </div>
        </nav>
    );
};
export default Navbar;
