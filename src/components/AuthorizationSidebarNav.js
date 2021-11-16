import { useHistory } from "react-router";
import InfoUserLogin from 'src/_infoUser';

export default function authorizationSidebarNav() {
  let toArr = []; // items
  let idArr = []; // titles

  const user = InfoUserLogin();
  if (user && user.accessToken) {
    if (user.roles.some(() => "ROLE_EMPLOYEE")) {
      idArr = ['nhap-lieu']
      toArr = ['/category', '/product', '/product/list-products', '/product/create-products', '/category/list-categories', '/category/create-categories'];
    }
    else if (user.roles.some(() => "ROLE_CUSTOMER")) {
      idArr = ['soan-cht', 'dk-thi']
      toArr = ['/dashboard', '/bode', '/loaicauhoi', '/dangky', '/lopmonhoc/ds-lopmonhoc'];
    }
    else if (user.MANQ === 'SV') {
      const history = useHistory();
      history.push('/500');
    }
  } else {
    idArr = ['tai-khoan']
    toArr = ['/login', '/register'];
  }

  return { idArr, toArr };
}
