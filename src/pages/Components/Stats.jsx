const stats = [
  { name: "New developers annually", value: "492,000+" },
  { name: " Organizations on the platform", value: "97,000+" },
  { name: "Uptime guaranteed", value: "99.99%" },
];

export default function Stats() {
  return (
    <div className="bg-background py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-text-900 sm:text-4xl">
            Trusted by developers worldwide
          </h2>
          <p className="mt-4 text-lg leading-8 text-text-600">
            Lorem ipsum dolor sit amet consect adipisicing possimus.
          </p>
        </div>
        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col bg-accent-400/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-text-600">
                {stat.name}
              </dt>
              <dd className="-order-last text-3xl font-semibold tracking-tight text-text-900">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
