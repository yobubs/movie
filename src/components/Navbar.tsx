import { LuSearch, LuMenu, LuUser2 } from 'react-icons/lu'
const Navbar = () => {
   return (
      <nav className="sticky top-0 z-50 flex h-14 w-full items-center justify-between gap-8 bg-slate-800 px-6 text-slate-300">
         <form className="flex w-full items-center rounded-xl border-2 border-slate-500 px-3 md:w-2/5">
            <input
               type="text"
               name="search"
               placeholder="search"
               className="w-full bg-transparent px-1 py-1 text-slate-300 placeholder:opacity-50 focus:outline-none"
               required
            />
            <button type="submit">
               <LuSearch size="1.5rem" />
            </button>
         </form>
         <a
            href="."
            className="hidden max-w-fit bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-2xl font-extrabold text-transparent sm:inline-block"
         >
            cineQ
         </a>
         <div className="flex items-center gap-5 md:me-5">
            <button className="flex items-center gap-1">
               <LuUser2 size="1.8rem" />
               <p className="hidden sm:inline-block">Login</p>
            </button>
            <button>
               <LuMenu size="2.1rem" />
            </button>
         </div>
      </nav>
   )
}

export default Navbar
