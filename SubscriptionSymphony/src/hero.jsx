import Design from './spline';
import "./css/hero.css"
function Hero() {
    return (
        <div className="relative flex justify-center items-center h-screen w-full bg-[D9D9D9]">
            <div className="absolute inset-0 z-0">
                <Design/>
            </div>
            <div className="z-10 max-w-4xl text-center relative">
                <h1 className="font-bold text-5xl text-white">Subscription <br /> Symphony</h1>
                <button className="mt-8 bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300">Sign Up</button>
            </div>
        </div>
    )
}
export default Hero;







