import FirstVideo from 'react-youtube';
import BackgroudImage from '../image/svgaboutpage.svg'

import Contact from '../Componnat/Contact';

function AboutPage(){

    const opts = {
        height: '350',
        width: '400',

    }
    const pathVedio = 'XdGiVeSp6ow'
    return (
        <>
        <div className=' relative' >
            <div className='container mx-auto px-1 z-5 '>
            <h1>About us page </h1>

                <div className="flex  justify-around max-sm:flex-col ">
                    <div className=" w-1/2 border max-sm:w-full max-sm:px-7 max-sm:order-2">
                        <h2 className='font-bold text-2xl text-orange-500 bg-orange-200 p-3 rounded-xl w-fit'>About Us </h2>
                        <p className='w-92 bg-gray-100 p-3 m-5 rounded max-sm:w-full max-sm:m-1 max-sm:mx-auto'>

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida egestas massa,
                            in molestie urna suscipit vitae. Curabitur viverra tincidunt tellus vel aliquet. Praesent sit amet orci molestie,
                            fringilla nibh eget, lacinia dolor. Sed eget massa iaculis, accumsan dui interdum, mattis urna. Vivamus id ipsum sem.
                            Mauris venenatis lacus non lectus mollis interdum.
                            Praesent facilisis urna a dolor facilisis, eget cursus nunc convallis.
                            In volutpat urna eu fermentum tincidunt. Nullam bibendum sit amet nibh sit amet suscipit.
                            Etiam egestas augue rutrum finibus consequat.
                            Proin eget semper mauris. Vestibulum aliquet arcu molestie fringilla interdum. Vivamus iaculis et ex in cursus.

                            Nulla euismod orci mauris, vitae suscipit felis bibendum sed.
                            Nulla ut mauris id justo rutrum pulvinar non eu dui. Mauris ut tortor elementum, egestas urna sodales,
                            iaculis augue. Nam eu sem tortor. Curabitur maximus feugiat placerat. Praesent pharetra tristique magna vel tincidunt.
                            Nam mattis urna ut suscipit sollicitudin. Suspendisse potenti.

                        </p>
                        
                    </div>
                    <div className='max-sm:order-1 max-sm:px-4 max-sm:my-5'>
                        <h2>Who are we </h2>

                        <div className='rounded-2xl overflow-hidden  text-center'>
                            <FirstVideo videoId={pathVedio} opts={opts} />
                        </div>
                    </div>
                </div>
            </div>
            <img className=' absolute top-1/2 -z-50 max-sm:hidden' src={BackgroudImage} width={2000} height={400 } alt='orange wave' objectFit='cover' objectPosition='center'/>

         </div>
         <Contact />
        </>
    )
}


export default AboutPage;
