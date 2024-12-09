import React, { useState } from "react";

const Image = (className) => {
  const [visible, setvisible] = useState(true);

  function showHide() {
    setvisible(!visible);
  }

  return (
    <div>
      {visible ? (
        <div></div>
      ) : (
        <div>
          <img
            src="https://images.pexels.com/photos/1630344/pexels-photo-1630344.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="bag"
          />
          {visible}
        </div>
      )}
      <button
        className={`btn btn-active btn-primary  mt-5  ${className}`}
        onClick={showHide}
      >
        show
      </button>
    </div>
  );
};

export default Image;
