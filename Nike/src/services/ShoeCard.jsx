const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const HandleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe);
        }
    }

    return (
        <>
            <div
                className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe
                        ? "border-red-400"
                        : "border-transparent"
                    } cursor-pointer max-sm:flex-1`}
                onClick={HandleClick}
            >
                <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
                    <img
                        src={imgURL.thumbnail}
                        alt='shoe Collection'
                        width={127}
                        height={103.34}
                        className='object-contain'
                    />
                </div>
            </div>
        </>
    )

}

export default ShoeCard