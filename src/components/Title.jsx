import React from "react";

function Title({ children, id }) {
  return (
    <h1
      id={id && id}
      className='text-2xl w-fit font-bold underline underline-offset-4 decoration-4 mb-5 text-stone-900 dark:text-white bg-gradient-to-r from-orange-400 to-gray-300 rounded-md '
    >
      {children}
    </h1>
  );
}

export default Title;
