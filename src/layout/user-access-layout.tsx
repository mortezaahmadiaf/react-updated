/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Outlet } from 'react-router-dom'
import { useRef, useState } from 'react'
import { HomeIcom } from 'app/svg/home'
import DateObject from 'react-date-object'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import { ItemRenderer, LogOut, MenuItemProps } from 'app/components/navigation'

import { MenuItem } from 'primereact/menuitem'
import { TieredMenu } from 'primereact/tieredmenu'

export const UserAccessLayout = () => {
  const menuItems: any = [
    {
      label: 'خانه',
      className: '',
      to: '/',
      icon: <HomeIcom size={22} />,
    },
  ].filter((item) => item)

  const [openMenuInMobile, setOpenMobileInMenu] = useState(false)
  const menu: any = useRef(null)

  const today = new DateObject({
    date: new Date(),
    format: 'dddd D MMMM YYYY',
    calendar: persian,
    locale: persian_fa,
  })

  const items: MenuItem[] = []

  return (
    <>
      <div
        className="m-0 font-sans antialiased font-normal text-base leading-default rtl   "
        style={{ minHeight: '100dvh', overflowY: 'auto' }}
      >
        {/* <!-- sidenav  --> */}

        <div
          onClick={() => {
            setOpenMobileInMenu(false)
          }}
          className={`transition-all absolute ${
            openMenuInMobile ? 'block z-50' : 'hidden'
          }  bg-black opacity-80 w-screen h-screen lg:hidden `}
        ></div>
        <aside
          className={` max-w-[250px] transition-all ease-nav-brand  fixed inset-y-0  mt-[4rem] bg-gradient-to-b from-[#176c9d] to-[#1999bf]   block w-full z-990  ${
            openMenuInMobile ? ' translate-s-0 ' : 'translate-s-full'
          } flex-wrap items-center justify-between overflow-y-auto   border-0 bg-primart p-0 antialiased  transition-transform duration-200  `}
        >
          {/* <div className="h-19.5"></div> */}

          {/* <!-- change h-sidenav-no-pro to h-sidenav when pro is up --> h-sidenav max-h-screen*/}
          <div className="items-center block w-auto  overflow-auto grow basis-full z-50 ">
            <ul className="flex flex-col pl-0 mb-0 mt-4">
              <li className={`w-full items-end flex lg:hidden`}>
                <div
                  className={` cursor-pointer   flex    items-center justify-start rounded-lg  bg-center stroke-0 text-center `}
                >
                  {/* <img
                    src={logo}
                    alt="logo"
                    className="w-[50px] bg-transparent "
                  /> */}
                </div>{' '}
                <strong className=" cursor-pointer  font-bold px-3 pb-2 text-secondary-950"></strong>
              </li>
              {menuItems.map((menuItem: MenuItemProps, i: number) => {
                return (
                  <ItemRenderer
                    onClick={() => {
                      if (openMenuInMobile) setOpenMobileInMenu(false)
                    }}
                    key={i}
                    {...menuItem}
                  />
                )
              })}
              <div className=" flex ">
                <LogOut />
              </div>
            </ul>
          </div>

          <div className="mx-4">
            {/* <!-- load phantom colors for card after: --> */}
          </div>
        </aside>

        {/* <!-- end sidenav --> */}

        <main className="fixed w-full h-[4rem]  z-99999 transition-all duration-200 bg-gradient-to-l from-[#176c9d] to-[#1999bf]  ">
          {/* <!-- Navbar --> */}
          <nav
            className="h-full bg-red-40 flex  flex-wrap items-center justify-between    transition-all duration-250 ease-soft-in  lg:flex-nowrap lg:justify-start"
            navbar-main="true"
            navbar-scroll="true"
          >
            <div className="flex items-center justify-between w-full mx-auto flex-wrap-inherit">
              <div className="flex items-center  justify-between grow sm:mt-0 md:mr-0 lg:flex lg:basis-auto">
                <div className="hidden w-0 lg:w-[250px] lg:flex items-center md:ml-auto  text-secondary-950 font-extrabold">
                  <div className=" mx-3 text-secondary-950 font-extrabold">
                    {/* <img
                      src={Logo}
                      className="w-[4rem] h-[4rem]"
                      alt="logo.jpg"
                    /> */}
                  </div>
                  <strong className=" font-bold "> </strong>
                </div>
                <ul className="flex flex-row justify-between  mb-0 ml-0 mr-auto list-none  w-full">
                  {/* <!-- online builder btn  --> */}
                  <div className="flex">
                    <li className="flex items-center px-4 lg:hidden">
                      <div
                        className="block p-0 transition-all ease-nav-brand text-sm text-slate-500"
                        // sidenav-trigger
                        onClick={() => {
                          setOpenMobileInMenu(!openMenuInMobile)
                        }}
                      >
                        <div className="w-[25px] overflow-hidden cursor-pointer">
                          <i className="ease-soft mb-1.5 relative block h-0.5 rounded-sm bg-blue-950 transition-all"></i>
                          <i className="ease-soft mb-1.5 relative block h-0.5 rounded-sm bg-blue-950 transition-all"></i>
                          <i className="ease-soft relative block h-0.5 rounded-sm bg-blue-950 transition-all"></i>
                        </div>
                      </div>
                    </li>
                    <li className="ms-2 lg:mx-2 flex justify-center items-center">
                      <small className="text-xs md:text-base lg:font-bold lg:text-lg ">
                        {today.format()}
                      </small>
                      <div className="mx-1 hidden md:flex text-xs md:text-base  lg:mx-2">
                        <small
                          className={`px-2 py-1.5 flex justify-center items-center  rounded-full  font-bold bg-white `}
                        >
                          <span className="relative flex h-3 w-3 mx-1 ">
                            <span
                              className={`animate-ping absolute inline-flex h-full w-full rounded-full  opacity-7`}
                            />
                            <span
                              className={`relative inline-flex rounded-full h-3 w-3 `}
                            />
                          </span>
                        </small>
                      </div>
                    </li>
                  </div>
                  <li className=" px-2 lg:px-8 lg:font-bold flex justify-center items-center">
                    <div className="text-sm md:text-base "></div>
                  </li>

                  <li className=" px-2 lg:px-8 lg:font-bold flex justify-center items-center">
                    <button
                      onClick={() => {
                        const html = document.documentElement
                        html.classList.toggle('dark') // Add or remove 'dark' class
                      }}
                      id="theme-toggle"
                      type="button"
                      className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                    >
                      mode
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* <!-- end Navbar --> */}
        </main>

        <div className={` layout flex-1 pt-[4.2rem] min-h-[100dvh] p-1`}>
          <Outlet />
        </div>
      </div>
      <TieredMenu model={items} popup ref={menu} className="w-auto" />
    </>
  )
}
