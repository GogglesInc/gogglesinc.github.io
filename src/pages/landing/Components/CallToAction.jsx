import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <div className="bg-accent-600">
      <div className="py-40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-50 sm:text-4xl">
            Boost your productivity.
            <br />
            Start using our services today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-text-100">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to={"/pricing"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={
                  "mx-auto w-fit rounded-md bg-text-50 px-3.5 py-2.5 text-sm font-semibold text-accent-600 shadow-sm hover:bg-text-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500 active:bg-text-200"
                }
              >
                Get started
              </motion.button>
            </Link>
            <Link
              to={"/about"}
              className="text-sm font-semibold leading-6 text-text-50"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
