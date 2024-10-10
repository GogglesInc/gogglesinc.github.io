import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    username: "@johndoe",
    quote:
      '"GogglesInc team\'s expertise in cloud computing solutions has been invaluable to our business. Their ability to scale our infrastructure seamlessly has enabled us to achieve significant growth."',
    img: "",
  },
  {
    name: "Jane Smith",
    username: "@janesmith",
    quote:
      '"I was impressed by GogglesInc\'s ability to provide a customized solution that perfectly met our unique needs. Their team was knowledgeable, responsive, and always willing to go the extra mile."',
    img: "",
  },
  {
    name: "Alex Lee",
    username: "@alexlee",
    quote:
      '"GogglesInc\'s AI & Machine Learning services have revolutionized our operations. Their insights and predictions have helped us make data-driven decisions that have significantly improved our bottom line."',
    img: "",
  },
  {
    name: "Sarah Kim",
    username: "@sarahkim",
    quote:
      '"The cybersecurity services provided by GogglesInc have given us peace of mind. Their team is always on top of the latest threats and has helped us protect our sensitive data."',
    img: "",
  },
  {
    name: "David Chen",
    username: "@davidchen",
    quote:
      '"GogglesInc\'s custom software development team was able to create a solution that exceeded our expectations. Their attention to detail and commitment to quality were exceptional."',
    img: "",
  },
  {
    name: "Emily Wang",
    username: "@emilywang",
    quote:
      "\"I've been using GogglesInc's CMS platform for years, and I couldn't be happier. It's easy to use, highly customizable, and has helped us streamline our content management process.\"",
    img: "",
  },
  {
    name: "Michael Johnson",
    username: "@michaeljohnson",
    quote:
      "\"GogglesInc's cloud computing solutions have allowed us to reduce our IT costs and improve our scalability. I highly recommend their services.",
    img: '"',
  },
  {
    name: "Olivia Taylor",
    username: "@oliviataylor",
    quote:
      '"The GogglesInc team was extremely helpful in guiding us through the process of migrating our data to the cloud. Their expertise and support were invaluable.',
    img: '"',
  },
  {
    name: "Noah Brown",
    username: "@noahbrown",
    quote:
      "\"I've been working with GogglesInc for years, and I've always been impressed by their professionalism and commitment to customer satisfaction.",
    img: '"',
  },
  {
    name: "Sophia Martinez",
    username: "@sophiaMartinez",
    quote:
      "\"GogglesInc's AI & Machine Learning capabilities have enabled us to develop innovative new products and services. Their expertise has been instrumental to our success.",
    img: '"',
  },
  {
    name: "Ethan Davis",
    username: "@ethandavis",
    quote:
      "\"GogglesInc's team went above and beyond to ensure that our project was completed on time and within budget. Their dedication and hard work are truly commendable.",
    img: '"',
  },
  {
    name: "Maria Garcia",
    username: "@mariagarcia",
    quote:
      '"GogglesInc has been a true partner in helping us grow our business. Their team is always responsive and willing to go the extra mile to ensure our success.',
    img: '"',
  },
  {
    name: "Thomas Baker",
    username: "@thomasbaker",
    quote:
      "\"I've been working with GogglesInc for years, and I've always been impressed by their technical expertise and innovative solutions.",
    img: '"',
  },
  {
    name: "Ashley Clark",
    username: "@ashleyclark",
    quote:
      '"The GogglesInc team is always available to answer our questions and provide support. Their customer service is top-notch.',
    img: '"',
  },
  {
    name: "Christopher Lee",
    username: "@christopherlee",
    quote:
      "\"GogglesInc's pricing is very competitive, and their services have exceeded our expectations. I would highly recommend them to other businesses.",
    img: '"',
  },
  {
    name: "Jennifer Lin",
    username: "@jenniferlin",
    quote:
      '"GogglesInc has helped us streamline our operations and improve our efficiency. Their solutions have been a game-changer for our business.',
    img: '"',
  },
  {
    name: "Daniel Lee",
    username: "@daniellee",
    quote:
      "\"GogglesInc's team was able to quickly understand our complex needs and provide a tailored solution that met our requirements exactly.",
    img: '"',
  },
  {
    name: "Emily Johnson",
    username: "@emilyjohnson",
    quote:
      "\"I've been using GogglesInc's services for years, and I've always been impressed by their commitment to customer satisfaction. They always go the extra mile to ensure we are happy with their services.\"",
    img: "",
  },
  {
    name: "Olivia Smith",
    username: "@oliviasmith",
    quote:
      '"GogglesInc\'s AI & Machine Learning capabilities have helped us gain valuable insights into our customer data. This has allowed us to make more informed business decisions."',
    img: "",
  },
  {
    name: "Noah Carter",
    username: "@noahcarter",
    quote:
      '"The GogglesInc team is always available to provide support and guidance. Their expertise has been invaluable to our business.',
    img: '"',
  },
  {
    name: "Sophia Davis",
    username: "@sophia davis",
    quote:
      "\"I've been using GogglesInc's cybersecurity services for years, and I've never had a security breach. Their team is always on top of the latest threats and has helped us protect our sensitive data.\"",
    img: "",
  },
  {
    name: "Ethan Baker",
    username: "@ethanbaker",
    quote:
      "\"GogglesInc's cloud computing solutions have allowed us to scale our business without having to worry about managing our own infrastructure. This has saved us time and money.",
    img: '"',
  },
  {
    name: "William Hill",
    username: "@williamhill",
    quote:
      "\"GogglesInc's team has been incredibly helpful in guiding us through the process of migrating our IT infrastructure to the cloud. Their expertise and support were invaluable.",
    img: '"',
  },
  {
    name: "Sarah Johnson",
    username: "@sarahjohnson",
    quote:
      "\"I've been impressed by GogglesInc's ability to deliver results on time and within budget. Their team is always professional and efficient.",
    img: '"',
  },
  {
    name: "Alex Smith",
    username: "@alexsmith",
    quote:
      "\"GogglesInc's AI & Machine Learning solutions have helped us gain a competitive edge in our industry. Their expertise has been instrumental to our success.",
    img: '"',
  },
  {
    name: "Emily Davis",
    username: "@emilydavis",
    quote:
      "\"I've been using GogglesInc's cybersecurity services for years, and I've always felt confident in the security of my data. Their team is always up-to-date on the latest threats and takes proactive measures to protect our systems.\"",
    img: "",
  },
  {
    name: "Michael Lee",
    username: "@michaellee",
    quote:
      '"GogglesInc\'s custom software development team was able to create a solution that perfectly met our specific needs. Their attention to detail and commitment to quality were exceptional."',
    img: "",
  },
  {
    name: "Olivia Carter",
    username: "@oliviacarter",
    quote:
      "\"I've been using GogglesInc's CMS platform for years, and I love how easy it is to use and customize. It has helped us streamline our content management process and improve our website's performance.\"",
    img: "",
  },
  {
    name: "Noah Hill",
    username: "@noahhill",
    quote:
      '"GogglesInc\'s cloud computing solutions have allowed us to reduce our IT costs and improve our scalability. I highly recommend their services to any business looking to modernize their technology infrastructure."',
    img: "",
  },
];

export default function Testimonials() {
  const [isVisible, setVisible] = useState(false);

  const content = isVisible ? testimonials : testimonials.slice(0, 6);

  return (
    <div className="bg-background py-10 sm:py-12 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-text-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-text-900 sm:text-4xl">
            We have worked with thousands of amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {content.map((items, index) => (
              <div
                key={index}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-background-50 p-8 text-sm leading-6 shadow-lg">
                  <blockquote className="text-text-900">
                    <p>{items.quote}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex gap-x-4 text-center">
                    <img
                      // src={items.img}
                      src={`https://picsum.photos/40/40?random=${index}`}
                      alt=""
                      loading="lazy"
                      className="h-10 w-10 rounded-full bg-background-900"
                    />
                    <div>
                      <div className="font-semibold text-text-900">
                        {items.name}
                      </div>
                      <div className="text-text-600">{items.username}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setVisible(!isVisible)}
          className={
            "mx-auto mt-6 w-fit rounded-md bg-background-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-background-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500 active:bg-background-400"
          }
        >
          {isVisible ? "Show less" : "Show more"}
        </motion.button>
      </div>
    </div>
  );
}
