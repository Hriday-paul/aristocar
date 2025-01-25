import React, { Dispatch, useCallback, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { addCarInCart } from "@/redux/slice/CartSlice";
import { carDetailsI } from "@/app/[locale]/(main)/details/[id]/@cardetails/page";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 8;
const DRAG_BUFFER = 20;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 55,
};

export const FramerCarousel = ({ carouselCar, carData }: { carouselCar: { _id: string, key: string, url: string }[], carData: carDetailsI }) => {
    const [imgIndex, setImgIndex] = useState(1);


    const dragX = useMotionValue(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragX.get();

            if (x === 0) {
                setImgIndex((pv) => {
                    if (pv === carouselCar.length - 1) {
                        return 1;
                    }
                    return pv + 1;
                });
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, [dragX, carouselCar]);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < carouselCar.length - 1) {
            setImgIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((pv) => pv - 1);
        }
    };

    return (
        <div className="grid md:grid-cols-8 overflow-hidden">
            <div className="hidden md:block md:col-span-2">

            </div>
            <div className="md:relative col-span-4">
                <motion.div
                    drag="x"
                    dragConstraints={{
                        left: 0,
                        right: 0,
                    }}
                    style={{
                        x: dragX,
                    }}
                    animate={{
                        translateX: `-${imgIndex * 100}%`,
                    }}
                    transition={SPRING_OPTIONS}
                    onDragEnd={onDragEnd}
                    className="flex cursor-grab items-center active:cursor-grabbing"
                >
                    <Images imgIndex={imgIndex} carouselCar={carouselCar} carData={carData} />
                </motion.div>
            </div>
            <div className="hidden md:block md:col-span-2">

            </div>
        </div>
    );
};

const Images = ({ imgIndex, carouselCar, carData }: { imgIndex: number, carouselCar: { _id: string, key: string, url: string }[], carData: carDetailsI }) => {
    const dispatch = useDispatch<AppDispatch>()
    const { cars } = useSelector((state: RootState) => state.cartSlice);

    const handleAddCart = useCallback(() => {
        dispatch(addCarInCart(carData))
    }, [carData, dispatch])

    const isFound = cars?.find(car => {
        return car?._id === carData?._id
    })

    return (
        <>
            {carouselCar?.map((item, idx) => {
                return (
                    <motion.div
                        key={idx}
                        style={{
                            backgroundImage: `url(${item?.url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        animate={{
                            scale: imgIndex === idx ? 1.09 : 0.85,
                        }}
                        transition={SPRING_OPTIONS}
                        className="aspect-video w-full shrink-0 bg-zinc-200 object-cover my-5"
                    >
                        <button onClick={handleAddCart} className={`float-end m-4 ${idx == imgIndex ? "" : "hidden"}`}>
                            {
                                isFound ? <MdFavorite className="text-2xl text-secondary" /> : <MdFavoriteBorder className="text-2xl text-secondary" />
                            }

                        </button>
                    </motion.div>
                );
            })}
        </>
    );
};

export default FramerCarousel;