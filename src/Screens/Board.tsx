type BoardProps = {
  jobTitle: string;
  teaser?: string;
  jobDetail?: React.ReactNode;
  city?: string;
  country?: string;
  ShortUrl?: string;
};

const Board = (props: BoardProps) => {
  return (
    <section className="bg-white dark:bg-gray-900 max-w-2xl px-10 rounded-xl shadow-2xl my-2">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">
          {props.jobTitle}
        </h2>
        <h4 className="mb-2 text-xl font-light leading-none text-gray-900 md:text-lg dark:text-white">
          {props.teaser}
        </h4>
        <p className="mb-4 text-xl font-medium leading-none text-gray-900 md:text-md dark:text-white">
          9$/hour
        </p>
        <dl>
          <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
            {props.jobDetail}
          </dd>
        </dl>
        <dl className="flex items-center space-x-6">
          <div>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Country
            </dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
              {props.country}
            </dd>
          </div>
          <div>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              City
            </dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
              {props.city}
            </dd>
          </div>
        </dl>
        <div className="flex items-center space-x-4">
          <a
            href={props.ShortUrl}
            type="button"
            target="_blank"
            className="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            Apply
          </a>
        </div>
      </div>
    </section>
  );
};

export default Board;
