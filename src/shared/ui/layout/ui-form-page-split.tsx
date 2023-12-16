"use client";
import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { UILogo } from "../ui-logo";

interface ISlide {
  id: number;
  title?: string;
  desc?: string;
  img: string;
}

export function UIFormPageSplitLayout({
  title,
  desc,
  form,
  footer,
  slides,
}: {
  form?: ReactNode;
  footer?: ReactNode;
  desc?: string;
  title: string;
  slides?: ISlide[];
}) {
  return (
    <>
      <div className="bg-white dark:bg-violet-950 shadow rounded-lg mb-6 max-w-5xl w-full md:mx-auto">
        <div className="grid md:grid-cols-12">
          <div className="bg-white dark:bg-violet-950 shadow-md p-8 rounded-lg md:rounded-none md:rounded-s xl:col-span-5 md:col-span-6">
            <div className="mb-12">
              <UILogo className="text-xs" />
            </div>
            {title && (
              <h6 className="text-base/[1.6] font-semibold text-gray-800 dark:text-white mb-0 mt-4">
                {title}
              </h6>
            )}
            {desc && (
              <p className="text-gray-500 dark:text-violet-300 text-sm/[1.6] mt-1 mb-6">
                {desc}
              </p>
            )}

            {form}
          </div>

          {slides && (
            <div className="hidden md:block xl:col-span-7 md:col-span-6">
              <div className="w-full mx-auto">
                <div className="my-12 py-12">
                  <div className="flex items-center justify-center h-full">
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      spaceBetween={30}
                      slidesPerView={1}
                      autoplay={{
                        delay: 3500,
                        disableOnInteraction: true,
                      }}
                      loop={true}
                      pagination={{ clickable: true }}
                    >
                      {slides.map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="swiper-slide-content">
                            <div className="text-center w-3/5 mx-auto">
                              {item.img && (
                                <img src={item.img} className="w-full" />
                              )}
                            </div>
                            <div className="text-center my-6 pb-12">
                              {item.title && (
                                <h5 className="font-medium text-base/[1.6] text-gray-800 dark:text-white my-2.5">
                                  {item.title}
                                </h5>
                              )}

                              {item.desc && (
                                <p className="text-sm/[1.6] text-gray-500 dark:text-violet-300 mb-4">
                                  {item.desc}
                                </p>
                              )}
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full text-center">{footer}</div>
    </>
  );
}
