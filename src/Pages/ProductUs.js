import producImage from "../image/Rectangle 9.png";
import { Helmet } from "react-helmet"
import { useState } from "react";

function ProductUs() {

    const [rating, setRating] = useState(0);
    const [isClicked, setIsClicked] = useState(false)
    const handleClick = (value) => {
        setRating(value)
        setIsClicked(true)
    }
    const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
    const [zoomleave, setZoomleave] = useState(1);
    const handleMouseMove = (event) => {
        const { left, top, width, height } = event.target.getBoundingClientRect();
        const x = event.clientX - left;
        const y = event.clientY - top;
        const postX = x / width * 100;
        const postY = y / height * 100
        setLensPosition({ x: postX, y: postY })
    }
    const handleMouseEnter = () => {
        setIsHovering(true)
    }
    const handleMouseLeave = () => {
        setIsHovering(false)
        setZoomleave(1)
    }
    const [isHovering, setIsHovering] = useState(false)


    return (
        <>
            <Helmet>
                <title>Product 1</title>

            </Helmet>
            <section>
                <div className="container mx-auto px-12">
                    <div className={`flex justify-around mt-16 border h-screen max-sm:block`} style={{ height: 'calc(100vh - 64px)' }}>

                        <div className="relative w-96 h-96 max-sm:w-full max-sm:h-72 overflow-hidden"
                            onMouseMove={handleMouseMove}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            <img src={producImage} className="absolute top-0 left-0 w-full h-full transform   " alt="product1" />
                            {isHovering ? (
                                <>
                                    <div className="absolute top-0 left-0 w-full h-full bg-gray-100 opacity-50   hover:opacity-0"></div>
                                    <div className="absolute left-10 top-4 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-gray-300 rounded-2xl  "
                                        style={{
                                            width: '200px',
                                            height: '200px',
                                            transform: `translate(${lensPosition.x - 50}%, ${lensPosition.y - 50}%) scale(${zoomleave})`,
                                            zIndex: 1,
                                            pointerEvents: 'none',
                                            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
                                            backgroundImage: `url('${producImage}')`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: `${lensPosition.x}% ${lensPosition.y}%`,
                                        }}></div>
                                    <div style={{ zIndex: 2, opacity: isHovering ? 1 : 0 }} className="absolute top-0 left-0 w-full h-full">

                                    </div>

                                </>
                            ) : ""}

                        </div>

                        <div className="w-1/3 max-sm:w-full max-sm:text-center">
                            <h2 className="text-5xl font-bold ">Product Name</h2>
                            <div className="star-rating pt-10 font-medium text-xl max-sm:block ">
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <button key={value}
                                        className={`star ${rating >= value ? 'star-filled' : ''}`}
                                        onClick={() => handleClick(value)}>
                                        {isClicked && rating >= value ? '💘' : '🤍'}
                                    </button>
                                ))}
                                <p className="ml-4 max-sm:w-full ">You rated this {rating} stars.</p>
                            </div>
                            <div className=" ">
                                <h4 className=" font-bold text-xl  ">
                                    Price : $30 - $45
                                </h4>
                            </div>
                            <div>
                                <p className=" leading-8 border max-sm:text-start" >
                                    Lorem Ipsum is  Lorem Ipsum,
                                    Lorem Ipsum is a utility for creating beautiful websites and finding them quickly.
                                    Lorem Ips incorrectly reports that Lore immutable properties are immutable and cannot
                                </p>
                            </div>
                            <div className="pt-3">
                                <label className="pr-3">Cheose Your Color : </label>
                                <select className="py-2 bg-gray-200 w-16 font-medium cursor-pointer">
                                    <option className="" value='red'>red</option>
                                    <option className="" value='blue'>blue</option>
                                    <option className="" value='orange'>orange</option>
                                    <option className="" value='green'>green</option>
                                    <option className="" value='purple'>purple</option>
                                </select>
                                    <button className="block fon-bold text-xl capitalize bg-green-600 text-white p-2 rounded-xl mt-10">
                                        add to Card
                                    </button>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}


export default ProductUs;