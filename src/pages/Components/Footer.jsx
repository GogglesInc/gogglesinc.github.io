import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-background">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="grid xl:grid-cols-3 xl:gap-8">
          <Link to="/">
            <span className="sr-only">Goggles Inc.</span>
            <img
              alt=""
              src="/goggles-svg.svg"
              loading="lazy"
              className="aspect-square max-w-40 rounded-2xl"
            />
          </Link>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-text-900">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      to="/analytics"
                      className="text-sm leading-6 text-text-600 hover:text-text-900"
                    >
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/engagement"
                      className="text-sm leading-6 text-text-600 hover:text-text-900"
                    >
                      Engagement
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/security"
                      className="text-sm leading-6 text-text-600 hover:text-text-900"
                    >
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/integrations"
                      className="text-sm leading-6 text-text-600 hover:text-text-900"
                    >
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/automations"
                      className="text-sm leading-6 text-text-600 hover:text-text-900"
                    >
                      Automations
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-text-900">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      to="/pricing"
                      className="text-sm leading-6 text-text-600 hover:text-text-900"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://stats.uptimerobot.com/CSkSxODLo0"
                      target="_blank"
                      className="text-sm leading-6 text-text-600 hover:text-text-900"
                    >
                      API status
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-text-900">
                  Comapany
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      to="/about"
                      className="text-sm leading-6 text-text-600 hover:text-text-900"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="text-sm leading-6 text-text-600 hover:text-text-900"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-text-900">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      to="https://github.com/GogglesInc/gogglesinc.github.io/blob/main/LICENSE"
                      target="_blank"
                      className="text-sm leading-6 text-text-600 hover:text-text-900"
                    >
                      Lisence
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-text-900/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-text-900">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-sm leading-6 text-text-600">
              Get the latest news and updates delivered straight to your inbox.
            </p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required={true}
              placeholder="Enter your email"
              autoComplete="email"
              className="w-full min-w-0 appearance-none rounded-md border-0 bg-background-100 px-3 py-1.5 text-base text-text-900 shadow-sm ring-1 ring-inset ring-background-200 placeholder:text-text-900 focus:ring-2 focus:ring-inset focus:ring-accent-600 sm:w-56 sm:text-sm sm:leading-6"
            />
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-background-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-background-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-600"
              >
                Subscribe
              </motion.button>
            </div>
          </form>
        </div>
        <div className="mt-8 flex border-t border-text-900/10 pt-8 md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link
              to="https://github.com/gogglesinc/gogglesinc.github.io/"
              target="_blank"
              className="text-text-400 hover:text-text-500"
            >
              <span className="sr-only">GitHub</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <p className="mt-8 text-xs leading-5 text-text-500 md:order-1 md:mt-0">
            © 2022 Goggles Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
