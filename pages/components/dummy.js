import React from "react";

const Dummy = () => {
  return (
    <>
      <style jsx global>
        {`
          .dummy {
            background: yellow;
          }
        `}
      </style>
      <div className="dummy">
        <h2>Dummy</h2>
      </div>
    </>
  );
};

export default Dummy;
