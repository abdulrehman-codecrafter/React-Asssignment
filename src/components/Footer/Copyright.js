import React from "react";

export default function Copyright() {
  let year = new Date().getFullYear();
  return (
    <div className=" bg-primary py-2">
      <div className="row">
        <div className="col">
          <p className="mb-0  text-center">CopyRights &copy; {year} All Rights Reserved </p>
        </div>
      </div>
    </div>
  );
}
