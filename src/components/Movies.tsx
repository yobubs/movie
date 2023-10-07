import { useState } from 'react'
import { motion } from 'framer-motion'
import { AiFillStar } from 'react-icons/ai'

const Movies = () => {
   const categories = ['Movies', 'Tv Shows']
   const [activeCategory, setActiveCategory] = useState(0)
   return (
      <main className="w-full overflow-auto bg-slate-900 p-2">
         <div className="my-14 flex justify-center px-[5%]">
            <div className="relative flex w-full items-center justify-between rounded-lg bg-slate-700 text-slate-400">
               {categories.map((c, i) => (
                  <button
                     key={i}
                     onClick={() => setActiveCategory(i)}
                     className={`z-10 flex-1 py-3 text-center ${
                        activeCategory === i && 'text-slate-200'
                     }`}
                  >
                     {c}
                  </button>
               ))}

               <motion.div
                  animate={{ marginLeft: activeCategory * 50 + '%' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 16 }}
                  className="absolute left-0 top-0 z-0 h-full w-1/2 px-3 py-[6px]"
               >
                  <div className="h-full w-full rounded-xl bg-slate-900"></div>
               </motion.div>
            </div>
         </div>

         <h1 className="ms-8 mt-10 text-xl text-slate-200">Trending</h1>
         <div className="movies mt-4 flex flex-wrap items-center justify-center gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((s) => (
               <a
                  key={s}
                  href="#"
                  className="w-40 rounded-lg bg-slate-800 p-2 hover:bg-slate-700 sm:w-52"
               >
                  <div className="relative flex h-48 w-full items-center justify-center rounded-xl bg-slate-900 text-slate-400 sm:h-56">
                     {s}

                     <div className="absolute right-2 top-1 flex items-center">
                        <AiFillStar size="15px" className="text-yellow-400" />
                        <p className="text-[12px]">4.5</p>
                     </div>
                  </div>
                  <p className="text-lg text-slate-300">Lorem</p>
                  <div className="flex items-center justify-between text-sm text-slate-400">
                     <p>HD </p>
                     <p>{s}09 min</p>
                  </div>
               </a>
            ))}
         </div>
         <div className="mt-5 text-center">
            <button className="rounded-xl bg-gradient-to-tr from-purple-500 to-cyan-500 px-14 py-2 text-slate-200 shadow-xl shadow-slate-950/60">
               see more
            </button>
         </div>

         <h1 className="ms-8 mt-10 text-xl text-slate-200">Latest Release</h1>
         <div className="movies mt-4 flex flex-wrap items-center justify-center gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((s) => (
               <a
                  key={s}
                  href="#"
                  className="w-40 rounded-lg bg-slate-800 p-2 hover:bg-slate-700 sm:w-52"
               >
                  <div className="relative flex h-48 w-full items-center justify-center rounded-xl bg-slate-900 text-slate-400 sm:h-56">
                     {s}
                  </div>
                  <p className="text-lg text-slate-300">Lorem</p>
                  <div className="flex items-center justify-between text-sm text-slate-400">
                     <p>HD </p>
                     <p>{s}09 min</p>
                  </div>
               </a>
            ))}
         </div>
         <div className="mt-5 text-center">
            <button className="rounded-xl bg-gradient-to-tr from-purple-500 to-cyan-500 px-14 py-2 text-slate-200 shadow-xl shadow-slate-950/60">
               see more
            </button>
         </div>
      </main>
   )
}

export default Movies
