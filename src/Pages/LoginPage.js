// import { Link } from 'react-router-dom';
import BgGroundSign from '../image/svg_for_signin_signup.svg'


function LoginPage() {

    const handleSubmit = (es) => {
        es.preventDefault();
    }
    return (
        <div className="bg-gray-100 relative  h-screen  pt-10 ">


        <div className="container mx-auto px-16">
            <div className=" w-2/3 border m-auto ">
                <div className="flex overflow-hidden rounded-2xl h-96 max-sm:h-fit max-sm:py-3  max-sm:block">
                    <div className=" contentsigin p-5 bg-gray-300 h-full w-2/3 max-sm:w-full">
                        <h2 className="text-center  p-2 text-white text-2xl border-r-4 border-dashed border-white border-l-4 font-bold"> Sign In  </h2>
                        <form className="flex flex-col items-start justify-start " onSubmit={handleSubmit}>

                            <div className="flex justify-between items-center w-full my-5  max-sm:block">
                                <label className="text-xl font-bold" htmlFor="name1">Email : </label>
                                <input className="rounded p-2 w-3/4 max-sm:w-full" type="text" id="name1" placeholder="Enter Your Name" />
                            </div>
                            <div className="flex justify-between items-center w-full my-5 max-sm:block">
                                <label className="text-xl font-bold" htmlFor="password">Password:</label>
                                <input className="rounded p-2 w-3/4 max-sm:w-full" type="password" id="password" placeholder="Enter Your Password" />
                            </div>
                            <div className="mt-8 cursor-pointer bg-green-600 text-white p-3 rounded w-full text-center font-bold text-xl" >
                                <input className="cursor-pointer" type="submit" value='Sign In' />
                            </div>

                        </form>
                    </div>
                    <div className="siginUp bg-orange-400 w-1/2 relative max-sm:w-full">
                        <h3 className="text-center text-white font-bold mt-5 p-2 text-2xl">You Can Sign Up Here ↓</h3>
                        <div className="flex self-end justify-center ">
                        
                            <a href='/signup' className="absolute top-1/2" >
                                <button className="text-orange-400 hover:text-orange-900  font-bold text-2xl bg-gray-300 p-3 rounded-xl">Sign Up</button>
                            </a>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        <img src={BgGroundSign} className="absolute bottom-0 " width={2000} alt="sign in" height={100} />

    </div>
    )
}

export default LoginPage;