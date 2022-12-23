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
        I am entering the job market after 1 year of intensive training at
        Digital Career Institute. I am a motivated student who can grasp what I
        learn very easily. During that training , I had to opportunity to learn
        HTML | CSS | JavaScript | React | NodeJS | MongoDB | ExpressJs |
        BootStrap including TypeScript.
        <br />I graduated from a 4-year law school in 2 years with hard work. As
        can be seen from my Github profile, I am a person who enjoys hard work.
        I can list my strengths as willingness to take responsibility,
        resilience, eagerness to learn.<br /> Click here to  {" "}
        <a
          href='src/assets/[Lebenslauf]Fatih Yazicioglu.pdf'
          target='_blank'
          className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
          download="Lebenslauf-FatihYazicioglu"
          rel='noreferrer noopener'
        >
         Download  My Resume
        </a>{" "}
        <br />
        I believe that my knowledge of Web-Developing could
        be interest to you. I would like the opportunity to meet with you and
        discuss the job opportunities you have available. Below are some of my relevant projects. Please let me know if
        you have any questions or would like to see specific work samples from{" "}
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
