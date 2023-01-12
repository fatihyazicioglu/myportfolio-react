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
        Intern Web Developer after 1.5 years of full-time training in full-stack
        web development (MERN Stack). Looking for a new challenge to implement
        knowledge from web development, to contribute and develop it in a
        solution- oriented way. Characterized by excellent learning ability,
        strong motivation and resillience.
        <br />
       
        <br /> Click here to{" "}
        <a
          href='../public/[Lebenslauf]fatihyazicioglu.pdf'
          target='_blank'
          className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
          download='Lebenslauf-FatihYazicioglu'
          rel='noreferrer noopener'
        >
          Download My Resume
        </a>{" "}
        <br />I believe that my knowledge of Web-Developing could be interest to
        you. Below some of my relevant Projects. I would like the opportunity to
        meet with you and discuss the job opportunities you have available.
        Please let me know if you have any questions or would like to see
        specific work samples from{" "}
        <a
          href='https://github.com/fatihyazicioglu'
          target='_blank'
          className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
          rel='noreferrer noopener'
        >
          my Github Profile
        </a>{" "}
      </p>
    </div>
  );
}

export default Intro;
