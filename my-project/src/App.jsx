import React from 'react'
import Typewriter from "typewriter-effect";
import 'animate.css';
import Clock from 'react-digital-clock';



function Home() {
  return (
    <div className="w-full min-h-screen  bg-amber-300">
      <div className="text-[#ffffff] animate__animated animate__fadeIn App">
      <div className="animate__animated animate__fadeIn flex flex-col ">

        <div className="  justify-between  items-end flex flex-row">
          <div className="flex flex-row ">
            <div className="p-4 text-4xl">
              I am Kishorri
            </div>
            
          </div>
          

        </div>

      </div>

      <div className="text-4xl w-full flex-col  flex font-bold mt-64 justify-center items-center">
        <div className=" animate__delay-1s animate__fadeInUp animate__animated ">
          Hello, I am Kishorri this is my work!
        </div>
        <div className="animate__fadeInDown animate__animated animate__delay-2s text-6xl">
          TIME
        </div>
        <div className="animate__zoomIn animate__animated animate__delay-3s items-center justify-center flex flex-row">
          '''
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome To My Time")
                .pauseFor(1000)
                .deleteAll()
                .typeString("This is the clock")
                .pauseFor(1000)
                .deleteAll()
                .typeString("A fancy clock")
                .start();

            }}

          />
          '''
        </div>

      </div>
      <div className="text-3xl py-2 bg-amber-400 rounded-lg mt-5 mx-24">
      <Clock/>
      <Clock format= {'hh-mm'} />
      <Clock locale= {'ar-AE'} />
      <Clock hour12= {false} />

      </div>
      <div className=" w-full flex justify-center items-center">


        <div className="mt-48 flex flex-row">
          <div>
            <div>
              Presentd by
            </div>

          </div>

            
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Creative")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Unreliable")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Struggling")
                .start();
            }}
          />
          coder
        </div>

      </div>
    </div>

    </div>
    

  )
}

export default Home