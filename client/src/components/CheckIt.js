import React, { useEffect,useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const checkIt = ( Component ) => {

    return (props) => {
        const {resData} = props;
        const length = resData?.length;

        const [currentIndex, setCurrentIndex] = useState(0);

        const prevSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
        };

        const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex === length - 1 ? prevIndex : prevIndex + 1));
        };

        //
        const [move, setMove] = useState(innerWidth < 700 ? 10 : 20)  
        const debounce = (func, delay=300) =>{
            let timer;

            return function(){
                let args = arguments
                let context = this
                clearTimeout(timer)
                timer = setTimeout(() => {
                    setMove(Math.floor(innerWidth/(length*5)))
                }, delay);
            }
        }
        const handleResize = debounce(setMove)
        useEffect(()=>{
            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }, [])

        return (
            <div className="relative">
                <div className="overflow-hidden relative">
                    <div
                        className="flex transition-transform ease-in-out duration-300"
                        style={{ transform: `translateX(-${currentIndex * (100 / move)}%)` }}
                    >
                    {
                        resData?.map(data => <div  key={data?.info?.id || data.id}> <Component resData={data} /> </div>)
                    }

                    </div>
                </div>
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                    onClick={prevSlide}
                >
                    <FaChevronLeft className="text-gray-600" />
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                    onClick={nextSlide}
                >
                    <FaChevronRight className="text-gray-600" />
                </button>
            </div>
        );
    }
};

export default checkIt