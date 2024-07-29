import { Link } from "react-router-dom"

export default function Hero() {
    return (
        <div >

            <div className="hero  -mt-16 min-h-[calc(100vh-200px)] ">
                <div className="hero-content text-center">
                    <div className="max-w-full">
                        <h1 className="text-5xl font-bold">Welcome to <span className="text-5xl font-bold bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text bg-300% animate-gradient">ByteBlaze</span> </h1>
                        <p className="py-6">
                            your hub for fast, efficient, and collaborative coding. Innovate with real-time <br /> editing and integrated code generation. Blaze through your projects effortlessly!
                        </p>

                        <div className="space-x-4">
                        {/* -------------------------------------------- */}
                        <Link to='/blogs' class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Blogs</span>
                            <span class="relative invisible">Button Text</span>
                        </Link>


                        {/* ---------------------------------------------------------------------------- */}
                        <Link to='/bookmarks' class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Bookmarks</span>
                            <span class="relative invisible">Button Text</span>
                        </Link>
                        {/* ---------------------------------------------------------------------------- */}
                        </div>

                        {/* animated svg imgages  */}
                    </div>
                </div>
            </div>

        </div>
    )
}
