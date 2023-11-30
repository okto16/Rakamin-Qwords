import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
<footer  data-aos='fade-up' data-aos-delay='100' className="bg-white dark:bg-gray-900">
    <div className="w-full p-2 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 px-5 md:mb-0">

                  <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/logo-dark.webp" className="h-12 me-3" alt="" />
                  <h2 className=" text-sm font-semibold text-gray-900 uppercase dark:text-white">
							PT Qwords Company International
						</h2>
                  <ul className="w-10/12 text-gray-500 dark:text-gray-400 font-medium">
                      <li>
                          <h1>
							Cloud Web Hosting Indonesia. Domain & hosting terbaik dengan
							akses cepat yang didukung layanan support 24/7
						</h1>
                      </li>
                  </ul>
              <a href="https://www.bsigroup.com/en-ID/validate-bsi-issued-certificates/client-directory-certificate/IS%20776219" className="flex items-center">
                  <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/bsi.webp" className="h-12" alt="" />
              </a>
              <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Customer Care</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li>
                          <a href="https://flowbite.com/" className="hover:underline">Pembayaran</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Bantuan 24 jam</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Qwords Rewards</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Knowledge Base</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Blog</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">FAQ</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Kontak</a>
                      </li>
                    
                  </ul>
          </div>
          <div className="grid gap-3 grid-cols-5">
              <div>
                  <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Mengenai Kami</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li>
                          <a href="https://flowbite.com/" className="hover:underline">Corporate Website</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Qwords History</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Qwords Differences</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Network & Infrastructure</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Partner</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Career & Employment</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">MSA/SLA/AUP</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li>
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Master Service Agreement</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Refund Policy</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Product Life Cycle Policy</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Penggunaan Merek dan Logo</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Migrasi Ke Qwords</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Layanan Lainnya</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li>
                          <a href="#" className="hover:underline">Extended Support</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Manage The Box Server</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Flexi Main Domain</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">FTP Backup</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Offline Backup</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Hosting Insurance</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Software License</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Digital Signature</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Layanan Reseller</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li>
                          <a href="#" className="hover:underline">Afiliasi</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Qwords VIP Partner</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">FPrivate Label Hosting Reseller</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Private Label Domain Reseller</a>
                      </li> 
                  </ul>
              </div>
              <div>
                  <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Free Tools</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li>
                          <a href="#" className="hover:underline">Qwords Link-Q</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">MWhatsApp Link Generator</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Network Tools</a>
                      </li>
                  </ul>
              </div> 
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright © <a href="https://flowbite.com/" className="hover:underline"></a> PT. Qwords Company International
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0"> 
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <img loading="lazy" src="https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/Facebook.webp" alt="fb.webp" width="30px" height="30px"/>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <img loading="lazy" src="https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/Instagram.webp" alt="ig.webp" width="30px" height="30px"/>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <img loading="lazy" src="https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/Twitter.webp" alt="twt.webp" width="30px" height="30px"/>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <img loading="lazy" src="https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/Youtube.webp" alt="yt.webp" width="30px" height="30px"/>
              </a>
          </div>
      </div>
    </div>
</footer>
    );
};
export default Footer;
