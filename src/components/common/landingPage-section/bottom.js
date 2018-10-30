import React from "react";

export default function bottom() {
  return (
    <section
      className="padding-top-s padding-bottom-s"
      style={{ background: "#323437" }}
    >
      <div className="container text-center">
        <div
          className="row margin-top-l"
          style={{
            paddingBottom: "20px",
            borderBottom: "1px solid rgba(255,255,255,0.2)"
          }}
        >
          <div className="col-md">
            <div className="text-left color-p9">
              <h5 className="text-white">About us</h5>
              Chỗ này là để chém gió. Trước mắt chưa biết chém cái gì hết nên
              ghi đại đại, cho div nó dài ra một chút cho đẹp. Nhưng khi kiểm
              tra gõ xong dòng đầu tiên thì thấy ít quá. Nên phải gõ thêm vài
              dòng như thế này để nó dài ra hơn nữa
            </div>
          </div>
          <div className="col-md">
            <div className="text-left color-p9">
              <h5 className="text-white">Social Media Feed</h5>
              Chỗ này là để chém gió. Trước mắt chưa biết chém cái gì hết nên
              ghi đại đại, cho div nó dài ra một chút cho đẹp. Nhưng khi kiểm
              tra gõ xong dòng đầu tiên thì thấy ít quá. Nên phải gõ thêm vài
              dòng như thế này để nó dài ra hơn nữa
            </div>
          </div>
          <div className="col-md">
            <div className="text-left color-p9">
              <h5 className="text-white">Thanks you</h5>
            </div>
          </div>
        </div>
        <div className="row margin-top-l">
          <div className="col-md">
            <div className="text-center color-p9">Copyright by zdtz</div>
          </div>
        </div>
      </div>
    </section>
  );
}
