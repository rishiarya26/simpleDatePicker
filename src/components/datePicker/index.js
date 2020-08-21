import React from "react";

export default function DatePicker() {
  return (
    <>
      <div class="coc-form">
        <div class="coc-block-row">
          <label class="coc-block-label" for="dateofbirth">
            Select Date
          </label>
          <div class="coc-block">
            <input
              class="coc-input"
              type="date"
              name="dateofbirth"
              id="dateofbirth"
            />
          </div>
        </div>
      </div>
    </>
  );
}
