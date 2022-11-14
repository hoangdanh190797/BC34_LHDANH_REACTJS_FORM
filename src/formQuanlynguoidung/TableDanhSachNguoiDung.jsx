import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableDanhSachNguoiDung extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-12 p-2 bg-dark'>
          <span className='text-white font-bold'>Danh sách</span>
        </div>
        <div className='col-12'>
          <table className='table'>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tài khoản</th>
                <th>Họ tên</th>
                <th>Mật khẩu</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Loại người dùng</th>
                <th></th>
              </tr>

            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>cena</td>
                <td>john cena</td>
                <td>1234</td>
                <td>john@gmail.com</td>
                <td>0909090909</td>
                <td>Boss</td>
                <td>
                  <button className='btn btn-primary mx-2'>Sửa</button>
                  <button className='btn btn-danger'>Xóa</button>
                </td>
              </tr>
              {
                this.props.dsNhanVien.map((nhanVien, index) => {
                  return <tr>
                    <td>{index + 1}</td>
                    <td>{nhanVien.taiKhoan}</td>
                    <td>{nhanVien.hoTen}</td>
                    <td>{nhanVien.matKhau}</td>
                    <td>{nhanVien.email}</td>
                    <td>{nhanVien.soDienThoai}</td>
                    <td>{nhanVien.loaiNguoiDung}</td>
                    <td>
                      <button className='btn btn-primary mx-2' 
                      onClick={() => this.props.dispatch({
                        type: "LAY_NHAN_VIEN",
                        payload: nhanVien.taiKhoan
                      })}>Sửa</button>

                      <button className='btn btn-danger' onClick={() => this.props.dispatch({
                        type: "XOA_NHAN_VIEN",
                        payload: nhanVien.taiKhoan
                      })}>Xóa</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dsNhanVien: state.NhanVienReducer.dsNhanVien
  }
}

export default connect(mapStateToProps, null)(TableDanhSachNguoiDung)