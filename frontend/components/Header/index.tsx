import styles from "./header.module.css";

export default function Header() {
  return (
    <div
      className={`${styles.header} lg:flex lg:items-center lg:justify-between`}
    >
      <div className="min-w-0 flex-1">
        <h2
          className={`${styles.headerLogo} text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight`}
        >
          MOVIECRITIC
        </h2>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="sm:ml-3">
          <button
            type="button"
            className={`${styles.btn} ${styles.outline} inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
          >
            Add new movies
          </button>
        </span>
        <span className="sm:ml-3">
          <button
            type="button"
            className={`${styles.btn} inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          >
            Add new review
          </button>
        </span>
      </div>
    </div>
  );
}
