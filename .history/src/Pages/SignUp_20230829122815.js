import BgGroundSign from '../image/svg_for_signin_signup.svg'


function SignUp() {

    const handleSubmit = (ee) => {
        ee.preventDefault();
    }
    return (
        <div className="bg-gray-100 relative  h-screen  pt-10 ">


        <div className="container mx-auto px-16">
            <div className=" w-2/3 border m-auto ">
                <div className="flex overflow-hidden rounded-2xl h-96 ">
                    <div className="siginUp bg-orange-400 w-1/2 relative">
                        <h3 className="text-center text-white font-bold mt-5 p-2 text-2xl">You Can Sign in Here ↓</h3>
                        <div className="flex self-end justify-center ">
                            <a href='/loginpage' className="absolute top-1/2" >
                                <button className="text-orange-400 hover:text-orange-900  font-bold text-2xl bg-gray-300 p-3 rounded-xl">Sign in</button>
                            </a>

                        </div>
                    </div>
                    <div className=" contentsigin p-5 bg-gray-300 h-full w-2/3">
                        <h2 className="text-center  p-2 text-white text-2xl border-r-4 border-dashed border-white border-l-4 font-bold"> Sign Up  </h2>
                        <form className="flex flex-col items-start justify-start " onSubmit={handleSubmit}>

                            <div className="flex justify-between items-center w-full my-1 ">
                                <label className=" font-bold" htmlFor="name">Name :- </label>
                                <input className=' border rounded  p-2 w-3/4' type="text"  id="name" placeholder="Enter Your Name" />
                                {/* {errors.name && <p className="text-red-500 text-sm italic"> {errors.name}</p>} */}
                            </div>
                            <div className="flex justify-between items-center w-full my-1 ">
                                <label className=" font-bold" htmlFor="email">Email : </label>
                                <input className="rounded p-2 w-3/4" name="email"   type="email" required id="email" placeholder="Enter Your Email" />
                                {/* {errors.email && <p className="text-red-500 text-sm italic">{errors.email}</p>} */}
                            </div>
                            <div className="flex justify-between items-center w-full my-1 ">
                                <label className=" font-bold" htmlFor="phone">Phone : </label>
                                <input className="rounded p-2 w-3/4"  type="number" id="phone" placeholder="Enter Your Phone" />
                                {/* {errors.phone && <p className="text-red-500 text-sm italic">{errors.phone}</p>} */}
                            </div>
                            <div className="flex justify-between items-center w-full my-1">
                                <label className=" font-bold" htmlFor="password" >Password:</label>
                                <input className="rounded p-2 w-3/4"   type="password" id="password" placeholder="Enter Your Password" />
                                {/* {errors.password && <p className="text-red-500 text-sm italic">{errors.password}</p>} */}
                            </div>
                            <div className="mt-5 cursor-pointer bg-green-600 text-white p-3 rounded w-full text-center font-bold text-xl" >
                                <input className="cursor-pointer" type="submit" value='Sign Up' />
                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </div>
        <img src={BgGroundSign} className="absolute bottom-0 w-full"  alt="sign in"  />

    </div>
    )
}

export default SignUp;