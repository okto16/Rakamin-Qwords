@section('navbar')
<nav class="navbar item justify-content-center bg-transparent">
  <div class="relaive">
  <div class="fixed inset-x-0 top-0 h-16 max-w-screen-xl flex flex-wrap navbar item mx-auto px-4 py-2.5">
    <a href="#" class="flex navbar item">
        <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/logo-qw-light.webp" width="140px" height="55px" class="h-30 mr-12 flex navbar item max-w-xs top-3 left-5" alt="Qwords Logo" />
    </a>
    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex navbar item p-2 ml-3 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul class="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm  md:border-0 md:bg-trans dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-trans dark:focus:text-trans dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Cloud Hosting <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg></button>
              <!-- Dropdown menu -->
              <div id="dropdownNavbar" class="z-1 wide_grid hidden font-normal bg-trans divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                      <div class="row_flex">
                          <div class="col-lg-6">
                              <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-trans dark:focus:ring-gray-500 dark:focus:text-trans">
                                  <img class="w-8 h-8 mr-2.5" aria-hidden="true" src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Value Cloud Hsting.webp" fill="currentColor" viewBox="0 0 20 20">
                                  <div class="navbar_content">
                                      <p class="navbar_title">Value Cloud Hosting</p>
                                      <p class="navbar_description">Harga ekonomis dengan performa optimal</p>
                                  </div>
                              </button>
                          </div>
                          <div class="col-lg-6">
                              <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-trans dark:focus:ring-gray-500 dark:focus:text-trans">
                                  <img class="w-8 h-8 mr-2.5" aria-hidden="true" src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Value Cloud Hsting.webp" fill="currentColor" viewBox="0 0 20 20">
                                  <div class="navbar_content">
                                      <p class="navbar_title">High Performance Bisnis</p>
                                      <p class="navbar_description">Untuk perusahaan, e-commerce, startup & website e-learning</p>
                                  </div>
                              </button>
                          </div>
                          <div class="col-lg-6">
                              <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-trans dark:focus:ring-gray-500 dark:focus:text-trans">
                                  <img class="w-8 h-8 mr-2.5" aria-hidden="true" src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Value Cloud Hsting.webp" fill="currentColor" viewBox="0 0 20 20">
                                  <div class="navbar_content">
                                      <p class="navbar_title">Value Cloud Hosting</p>
                                      <p class="navbar_description">Harga ekonomis dengan performa optimal</p>
                                  </div>
                              </button>
                          </div>
                      </div>
                  </ul>
              </div>
          </li>
          <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar2" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-trans dark:focus:text-trans dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Server <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg></button>
              <!-- Dropdown menu -->
              <div id="dropdownNavbar2" class="wide_grid hidden font-normal bg-trans divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                      <div class="row_flex">
                          <div class="col-lg-6">
                              <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-trans dark:focus:ring-gray-500 dark:focus:text-trans">
                                  <img class="w-8 h-8 mr-2.5" aria-hidden="true" src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Value Cloud Hsting.webp" fill="currentColor" viewBox="0 0 20 20">
                                  <div class="navbar_content">
                                      <p class="navbar_title">Cloud VPS KVM SSD</p>
                                      <p class="navbar_description">Harga ekonomis dengan performa optimal</p>
                                  </div>
                              </button>
                          </div>
                          <div class="col-lg-6">
                              <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-trans dark:focus:ring-gray-500 dark:focus:text-trans">
                                  <img class="w-8 h-8 mr-2.5" aria-hidden="true" src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Value Cloud Hsting.webp" fill="currentColor" viewBox="0 0 20 20">
                                  <div class="navbar_content">
                                      <p class="navbar_title">High Performance Bisnis</p>
                                      <p class="navbar_description">Untuk perusahaan, e-commerce, startup & website e-learning</p>
                                  </div>
                              </button>
                          </div>
                          <div class="col-lg-6">
                              <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-trans dark:focus:ring-gray-500 dark:focus:text-trans">
                                  <img class="w-8 h-8 mr-2.5" aria-hidden="true" src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Value Cloud Hsting.webp" fill="currentColor" viewBox="0 0 20 20">
                                  <div class="navbar_content">
                                      <p class="navbar_title">Cloud Hosting</p>
                                      <p class="navbar_description">Harga ekonomis dengan performa optimal</p>
                                  </div>
                              </button>
                          </div>
                      </div>
                  </ul>
              </div>
          </li>
          <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar3" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-trans dark:focus:text-trans dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Domain <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg></button>
              <!-- Dropdown menu -->
              <div id="dropdownNavbar3" class="wide_grid hidden font-normal bg-trans divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                      <div class="row_flex">
                          <div class="col-lg-6">
                              <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-trans dark:focus:ring-gray-500 dark:focus:text-trans">
                                  <img class="w-8 h-8 mr-2.5" aria-hidden="true" src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Value Cloud Hsting.webp" fill="currentColor" viewBox="0 0 20 20">
                                  <div class="navbar_content">
                                      <p class="navbar_title">Daftar Domain</p>
                                      <p class="navbar_description">Miliki Domain terbaik untuk identitas website Anda</p>
                                  </div>
                              </button>
                          </div>
                          <div class="col-lg-6">
                              <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-trans dark:focus:ring-gray-500 dark:focus:text-trans">
                                  <img class="w-8 h-8 mr-2.5" aria-hidden="true" src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Value Cloud Hsting.webp" fill="currentColor" viewBox="0 0 20 20">
                                  <div class="navbar_content">
                                      <p class="navbar_title">High Performance Bisnis</p>
                                      <p class="navbar_description">Untuk perusahaan, e-commerce, startup & website e-learning</p>
                                  </div>
                              </button>
                          </div>
                          <div class="col-lg-6">
                              <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-trans dark:focus:ring-gray-500 dark:focus:text-trans">
                                  <img class="w-8 h-8 mr-2.5" aria-hidden="true" src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Value Cloud Hsting.webp" fill="currentColor" viewBox="0 0 20 20">
                                  <div class="navbar_content">
                                      <p class="navbar_title">Cloud Hosting</p>
                                      <p class="navbar_description">Harga ekonomis dengan performa optimal</p>
                                  </div>
                              </button>
                          </div>
                      </div>
                  </ul>
              </div>
          </li>
          <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar4" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-trans dark:focus:text-trans dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Email Suite <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg></button>
              <!-- Dropdown menu -->
              <div id="dropdownNavbar4" class="wide_grid hidden font-normal bg-trans divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                      <div class="row_flex">
                          <div class="col-lg-6">
                              <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-trans dark:focus:ring-gray-500 dark:focus:text-trans">
                                  <img class="w-8 h-8 mr-2.5" aria-hidden="true" src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Value Cloud Hsting.webp" fill="currentColor" viewBox="0 0 20 20">
                                  <div class="navbar_content">
                                      <p class="navbar_title">Cloud VPS KVM SSD</p>
                                      <p class="navbar_description">Harga ekonomis dengan performa optimal</p>
                                  </div>
                              </button>
                          </div>
                          <div class="col-lg-6">
                              <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-trans dark:focus:ring-gray-500 dark:focus:text-trans">
                                  <img class="w-8 h-8 mr-2.5" aria-hidden="true" src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Value Cloud Hsting.webp" fill="currentColor" viewBox="0 0 20 20">
                                  <div class="navbar_content">
                                      <p class="navbar_title">High Performance Bisnis</p>
                                      <p class="navbar_description">Untuk perusahaan, e-commerce, startup & website e-learning</p>
                                  </div>
                              </button>
                          </div>
                          <div class="col-lg-6">
                              <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-trans dark:focus:ring-gray-500 dark:focus:text-trans">
                                  <img class="w-8 h-8 mr-2.5" aria-hidden="true" src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Value Cloud Hsting.webp" fill="currentColor" viewBox="0 0 20 20">
                                  <div class="navbar_content">
                                      <p class="navbar_title">Cloud Hosting</p>
                                      <p class="navbar_description">Harga ekonomis dengan performa optimal</p>
                                  </div>
                              </button>
                          </div>
                      </div>
                  </ul>
              </div>
          </li>
          <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar5" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-trans dark:focus:text-trans dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Services <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg></button>
              <!-- Dropdown menu -->
              <div id="dropdownNavbar5" class="wide_grid hidden font-normal bg-trans divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                      <div class="row_flex">
                          <div class="col-lg-6">
                              <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-trans dark:focus:ring-gray-500 dark:focus:text-trans">
                                  <img class="w-8 h-8 mr-2.5" aria-hidden="true" src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Value Cloud Hsting.webp" fill="currentColor" viewBox="0 0 20 20">
                                  <div class="navbar_content">
                                      <p class="navbar_title">Cloud VPS KVM SSD</p>
                                      <p class="navbar_description">Harga ekonomis dengan performa optimal</p>
                                  </div>
                              </button>
                          </div>
                          <div class="col-lg-6">
                              <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-trans dark:focus:ring-gray-500 dark:focus:text-trans">
                                  <img class="w-8 h-8 mr-2.5" aria-hidden="true" src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Value Cloud Hsting.webp" fill="currentColor" viewBox="0 0 20 20">
                                  <div class="navbar_content">
                                      <p class="navbar_title">High Performance Bisnis</p>
                                      <p class="navbar_description">Untuk perusahaan, e-commerce, startup & website e-learning</p>
                                  </div>
                              </button>
                          </div>
                          <div class="col-lg-6">
                              <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-trans dark:focus:ring-gray-500 dark:focus:text-trans">
                                  <img class="w-8 h-8 mr-2.5" aria-hidden="true" src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Value Cloud Hsting.webp" fill="currentColor" viewBox="0 0 20 20">
                                  <div class="navbar_content">
                                      <p class="navbar_title">Cloud Hosting</p>
                                      <p class="navbar_description">Harga ekonomis dengan performa optimal</p>
                                  </div>
                              </button>
                          </div>
                      </div>
                  </ul>
              </div>
          </li>
          <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar6" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-trans dark:focus:text-trans dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Internet Access <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg></button>
              <!-- Dropdown menu -->
              <div id="dropdownNavbar6" class="wide_grid hidden font-normal bg-trans divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                      <div class="row_flex">
                          <div class="col-lg-6">
                              <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-trans dark:focus:ring-gray-500 dark:focus:text-trans">
                                  <img class="w-8 h-8 mr-2.5" aria-hidden="true" src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Value Cloud Hsting.webp" fill="currentColor" viewBox="0 0 20 20">
                                  <div class="navbar_content">
                                      <p class="navbar_title">Cloud VPS KVM SSD</p>
                                      <p class="navbar_description">Harga ekonomis dengan performa optimal</p>
                                  </div>
                              </button>
                          </div>
                          <div class="col-lg-6">
                              <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-trans dark:focus:ring-gray-500 dark:focus:text-trans">
                                  <img class="w-8 h-8 mr-2.5" aria-hidden="true" src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Value Cloud Hsting.webp" fill="currentColor" viewBox="0 0 20 20">
                                  <div class="navbar_content">
                                      <p class="navbar_title">High Performance Bisnis</p>
                                      <p class="navbar_description">Untuk perusahaan, e-commerce, startup & website e-learning</p>
                                  </div>
                              </button>
                          </div>
                          <div class="col-lg-6">
                              <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-trans dark:focus:ring-gray-500 dark:focus:text-trans">
                                  <img class="w-8 h-8 mr-2.5" aria-hidden="true" src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/menu/cloud hosting/Value Cloud Hsting.webp" fill="currentColor" viewBox="0 0 20 20">
                                  <div class="navbar_content">
                                      <p class="navbar_title">Cloud Hosting</p>
                                      <p class="navbar_description">Harga ekonomis dengan performa optimal</p>
                                  </div>
                              </button>
                          </div>
                      </div>
                  </ul>
              </div>
          </li>
          <div  data-dropdown-toggle="dropdownNavbar7" class="flex items-center max-w-xs top-3 right-1px " role="alert">
              <button class="button" aria-expanded="false">
                  <span class="button-content">Login</span>
              </button>
          </div>
      </ul>
    </div>
  </div>
</div>
</nav>
@endsection