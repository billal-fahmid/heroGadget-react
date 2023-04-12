import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const {error,state} = useRouteError();
  // console.log(error);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-3xl text-blue-600 lg:text-6xl">
              404
            </h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page{state ? state :'not found'}
              {/* {error.statusText} */}
            </h6>

            <p className="mb-4 text-center text-gray-500 md:text-lg">
              {/* {error.message ? error.message : 'not found'} */}
            </p>

            <Link
              to="/"
              className="px-5 py-2 rounded-md text-blue-100 bg-blue-600 hover:bg-blue-700"
            >
              Go To home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}