const stateDefault = {
  isSignUp: true,
  dsNhanVien: [
    {
      taiKhoan: "123",
      hoTen: "a",
      matKhau: "a",
      soDienThoai: "a",
      email: "a",
      loaiNguoiDung: "0",
    },
    {
      taiKhoan: "1234",
      hoTen: "b",
      matKhau: "b",
      soDienThoai: "b",
      email: "b",
      loaiNguoiDung: "1",
    },
  ],
  nhanVienUpdate: "",
};
export const NhanVienReducer = (state = stateDefault, action) => {
  const { type, payload } = action;
  switch (type) {
    case "THEM_NHAN_VIEN": {
      const dsNhanVien = [...state.dsNhanVien];

      //kiểm tra tài khoản trùng nhau
      const nhanVienNew = dsNhanVien.find(
        (nhanVien) => nhanVien.taiKhoan == payload.nhanVien.taiKhoan
      );
      if (nhanVienNew) alert("tài khoản đã tồn tại !");
      else dsNhanVien.push(payload.nhanVien);

      return { ...state, dsNhanVien };
    }
    case "XOA_NHAN_VIEN": {
      let dsNhanVien = [...state.dsNhanVien];

      dsNhanVien = dsNhanVien.filter(
        (nhanVien) => nhanVien.taiKhoan != payload
      );

      return { ...state, dsNhanVien };
    }
    case "LAY_NHAN_VIEN": {
      let dsNhanVien = [...state.dsNhanVien];

      let nhanVienTam = dsNhanVien.find(
        (nhanVien) => nhanVien.taiKhoan == payload
      );

      console.log(dsNhanVien);
      console.log(state.isSignUp);

      return { ...state, nhanVienUpdate: nhanVienTam, isSignUp: false };
    }

    case "SUA_NHAN_VIEN": {
      let dsNhanVien = [...state.dsNhanVien];

      let nhanVienTemporary = dsNhanVien.find(
        (nhanVien) => nhanVien.taiKhoan == payload.taiKhoan
      );

      nhanVienTemporary = payload.nhanVien;

      console.log(state.isSignUp);

      // if(nhanVienTemporary) {
      //   alert('ab')
      //   console.log(payload.nhanVien.taiKhoan);
      // }

      return { ...state, dsNhanVien, isSignUp: true, nhanVienUpdate:"" };
    }
    default:
      return { ...state };
  }
};
