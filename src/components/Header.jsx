import React from "react";
import DisplayCounter from "./DisplayCounter";

const Header = () => {
  return (
    <div>
      <div class="px-1 py-4 my-5 text-center">
        <h1 class="display-6 fw-bold text-body-emphasis">Centered hero</h1>
        <div class="col-lg-6 mx-auto">
          <DisplayCounter />
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
