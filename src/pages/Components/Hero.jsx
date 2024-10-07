import { Link } from "react-router-dom";

("use client");

export default function Hero() {
  return (
    <div className="relative overflow-x-hidden bg-background pb-10 sm:pb-12 lg:pb-16">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-text ring-1 ring-accent-900/10 hover:ring-accent-900/20">
              Announcing our next round of funding.{" "}
              <Link to="/" className="font-semibold text-text-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="flex flex-col gap-5 text-4xl font-bold tracking-tight text-text-900 sm:text-5xl md:text-6xl">
              Empowering Businesses
              <span className="text-2xl sm:text-3xl md:text-4xl">
                {" "}
                with Cutting-Edge Technology
              </span>
            </h1>
            <p className="mt-6 text-base leading-8 text-text-600 sm:text-lg">
              Unlocking your business&lsquo;s full potential with innovative
              technology.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/pricing">
                <button className="rounded-md bg-background-500 px-3.5 py-2.5 text-sm font-semibold text-[#ccd5ff] shadow-sm hover:bg-background-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500 active:bg-background-300">
                  Get started
                </button>
              </Link>
              <Link
                to="/about"
                className="text-sm font-semibold leading-6 text-text-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-20 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
