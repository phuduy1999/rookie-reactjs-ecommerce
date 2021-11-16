import {
  cibBitdefender,
  cibC,
  cibDynatrace,
  cibHackhands, cibSublimeText,
  cibTumblr, cilPeople, cilRectangle, cilSpeedometer,
  cilStar,
  cilStorage,
  cilUserFemale
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import React from 'react'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Form',
    id: 'nhap-lieu',
  },
  {
    component: CNavGroup,
    name: 'Categories',
    to: '/category',
    icon: <CIcon icon={cibHackhands} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List Categories',
        to: '/category/list-categories',
      },
      {
        component: CNavItem,
        name: 'Create Categories',
        to: '/category/create-categories',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Products',
    to: '/product',
    icon: <CIcon icon={cilUserFemale} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List Products',
        to: '/product/list-products',
      },
      {
        component: CNavItem,
        name: 'Create Product',
        to: '/product/create-products',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Account',
    id: 'tai-khoan'
  },
  {
    component: CNavItem,
    name: 'Login',
    to: '/login',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Register',
    to: '/register',
    icon: <CIcon icon={cilRectangle} customClassName="nav-icon" />
  },
]

export default _nav
