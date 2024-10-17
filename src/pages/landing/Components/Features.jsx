import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { useInView } from "framer-motion";

const features = [
  {
    name: "Cloud Computing.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Data Analytics.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "AI & Machine Learning.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

async function getFeatureImage() {
  return new Promise((resolve) => {
    fetch("https://picsum.photos/912/540")
      .then((data) => {
        resolve(data.url);
      })
      .catch(console.error);
  });
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "100%",
    amount: "some",
  });

  const { data } = useQuery({
    queryKey: ["featureimage"],
    queryFn: getFeatureImage,
    refetchOnWindowFocus: false,
    enabled: !!isInView,
    staleTime: Infinity,
  });

  return (
    <div className="flex min-h-screen place-items-center overflow-hidden bg-background py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-text-600">
                Deploy faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-text-900 sm:text-4xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg leading-8 text-text-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-text-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-text-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-text-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          {data ? (
            <img
              alt=""
              src={data && data?.url}
              loading="lazy"
              className="aspect-video w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-background-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          ) : (
            <div className="aspect-video w-[48rem] max-w-none animate-pulse rounded-xl bg-background-200 shadow-xl ring-1 ring-background-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"></div>
          )}
        </div>
      </div>
    </div>
  );
}
