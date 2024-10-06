const testimonials = [
  {
    name: "John Doe",
    username: "@johndoe",
    quote:
      "GogglesInc team's expertise in cloud computing solutions has been invaluable to our business. Their ability to scale our infrastructure seamlessly has enabled us to achieve significant growth.",
    img: "",
  },
  {
    name: "Jane Smith",
    username: "@janesmith",
    quote:
      "I was impressed by GogglesInc's ability to provide a customized solution that perfectly met our unique needs. Their team was knowledgeable, responsive, and always willing to go the extra mile.",
    img: "",
  },
  {
    name: "Alex Lee",
    username: "@alexlee",
    quote:
      "GogglesInc's AI & Machine Learning services have revolutionized our operations. Their insights and predictions have helped us make data-driven decisions that have significantly improved our bottom line.",
    img: "",
  },
  {
    name: "Sarah Kim",
    username: "@sarahkim",
    quote:
      "The cybersecurity services provided by GogglesInc have given us peace of mind. Their team is always on top of the latest threats and has helped us protect our sensitive data.",
    img: "",
  },
  {
    name: "David Chen",
    username: "@davidchen",
    quote:
      "GogglesInc's custom software development team was able to create a solution that exceeded our expectations. Their attention to detail and commitment to quality were exceptional.",
    img: "",
  },
  {
    name: "Emily Wang",
    username: "@emilywang",
    quote:
      "I've been using GogglesInc's CMS platform for years, and I couldn't be happier. It's easy to use, highly customizable, and has helped us streamline our content management process.",
    img: "",
  },
  {
    name: "Michael Johnson",
    username: "@michaeljohnson",
    quote:
      "GogglesInc's cloud computing solutions have allowed us to reduce our IT costs and improve our scalability. I highly recommend their services.",
    img: "",
  },
  {
    name: "Olivia Taylor",
    username: "@oliviataylor",
    quote:
      "The GogglesInc team was extremely helpful in guiding us through the process of migrating our data to the cloud. Their expertise and support were invaluable.",
    img: "",
  },
  {
    name: "Noah Brown",
    username: "@noahbrown",
    quote:
      "I've been working with GogglesInc for years, and I've always been impressed by their professionalism and commitment to customer satisfaction.",
    img: "",
  },
  {
    name: "Sophia Martinez",
    username: "@sophiaMartinez",
    quote:
      "GogglesInc's AI & Machine Learning capabilities have enabled us to develop innovative new products and services. Their expertise has been instrumental to our success.",
    img: "",
  },
  {
    name: "Ethan Davis",
    username: "@ethandavis",
    quote:
      "GogglesInc's team went above and beyond to ensure that our project was completed on time and within budget. Their dedication and hard work are truly commendable.",
    img: "",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-background py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
            {testimonials.map((items) => (
              <div
                key={items.username}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-background-50 p-8 text-sm leading-6">
                  <blockquote className="text-text-900">
                    <p>{items.quote}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex gap-x-4 text-center">
                    <img
                      src={items.img}
                      alt=""
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
      </div>
    </div>
  );
}
