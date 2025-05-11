import Button from "../components/Button.jsx";

import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images/index.js";

export default function SuperQuality() {
    return (
        <>
            <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-1 w-full max-container">
                <div className="flex flex-1 flex-col">
                    <div className="relative  flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 pr-20">
                        <h2 className="font-palanquin mb-5 text-5xl capitalize font-bold lg:max-w-lg">
                            We Provide You
                            <span className="text-red-400 inline-block mt-3">&nbsp;Super</span>
                            <br />
                            <span className="text-red-400 inline-block mt-3">Quality</span> Shoes
                        </h2>

                        <p className="mt-4 mb-4 lg:max-w-lg info-text">Ensuring Premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>

                        <p className="mt-6 lg:max-w-lg info-text">
                            Our dedication to detail and excellence ensures your satisfaction.
                        </p>

                        <div className="mt-11">
                            <Button label="View Details" iconURL={arrowRight} />
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center ml-35 sm:mr-20 mt-15">
                    <img src={shoe8} className="object-contain " width={650} height={622} alt="SQShoes" title="SQShoes" />
                </div>
            </section>
        </>
    )
}