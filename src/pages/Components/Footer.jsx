import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-background">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="grid xl:grid-cols-3 xl:gap-8">
          <img src="/goggles-svg.svg" alt="Goggles Inc." className="size-7" />
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-text-900">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      to={""}
                      className="text-sm leading-6 text-text-600 hover:text-text-900"
                    >
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={""}
                      className="text-sm leading-6 text-text-600 hover:text-text-900"
                    >
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={""}
                      className="text-sm leading-6 text-text-600 hover:text-text-900"
                    >
                      Commerce
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={""}
                      className="text-sm leading-6 text-text-600 hover:text-text-900"
                    >
                      Insights
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-text-900/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-center"></div>
        <div className="mt-8 flex border-t border-text-900/10 pt-8 md:items-center md:justify-between"></div>
      </div>
    </footer>
  );
}
