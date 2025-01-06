import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const page = () => {
  return (<>
  
  
  <Navbar/>
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
  
  <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
    <div className="container mx-auto px-6 flex relative py-16">
      <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
        <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
          Be on
          <span className="text-5xl sm:text-7xl">Time</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-700 dark:text-white">
          Dimension of reality that makes change possible and understandable. An
          indefinite and homogeneous environment in which natural events and
          human existence take place.
        </p>
        <div className="flex mt-8">
          <a
            href="#"
            className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
          >
            Get started
          </a>
          <a
            href="#"
            className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
          >
            Read more
          </a>
        </div>
      </div>
      <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
        <img
          src="https://www.tailwind-kit.com/images/object/10.png"
          className="max-w-xs md:max-w-sm m-auto"
        />
      </div>
    </div>
  </div>
</main>


<section className="bg-zinc-50 overflow-hidden">
  <div className="max-w-screen-xl 2xl:max-w-screen-3xl h-[65vh] px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24  flex flex-col justify-center">
    <div className="flex flex-col sm:flex-row mx-auto">
      {/*- Starts component */}{" "}
      <a href="#_">
        {" "}
        <img
          src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full z w-full object-cover hover:scale-150 transform origin-bottom"
          alt="#_"
        />{" "}
      </a>
      <a href="#_">
        {" "}
        <img
          src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
          className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
          alt="#_"
        />{" "}
      </a>
      <a href="#_">
        {" "}
        <img
          src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
          alt="#_"
        />{" "}
      </a>
      <a href="#_">
        {" "}
        <img
          src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
          alt="#_"
        />
      </a>
      {/*- Ends component */}
    </div>
   
  </div>
</section>


















<section className="px-4">
  <div className="bg-gradient-to-br from-sky-400 via-sky-400 to-violet-400 p-6 sm:p-10 rounded-2xl w-full text-white flex items-center justify-between max-w-2xl mx-auto mt-20">
    <div className="flex flex-col gap-6">
      <div className="">
        <span className="text-gray-200">Black friday sale</span>
        <br />
        <span className="text-gray-200 text-4xl text-white font-semibold">
          20% off every Product
        </span>
      </div>
      <a
        href=""
        target="_blank"
        rel="noreferrer"
        className="text-black bg-white hover:bg-gray-50 px-4 py-2 rounded-lg w-fit  ease duration-300 flex gap-1 items-center group"
      >
        <span>Buy now</span>
        <svg
          data-v-e660a7a7=""
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="group-hover:translate-x-1 transition-transform ease duration-200"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
          ></path>
        </svg>
      </a>
    </div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-20 h-20 text-gray-100"
        viewBox="0 0 15 15"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.5 0A2.5 2.5 0 0 0 2 2.5v.286c0 .448.133.865.362 1.214H1.5A1.5 1.5 0 0 0 0 5.5v1A1.5 1.5 0 0 0 1.5 8H7V4h1v4h5.5A1.5 1.5 0 0 0 15 6.5v-1A1.5 1.5 0 0 0 13.5 4h-.862c.229-.349.362-.766.362-1.214V2.5A2.5 2.5 0 0 0 10.5 0c-1.273 0-2.388.68-3 1.696A3.498 3.498 0 0 0 4.5 0ZM8 4h2.786C11.456 4 12 3.456 12 2.786V2.5A1.5 1.5 0 0 0 10.5 1A2.5 2.5 0 0 0 8 3.5V4ZM7 4H4.214C3.544 4 3 3.456 3 2.786V2.5A1.5 1.5 0 0 1 4.5 1A2.5 2.5 0 0 1 7 3.5V4Z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M7 9H1v3.5A2.5 2.5 0 0 0 3.5 15H7V9Zm1 6h3.5a2.5 2.5 0 0 0 2.5-2.5V9H8v6Z"
        ></path>
      </svg>
    </div>
  </div>
</section>



<div className="stats-section py-10 px-5">
  <div className="stats-grid z-20 max-w-5xl rounded-xl bg-[#FF6347]  mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-between md:px-10 gap-x-10 py-10 px-5 lg:px-10 gap-y-5">
    <div className="col-span-1 md:col-span-3 lg:col-span-1 flex flex-col items-center justify-center gap-y-3">
      <h2 className="text-3xl md:pb-5 md:text-3xl text-white dark:text-gray-200 font-bold">
        Join Us to Achieve More
      </h2>
    </div>
    <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-center justify-center gap-y-3">
      <h2 className="text-3xl lg:text-5xl text-white dark:text-gray-200 font-bold">
        1.2M
      </h2>
      <p className="text-center text-sm md:text-base text-white dark:text-gray-400">
        Members worldwide
      </p>
    </div>
    <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-center justify-center gap-y-3">
      <h2 className="text-3xl lg:text-5xl text-white dark:text-gray-200 font-bold">
        95%
      </h2>
      <p className="text-center text-sm md:text-base text-white dark:text-gray-400">
        Customer satisfaction rate
      </p>
    </div>
    <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-center justify-center gap-y-3">
      <h2 className="text-3xl lg:text-5xl text-white dark:text-gray-200 font-bold">
        3500+
      </h2>
      <p className="text-center text-sm md:text-base text-white dark:text-gray-400">
        Transactions processed daily
      </p>
    </div>
  </div>
</div>





<section className="bg-blue-50 dark:bg-slate-800" id="contact">
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
    <div className="mb-4">
      <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
        <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
          Contact
        </p>
        <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
          In hac habitasse platea dictumst
        </p>
      </div>
    </div>
    <div className="flex items-stretch justify-center">
      <div className="grid md:grid-cols-2">
        <div className="h-full pr-6">
          <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis
            ante, ac tincidunt sem venenatis ut.
          </p>
          <ul className="mb-6 md:mb-0">
            <li className="flex">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                </svg>
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Our Address
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  1230 Maecenas Street Donec Road
                </p>
                <p className="text-gray-600 dark:text-slate-400">
                  New York, EEUU
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  <path d="M15 7a2 2 0 0 1 2 2" />
                  <path d="M15 3a6 6 0 0 1 6 6" />
                </svg>
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Contact
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Mobile: +1 (123) 456-7890
                </p>
                <p className="text-gray-600 dark:text-slate-400">
                  Mail: tailnext@gmail.com
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Working hours
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Monday - Friday: 08:00 - 17:00
                </p>
                <p className="text-gray-600 dark:text-slate-400">
                  Saturday &amp; Sunday: 08:00 - 12:00
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
          <h2 className="mb-4 text-2xl font-bold dark:text-white">
            Ready to Get Started?
          </h2>
          <form id="contactForm">
            <div className="mb-6">
              <div className="mx-0 mb-1 sm:mb-4">
                <div className="mx-0 mb-1 sm:mb-4">
                  <label
                    htmlFor="name"
                    className="pb-1 text-xs uppercase tracking-wider"
                  />
                  <input
                    type="text"
                    id="name"
                    autoComplete="given-name"
                    placeholder="Your name"
                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    name="name"
                  />
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <label
                    htmlFor="email"
                    className="pb-1 text-xs uppercase tracking-wider"
                  />
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Your email address"
                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    name="email"
                  />
                </div>
              </div>
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor="textarea"
                  className="pb-1 text-xs uppercase tracking-wider"
                />
                <textarea
                  id="textarea"
                  name="textarea"
                  cols={30}
                  rows={5}
                  placeholder="Write your message..."
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="flex flex-col lg:h-svh justify-center items-center ">
  <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl">
    <div>
      <h1>Animated images on hover</h1>
      <p className="text-balance">
        Hover over the images to see the animation.
      </p>
    </div>
  </div>
  <div className="flex flex-wrap mx-auto md:flex-nowrap mt-6 border-t pt-12">
    <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
      <article
        className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group"
        style={{
          backgroundImage:
            'url("https://www.yankodesign.com/images/design_news/2019/07/desk-setups-that-maximize-productivity-part-2/Desk-Setup_12.jpg")'
        }}
      >
        <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
          <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
            <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 ">
              {" "}
              Immerse yourself in a seamless experience where every touchpoint
              anticipates your needs. Description one.{" "}
            </p>
          </div>
        </div>
      </article>
    </div>
    <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
      <article
        className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/564x/34/65/b8/3465b890b11571e2c876ae74dc1b3139.jpg")'
        }}
      >
        <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
          <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
            <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 ">
              {" "}
              Engage with a platform where interaction is intuitive, ensuring
              your journey is fluid and responsive. Description two.{" "}
            </p>
          </div>
        </div>
      </article>
    </div>
    <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
      <article
        className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/564x/33/d6/54/33d654e8058fdf69e160dcbd2235cdac.jpg")'
        }}
      >
        <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
          <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
            <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 ">
              {" "}
              Discover our commitment to thoughtful design, prioritizing
              accessibility and user satisfaction. Description three.{" "}
            </p>
          </div>
        </div>
      </article>
    </div>
    <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
      <article
        className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/564x/39/b8/01/39b801afe355e623bcb3928b1c1b046d.jpg")'
        }}
      >
        <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
          <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
            <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 ">
              {" "}
              Experience innovation at every step, with forward-thinking
              solutions designed to enhance your daily interactions. Description
              four.{" "}
            </p>
          </div>
        </div>
      </article>
    </div>
    <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
      <article
        className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/564x/2b/b5/48/2bb548dbf4a4c57381a7b7f736b4930b.jpg")'
        }}
      >
        <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
          <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
            <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 ">
              {" "}
              Join us in embracing sustainability, where design and
              functionality meet eco-conscious decisions. Description five.{" "}
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>{" "}

</section>









<section>
  <div className="grid py-40 lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1">
    <div className="bg-[#8fa8ae] py-20 px-10 overflow-hidden relative">
      <img
        src="https://makecomponents.com/Image/overall/product/redmi.webp"
        alt="redmi"
        className="sm:hidden lg:-right-10 lge:-right-52 md:right-20 mdsm:right-10 top-20 rotate-[340deg] absolute h-[350px]"
      />
      <div>
        <h2 className="text-5xl font-semibold text-[#002b33]">Xiaomi</h2>
        <h4 className="text-2xl font-thin pt-3 text-[#002b33]">
          Redmi 9<span className="font-thin"> pictures </span>
        </h4>
        <div className="pt-6">
          <div className="flex space-x-2 pt-3">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="text-[20px] text-[#002b33]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm1 17H7V4h10v14zm-3 3h-4v-1h4v1z" />
            </svg>
            <p className="text-1xl font-normal text-[#00000c]">
              194g, 9mm thickness
            </p>
          </div>
          <div className="flex space-x-2 pt-3">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="text-[20px] text-[#002b33]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 13H5V20H19V13ZM19 11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11H19ZM6.38231 3.9681C7.92199 2.73647 9.87499 2 12 2C14.125 2 16.078 2.73647 17.6177 3.9681L19.0711 2.51472L20.4853 3.92893L19.0319 5.38231C20.2635 6.92199 21 8.87499 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 8.87499 3.73647 6.92199 4.9681 5.38231L3.51472 3.92893L4.92893 2.51472L6.38231 3.9681ZM9 9C8.44772 9 8 8.55228 8 8C8 7.44772 8.44772 7 9 7C9.55228 7 10 7.44772 10 8C10 8.55228 9.55228 9 9 9ZM15 9C14.4477 9 14 8.55228 14 8C14 7.44772 14.4477 7 15 7C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9Z" />
            </svg>
            <p className="text-1xl font-normal text-[#00000c]">
              Android 10, MIUI 12
            </p>
          </div>
          <div className="flex space-x-2 pt-3">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="text-[20px] text-[#002b33]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M18 4v16H6V8.83L10.83 4H18m0-2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z" />
            </svg>
            <p className="text-1xl font-normal text-[#00000c]">
              64GB/128GB storage
            </p>
          </div>
          <div className="flex space-x-2 pt-3">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="text-[20px] text-[#002b33]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z" />
            </svg>
            <p className="text-1xl font-normal text-[#00000c]">
              Released 2020, August 31
            </p>
          </div>
        </div>
        <button className="mt-6 text-2xl text-[#f2f2f2] hover:bg-[#002b3373] bg-[#002b33] py-2 px-16 rounded-full">
          $ 138
        </button>
      </div>
    </div>
    <div className="bg-[#ff9580] py-20 px-10 overflow-hidden relative">
      <img
        src="https://makecomponents.com/Image/overall/product/apple.webp"
        alt="apple"
        className="sm:hidden lg:-right-10 lge:-right-52 md:right-10 mdsm:right-10 top-20 rotate-[340deg] absolute h-[350px]"
      />
      <div>
        <h2 className="text-5xl font-semibold text-[#151515]">
          Apple
          <span className="text-2xl font-normal text-[#151515]">(iphone)</span>
        </h2>
        <h4 className="text-2xl font-thin pt-3 text-[#151515]">15 Pro max</h4>
        <div className="pt-6">
          <div className="flex space-x-2 pt-3">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="text-[20px] text-[#330800]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm1 17H7V4h10v14zm-3 3h-4v-1h4v1z" />
            </svg>
            <p className="text-1xl font-normal text-[#00000c]">
              221g, 8.3mm thickness
            </p>
          </div>
          <div className="flex space-x-2 pt-3">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[22px] text-[#330800]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.286 7.008c-3.216 0 -4.286 3.23 -4.286 5.92c0 3.229 2.143 8.072 4.286 8.072c1.165 -.05 1.799 -.538 3.214 -.538c1.406 0 1.607 .538 3.214 .538s4.286 -3.229 4.286 -5.381c-.03 -.011 -2.649 -.434 -2.679 -3.23c-.02 -2.335 2.589 -3.179 2.679 -3.228c-1.096 -1.606 -3.162 -2.113 -3.75 -2.153c-1.535 -.12 -3.032 1.077 -3.75 1.077c-.729 0 -2.036 -1.077 -3.214 -1.077z" />
              <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
            </svg>
            <p className="text-1xl font-normal text-[#00000c]">
              iOS 17, up to iOS 17.5.1
            </p>
          </div>
          <div className="flex space-x-2 pt-3">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="text-[20px] text-[#330800]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M18 4v16H6V8.83L10.83 4H18m0-2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z" />
            </svg>
            <p className="text-1xl font-normal text-[#00000c]">
              256GB/512GB/1TB storage
            </p>
          </div>
          <div className="flex space-x-2 pt-3">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="text-[20px] text-[#330800]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z" />
            </svg>
            <p className="text-1xl font-normal text-[#00000c]">
              Released 2023, September 22
            </p>
          </div>
        </div>
        <button className="mt-6 text-2xl text-[#f2f2f2] hover:bg-[#6d23156b] bg-[#330800] py-2 px-16 rounded-full">
          $ 999
        </button>
      </div>
    </div>
  </div>
</section>




<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
        <div className="mx-auto max-w-md text-center lg:text-left">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Watches
            </h2>
            <p className="mt-4 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              rerum quam amet provident nulla error!
            </p>
          </header>
          <a
            href="#"
            className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
          >
            Shop All
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 lg:py-8">
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <a href="#" className="group block">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                alt=""
                className="aspect-square w-full rounded object-cover"
              />
              <div className="mt-3">
                <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Simple Watch
                </h3>
                <p className="mt-1 text-sm text-gray-700">$150</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="group block">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                alt=""
                className="aspect-square w-full rounded object-cover"
              />
              <div className="mt-3">
                <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Simple Watch
                </h3>
                <p className="mt-1 text-sm text-gray-700">$150</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>




<div className="bg-gray-200 w-screen p-8 sm:p-16 dark:bg-gray-900">
  <div className="p-4 mb-4 text-lg text-center leading-tight first-letter:capitalize font-medium dark:text-gray-100">
    <h3>hover through the cards to see margic</h3>
  </div>
  <div className="mx-auto w-fit grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
    {/* card */}
    <div className="relative group bg-gray-200 h-[400px] shadow-lg rounded-2xl overflow-hidden">
      <img
        className="w-full h-full group-hover:h-64 object-cover rounded-2xl transition-all delay-150 duration-300 ease"
        src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f014625e-1a1d-4944-8395-46a07841a794/JORDAN+SPIZIKE+LOW.png"
      />
      <div className="bg-gray-100 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease dark:bg-gray-700">
        <div className="p-6">
          <div className="capitalize flex items-center justify-between gap-4">
            <div>
              <h2 className="text-red-600 text-lg font-bold">
                jordan spizike low
              </h2>
              <p className="dark:text-gray-100">men's shoes</p>
            </div>
            <div>
              <p className="text-3xl font-bold dark:text-gray-100">$160</p>
            </div>
          </div>
          <div className="block mt-4">
            <div className="absolute bottom-2 left-5">
              <button className="bg-red-600 text-gray-100 font-medium py-2.5 px-4 rounded-xl opacity-90 hover:opacity-100">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end card */}
    {/* card */}
    <div className="relative group bg-gray-200 h-[400px] shadow-lg rounded-2xl overflow-hidden">
      <img
        className="w-full h-full group-hover:h-64 object-cover rounded-2xl transition-all delay-150 duration-300 ease"
        src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/362cced6-125a-4354-a6e0-f56e747ce4d6/AIR+JORDAN+6+RETRO.png"
      />
      <div className="bg-gray-100 dark:bg-gray-700 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease">
        <div className="p-6">
          <div className="capitalize flex items-center justify-between gap-4">
            <div>
              <h2 className="text-red-600 text-lg font-bold">
                Air Jordan 6 Retro
              </h2>
              <p className="dark:text-gray-100">men's shoes</p>
            </div>
            <div>
              <p className="text-3xl font-bold dark:text-gray-100">$200</p>
            </div>
          </div>
          <div className="block mt-4">
            <div className="absolute bottom-2 left-5">
              <button className="bg-red-600 text-gray-100 font-medium py-2.5 px-4 rounded-xl opacity-90 hover:opacity-100">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end card */}
    {/* card */}
    <div className="relative group bg-gray-200 h-[400px] shadow-lg rounded-2xl overflow-hidden">
      <img
        className="w-full h-full group-hover:h-64 object-cover rounded-2xl transition-all delay-150 duration-300 ease"
        src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/77c98012-1e1a-4d57-8a69-162af8874e58/JORDAN+MVP.png"
      />
      <div className="bg-gray-100 dark:bg-gray-700 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease">
        <div className="p-6">
          <div className="capitalize flex items-center justify-between gap-4">
            <div>
              <h2 className="text-red-600 text-lg font-bold">Jumpman MVP</h2>
              <p className="dark:text-gray-100">men's shoes</p>
            </div>
            <div>
              <p className="text-3xl font-bold dark:text-gray-100">$165</p>
            </div>
          </div>
          <div className="block mt-4">
            <div className="absolute bottom-2 left-5">
              <button className="bg-red-600 text-gray-100 font-medium py-2.5 px-4 rounded-xl opacity-90 hover:opacity-100">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end card */}
  </div>
</div>
<div className="bg-gray-200 dark:bg-gray-800 flex items-center p-8">
  <div className="py-8 px-4 mx-auto max-w-screen-xl h-screen lg:py-16 lg:px-6">
    {/* blog */}
    <div className="bg-white w-96 p-4 border-2 border-gray-300 dark:border-gray-500 shadow-lg rounded-xl dark:bg-slate-700">
      {/* image wrapper */}
      <div>
        <a href="#">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MTk1OTg4Njd8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="image"
          />
        </a>
      </div>
      {/* image wrapper end */}
      {/* tag */}
      <div className="capitalize text-purple-900 font-semibold my-4 bg-purple-200 w-fit px-3 rounded-lg">
        <p>article</p>
      </div>
      {/* tag end */}
      {/* article heading */}
      <div className="text-2xl font-bold my-2 dark:text-white">
        <a href="#">
          <h2>Getting started with tailwind</h2>
        </a>
      </div>
      {/* article heading end */}
      {/* article text */}
      <div className="dark:text-gray-400">
        <p>
          Getting started with Tailwind CSS is easy: install it via npm,
          configure your settings, and start building responsive, utility-first
          designs with minimal custom CSS.
        </p>
      </div>
      {/* article text end */}
      {/* blogger */}
      <div className="flex items-cente">
        {/* blogger img */}
        <div className="mt-4">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1624188327913-e0c59aaaa3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxibGFjayUyMG1hbnxlbnwwfDB8fHwxNzE5NjAxMzQ2fDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="image"
          />
        </div>
        {/* blogger img end */}
        {/* blogger details */}
        <div className="block mt-3.5">
          {/* blogger name */}
          <div className="capitalize text-lg font-semibold pl-4 dark:text-white">
            <h3>robert chunga</h3>
          </div>
          {/* blogger name end */}
          {/* blog date */}
          <div className="capitalize text-sm text-gray-400 pl-4">
            <p>Aug 15, 2021 · 16 min read</p>
          </div>
          {/* blog date end */}
        </div>
        {/* blogger details end */}
      </div>
      {/* blogger end */}
    </div>
    {/* blog end */}
  </div>
</div>















<div className="w-full flex flex-col md:flex-row py-24 dark:bg-gray-800">
  <div className="flex flex-col w-[90%] lg:w-4/5 2xl:w-3/5 mx-auto">
    <div className="w-full md:w-4/5 md:mx-auto text-center pt-3 px-4 md:!px-0 text-center">
      <h1 className="text-3xl mt-2 md:text-4xl font-semibold text-gray-800">
        The <span className="text-emerald-600"> Feature</span> component
      </h1>
      <p className="text-xl font-thin mb-4 line-clamp-4 mt-4 md:line-clamp-none text-gray-500">
        You can copy and paste it or modify however you want. Feel free to name
        the author in a hidden remark or to set the components as favorite.
        Optional you can you can contact the author and say thanks by send a
        message.
      </p>
    </div>
    <div className="flex flex-col md:flex-row w-full">
      <div className="basis-1/3 w-full border border-gray-100 dark:!border-gray-600 rounded-md pr-0 md:mr-4 mt-6">
        <div className="flex flex-col relative">
          {/* Image (c) by: https://unsplash.com/de/@vojtechbruzek */}
          <img
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full relative z-10 max-h-80"
            title=""
            alt=""
          />
          <div className="absolute z-20 bg-emerald-600 uppercase px-3 py-1 top-3 right-3 text-white text-sm">
            Wifi — TV (Cable)
          </div>
        </div>
        <div className="flex flex-col px-4">
          <p className="text-sm mt-3 text-gray-300 dark:text-gray-600 font-semibold">
            Saison room
          </p>
          <h1 className="text-2xl my-2 md:text-3xl font-bold text-gray-600 ">
            <span className="text-emerald-600">Single</span> room
          </h1>
          <p className="text-sm mb-3 line-clamp-3 hover:line-clamp-none text-gray-500 ">
            You have the option of canceling by 6 pm on the day of arrival. Dogs
            must be requested in advance. The max lines is set to three and all
            over are invisible. Hover with your mouse or push with a finger on
            your mobile device on the text to show all lines.
          </p>
        </div>
        <div className="flex flex-row py-3 px-4 border-t border-gray-100 dark:!border-gray-600">
          <div className="w-1/2 flex flex-row dark:text-gray-400">
            <span className="mr-1">$</span>
            <span>89.00 ¬ Night</span>
          </div>
          <div className="w-1/2 text-yellow-400 text-right font-semibold">
            ☆☆☆☆<span className="text-gray-500 font-normal">☆</span>
          </div>
        </div>
      </div>
      <div className="basis-1/3 w-full border border-gray-100 dark:!border-gray-600 rounded-md pr-0 md:mx-4 mt-6">
        <div className="flex flex-col relative">
          {/* Image (c) by: https://unsplash.com/de/@vojtechbruzek */}
          <img
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full relative z-10 max-h-80"
            title=""
            alt=""
          />
          <div className="absolute z-20 bg-emerald-600 uppercase px-3 py-1 top-3 right-3 text-white text-sm">
            Wifi — TV (Cable)
          </div>
        </div>
        <div className="flex flex-col px-4">
          <p className="text-sm mt-3 text-gray-300 dark:text-gray-600 font-semibold">
            Saison room
          </p>
          <h1 className="text-2xl my-2 md:text-3xl font-bold text-gray-600 ">
            <span className="text-emerald-600">Love</span> Suite
          </h1>
          <p className="text-sm mb-3 line-clamp-3 hover:line-clamp-none text-gray-500 ">
            In this suite there is a double bed and a bottle of sparkling wine
            on request at check-in. The max lines is set to three and all over
            are invisible. Hover with your mouse or push with a finger on your
            mobile device on the text to show all lines.
          </p>
        </div>
        <div className="flex flex-row py-3 px-4 border-t border-gray-100 dark:!border-gray-600">
          <div className="basis-1/2 flex flex-row dark:text-gray-400">
            <span className="mr-1">$</span>
            <span>119.00 ¬ Night</span>
          </div>
          <div className="basis-1/2 text-yellow-400 text-end font-semibold">
            ☆☆☆<span className="text-gray-500 font-normal">☆☆</span>
          </div>
        </div>
      </div>
      <div className="basis-1/3 w-full border border-gray-100 dark:!border-gray-600 rounded-md pr-0 md:ml-4 mt-6">
        <div className="flex flex-col relative">
          {/* Image (c) by: https://unsplash.com/de/@vojtechbruzek */}
          <img
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full relative z-10 max-h-80"
            title=""
            alt=""
          />
          <div className="absolute z-20 bg-emerald-600 uppercase px-3 py-1 top-3 right-3 text-white text-sm">
            Wifi — TV (Sky)
          </div>
        </div>
        <div className="flex flex-col px-4">
          <p className="text-sm mt-3 text-gray-300 dark:text-gray-600 font-semibold">
            Premium room
          </p>
          <h1 className="text-2xl my-2 md:text-3xl font-bold text-gray-600 ">
            <span className="text-emerald-600">Individual</span> room
          </h1>
          <p className="text-sm mb-3 line-clamp-3 hover:line-clamp-none text-gray-500 ">
            We add up to two more beds. Crib possible. Breakfast must be ordered{" "}
            <u>separately</u>. The max lines is set to three and all over are
            invisible. Hover with your mouse or push with a finger on your
            mobile device on the text to show all lines.
          </p>
        </div>
        <div className="flex flex-row py-3 px-4 border-t border-gray-100 dark:!border-gray-600">
          <div className="w-1/2 flex flex-row dark:text-gray-400">
            <span className="mr-1">$</span>
            <span>149.00 ¬ Night</span>
          </div>
          <div className="w-1/2 text-yellow-400 text-end font-semibold">
            ☆☆☆☆☆
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<Footer/>
</>
  )
}

export default page