import Posters from '../assets/posters.png'

const LandingPage = () => {
   return (
      <div className="flex h-screen w-full flex-col bg-slate-800 ">
         <a
            href="."
            className="ms-10 mt-3 max-w-fit bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-2xl font-extrabold text-transparent"
         >
            cineQ
         </a>
         <div className="flex h-full w-full items-center justify-center text-slate-500 md:gap-5 lg:gap-20">
            <div className="flex flex-col ">
               <p>watch on</p>
               <h1 className="mb-3 text-center text-6xl text-slate-200">
                  Cine
                  <span
                     style={{
                        WebkitTextStroke: '2px #06b6d4',
                        WebkitTextFillColor: 'transparent',
                     }}
                  >
                     Quixotica
                  </span>
               </h1>
               <p className="mb-2 text-lg text-slate-400">
                  Your Gateway to Cinematic Wonders
               </p>

               <div className="mt-4 flex items-center gap-2 self-end">
                  why wait?
                  <a
                     href="#movies"
                     className=" rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 px-4 py-2 text-slate-200"
                  >
                     watch now
                  </a>
               </div>
            </div>

            <img
               src={Posters}
               alt="photo"
               className="hidden w-80 select-none md:inline-block"
            />
         </div>
      </div>
   )
}

export default LandingPage
