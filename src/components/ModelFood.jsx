import React, { useState } from "react";

const ModelFood = ({ data, onClose }) => {
  console.log(data, " ab dekhte hai");
  return (
    <>
      <div class="modal show fade" tabindex="-1" style={{ display: "block" }}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button onClick={() => onClose()}>Close</button>
            </div>
            <div class="modal-body">
              {data?.map((item) => (
                <span class="badge badge-danger text-secondary">
                  {item.label}-{item.weight}
                </span>
              ))}
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelFood;
