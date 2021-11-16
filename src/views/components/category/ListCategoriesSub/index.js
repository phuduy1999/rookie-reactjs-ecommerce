import { cilDelete, cilPenAlt } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CCard, CCardBody, CCardHeader, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CTooltip } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import categoryApi from 'src/api/categoryApi';
import AppModalCustom from 'src/components/AppModalCustom';
import AppModalCustomDelete from 'src/components/AppModalCustomDelete';

export default function index() {
  const { parentId } = useParams();
  const [ds, setDS] = useState([]);
  const [visible, setVisible] = useState(false)
  const [visibleCheck, setVisibleCheck] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [reload, setReload] = useState(false)
  const [mess, setMess] = useState('')
  const [messCheck, setMessCheck] = useState('')
  const pageRedirect = '/category/list-categories';

  const [idCanXoa, setIdCanXoa] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await categoryApi.getSub(parentId);
        setDS(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [reload])

  const handleClickXoa = (id) => {
    // khoaApi.checkFK(id)
    //   .then(response => {
    //     setVisibleCheck(!visibleCheck);
    //     setMessCheck(`xóa khoa có mã là ${id}`);
    //     setIdCanXoa(id);
    //   })
    //   .catch(error => {
    //     console.log(error.response);

    //     setVisible(!visible);
    //     setIsSuccess(false);
    //     setMess('Lỗi: ' + error.response.data.err)
    //   })
  }

  const handleClickAccept = () => {
    console.log(idCanXoa);
    setVisibleCheck(false);

    // khoaApi.deleteOne(idCanXoa)
    //   .then(response => {
    //     console.log(response);
    //     if (response.result === 0) {
    //       throw Error('không xóa được!');
    //     }

    //     setVisible(!visible);
    //     setIsSuccess(true);
    //     setReload(!reload);
    //     setMess('Xóa khoa thành công!')
    //   })
    //   .catch(error => {
    //     console.log(error.response);

    //     setVisible(!visible);
    //     setIsSuccess(false);
    //     setMess('Lỗi: ' + error.response.data.err)
    //   })
  }

  return (
    <CRow>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Categories</strong>
        </CCardHeader>
        <CCardBody>
          <CTable striped hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                <CTableHeaderCell scope="col">NAME</CTableHeaderCell>
                <CTableHeaderCell scope="col">Functional</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {ds && (ds.map((cate, idx) => (
                <CTableRow key={cate.id}>
                  <CTableHeaderCell scope="row">{idx + 1}</CTableHeaderCell>
                  <CTableDataCell>{cate.id}</CTableDataCell>
                  <CTableDataCell>{cate.name}</CTableDataCell>
                  <CTableDataCell>
                    <CTooltip content="Update" placement="left">
                      <Link to={`/category/update-categories/${cate.id}`}>
                        <CIcon icon={cilPenAlt} size='lg' />
                      </Link>
                    </CTooltip>
                    <span>   </span>
                    <CTooltip content="Delete" placement="right" className='me-3'>
                      <CIcon onClick={() => handleClickXoa(cate.id)}
                        icon={cilDelete} size='lg' />
                    </CTooltip>
                  </CTableDataCell>
                </CTableRow>
              )))}
              {ds.length === 0 &&
                <CTableRow >
                  <CTableHeaderCell colSpan="4">Empty!</CTableHeaderCell>
                </CTableRow>
              }
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
      <AppModalCustom visible={visible} handleSetVisible={() => { setVisible(false) }}
        mess={mess} isSuccess={isSuccess} pageRedirect={pageRedirect} />
      <AppModalCustomDelete visibleCheck={visibleCheck}
        handleSetVisibleCheck={() => { setVisibleCheck(false) }}
        mess={messCheck} handleClickAccept={handleClickAccept} />
    </CRow>
  )
}
