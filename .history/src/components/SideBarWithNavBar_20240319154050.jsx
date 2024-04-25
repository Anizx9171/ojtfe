function SideBarWithNavBar() {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/59c9cc7b9e3c0a15faf3726d03160f64e867f6ea2e781a061dedf62d0d479699?apiKey=a365ccf4d9914ba4a3de4c73152edf03&"
                  className="h-12 me-3"
                />
              </a>
            </div>

            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div className="flex gap-4 justify-center self-stretch">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c4a1e084a5788c6383f25b7f8a12e3bd99a19ba82178c8833a5ac12b8f58a6f?apiKey=a365ccf4d9914ba4a3de4c73152edf03&"
                    alt="User avatar"
                    className="shrink-0 aspect-square w-[45px]"
                  />
                  {/* <span className="sr-only">Open user menu</span> */}
                  <div className="flex flex-col">
                    <div className="text-base leading-7 text-slate-800">
                      Nguyen Van A
                    </div>
                    <div className="text-sm leading-4 text-gray-400">
                      Teacher Assistant
                    </div>
                  </div>
                </div>
                {/* <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown-user"
            >
              <div className="px-4 py-3" role="none">
                <p
                  className="text-sm text-gray-900 dark:text-white"
                  role="none"
                >
                  Neil Sims
                </p>
                <p
                  className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                  role="none"
                >
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul className="py-1" role="none">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div className="flex gap-2.5 justify-center  py-2 text-base leading-7 text-black">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/509e127c71df7844469f6fce39664398dc14031319d76f52ddc29cce579b46bd?apiKey=a365ccf4d9914ba4a3de4c73152edf03&"
                    alt=""
                    className="shrink-0 my-auto w-6 aspect-square"
                  />
                  <div className="flex-auto">Quản lý sinh viên</div>
                </div>
              </a>
            </li>



            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div className="flex gap-2.5 justify-center  py-2 text-base leading-7 text-black">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/509e127c71df7844469f6fce39664398dc14031319d76f52ddc29cce579b46bd?apiKey=a365ccf4d9914ba4a3de4c73152edf03&"
                    alt=""
                    className="shrink-0 my-auto w-6 aspect-square"
                  />
                  <div className="flex-auto">Quản lý sinh viên</div>
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div className="flex gap-2.5 justify-center  py-2 text-base leading-7 text-black">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/509e127c71df7844469f6fce39664398dc14031319d76f52ddc29cce579b46bd?apiKey=a365ccf4d9914ba4a3de4c73152edf03&"
                    alt=""
                    className="shrink-0 my-auto w-6 aspect-square"
                  />
                  <div className="flex-auto">Quản lý lớp học</div>
                </div>
              </a>
            </li>



            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div className="flex gap-2.5 justify-center  py-2 text-base leading-7 text-black">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/509e127c71df7844469f6fce39664398dc14031319d76f52ddc29cce579b46bd?apiKey=a365ccf4d9914ba4a3de4c73152edf03&"
                    alt=""
                    className="shrink-0 my-auto w-6 aspect-square"
                  />
                  <div className="flex-auto">Quản lý sinh viê</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64"></div>
    </>
  );
}

export default SideBarWithNavBar;
