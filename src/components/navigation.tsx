/* eslint-disable  @typescript-eslint/no-explicit-any */

import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ReactNode } from 'react'
import { LogoutIcon } from 'app/svg/logout'
import { removeSessionToken } from 'app/utilities/session'
export interface MenuItemProps {
  icon?: ReactNode
  label: string
  className: string
  to: string
  template?: Element
  onClick?: () => void
  iconSize?: string
}
export const ItemRenderer = ({
  onClick = () => {},
  iconSize = 'h-8 w-8',
  className,
  ...item
}: MenuItemProps) => {
  const location = useLocation()
  const menuItemSelected = location.pathname === item.to

  return (
    <NavLink to={item.to} onClick={onClick}>
      <li className={`w-full ${className}`}>
        <div
          className={`py-2.7  text-sm ease-nav-brand my-0 mx-4  flex items-center whitespace-nowrap  ${
            menuItemSelected
              ? 'bg-secondary-950 rounded-lg text-white'
              : 'bg-primary-300 text-slate-700'
          } px-4 font-semibold   transition-colors`}
        >
          <div
            className={` bg-gradient-to-tl ${
              menuItemSelected
                ? 'from-primary to-white'
                : 'from-gray-100 to-gray-200'
            } shadow-soft-2xl ml-2 flex  ${iconSize}  items-center justify-center rounded-lg bg-primary-300 bg-center stroke-0 text-center `}
          >
            {item?.icon}
          </div>
          <span className="mr-1 duration-300 opacity-100 pointer-events-none ease-soft">
            {item?.label}
          </span>
        </div>
      </li>
    </NavLink>
  )
}

export const LogOut = () => {
  const navigation = useNavigate()
  return (
    <li
      className="w-full"
      onClick={() => {
        removeSessionToken()
        navigation('/')
      }}
    >
      <div
        className={`py-2.7  shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 font-semibold text-slate-700 transition-colors`}
      >
        <div
          className={` bg-gradient-to-tl cursor-pointer from-gray-100 to-gray-200 shadow-soft-2xl ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary-300 bg-center stroke-0 text-center `}
        >
          <LogoutIcon size={22} className="text-secondary" />
        </div>
        <span className="mr-1 cursor-pointer duration-300 opacity-100 pointer-events-none ease-soft">
          {'خروج'}
        </span>
      </div>
    </li>
  )
}

interface TabNavigationProps {
  icon?: ReactNode
  label: string
  className: string
  to: string
  template?: Element
  onClick?: () => void
}
export const TabNavigation = ({
  onClick = () => {},
  ...item
}: TabNavigationProps) => {
  const location = useLocation()
  const menuItemSelected = location.pathname === item.to

  return (
    <NavLink to={item.to} onClick={onClick} className={'w-[100%] h-[100%]'}>
      <li className=" w-[100%] h-[100%]">
        <div
          className={` h-[100%] w-[100%] justify-center  flex-col text-sm ease-nav-brand my-0   flex items-center whitespace-nowrap    font-semibold   transition-colors`}
        >
          <div
            className={` ${
              menuItemSelected
                ? ' animate-pulse scale-150 text-primary-300 fill-primary-300 stroke-primary-300'
                : 'text-white fill-white stroke-orange-50'
            } ${
              item.className
            }  flex h-[30px] w-[30px] items-center justify-center rounded-lg text-red bg-center  text-center `}
          >
            {item?.icon}
          </div>
          <span
            className={`${
              menuItemSelected ? 'hidden' : ''
            } duration-300  opacity-100 pointer-events-none ease-soft text-white`}
          >
            {item?.label}
          </span>
        </div>
      </li>
    </NavLink>
  )
}
