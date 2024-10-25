import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We offer a wide range of technology services, including cloud computing, data analytics, AI & machine learning, cybersecurity, custom software development, and CMS development platforms.",
  },
  {
    id: 2,
    question: "How do I get started?",
    answer:
      "To get started, you can contact our sales team for a consultation. We will work with you to understand your specific needs and recommend the best solutions for your business.",
  },
  {
    id: 3,
    question: "What is your pricing structure?",
    answer:
      "Our pricing is flexible and tailored to your specific requirements. We offer a variety of pricing plans, including a free plan, a Starter plan, a Pro plan, and an Enterprise plan.",
  },
  {
    id: 4,
    question: "Do you offer customization options?",
    answer:
      "Yes, we offer customization options for many of our services, including our CMS development platforms. Our team of experts can work with you to create a tailored solution that meets your unique needs.",
  },
  {
    id: 5,
    question: "What is your uptime guarantee?",
    answer:
      "We guarantee 99.99% uptime for our cloud computing services. This means that your applications will be available 24/7, ensuring minimal downtime.",
  },
  {
    id: 6,
    question: "How do I contact your support team?",
    answer:
      "You can contact our support team by email, phone, or live chat. Our team is available 24/7 to assist you with any questions or issues you may have.",
  },
];

export default function Stats() {
  return (
    <div className="bg-background py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-text-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-text-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.id} as="div" className="pt-6">
                {({ open }) => (
                  <>
                    {" "}
                    <dt>
                      <DisclosureButton className="group flex w-full items-start justify-between text-left text-text-900">
                        <span className="text-lg font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <PlusIcon className="h-6 w-6 transition-transform group-data-[open]:rotate-45" />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <AnimatePresence>
                      {open && (
                        <DisclosurePanel static as={Fragment}>
                          <motion.dd
                            initial={{ opacity: 0, y: -24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -24 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="mt-2 pr-12"
                          >
                            <p className="text-base leading-7 text-text-600">
                              {faq.answer}
                            </p>
                          </motion.dd>
                        </DisclosurePanel>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
