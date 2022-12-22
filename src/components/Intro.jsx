import React from "react";

function Intro() {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <h1 className='text-4xl md:text-5xl dark:text-white mb-1 md:mb-3 font-bold'>
        Fatih Yazicioglu
      </h1>
      <p className='text-base md:text-xl mb-3 font-medium'>
        {" "}
        Full-Stack Web Developer
      </p>
      <p className='text-sm max-w-xl mb-6 font-bold'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        placeat?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum
        quae libero facilis eaque necessitatibus cumque culpa optio quod fugiat,
        dicta autem ut maxime voluptatibus deleniti quasi et illo, eum veritatis
        impedit quisquam explicabo! Explicabo excepturi odit beatae velit
        voluptatibus!{" "}
        <a
          href='https://github.com/fatihyazicioglu'
          target='_blank'
          className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
          rel='noreferrer noopener'
        >
          Fatih
        </a>{" "}
        to see my WorkSamples
      </p>
    </div>
  );
}

export default Intro;
