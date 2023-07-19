import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#f8f4f2] py-1 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-none">
              <label htmlFor="my-drawer" className="btn btn-link text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div>
              <Link to="/">
                <h3 className="text-2xl font-semibold text-teal-800 font-mono">
                  House Hunter
                </h3>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <div>
                <form className="flex">
                  <input
                    className="input input-sm rounded-none input-bordered focus:outline-0 rounded-l-md"
                    type="text"
                  />
                  <input
                    type="submit"
                    value={"Search"}
                    className="input input-sm rounded-none rounded-r-md bg-sky-500 text-white  font-semibold"
                  />
                </form>
              </div>
              <div className="dropdown dropdown-end dropdown-hover">
                <label
                  tabIndex={0}
                  className="btn btn-sm rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500"
                >
                  Filter
                </label>
                <div
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md"
                >
                  <div>
                    <div className="flex gap-4">
                      <div>
                        <h3 className="p-1 rounded-md text-md text-slate-700 rounded-sm font-semibold bg-sky-200">
                          City
                        </h3>
                        <hr />
                        <div>
                          <p className="flex">
                            <input type="checkbox" name="" id="" />{" "}
                            <span>Dhaka</span>
                          </p>
                          <p className="flex">
                            <input type="checkbox" name="" id="" />{" "}
                            <span>Chottogram</span>
                          </p>
                          <p className="flex">
                            <input type="checkbox" name="" id="" />{" "}
                            <span>Rajshahi</span>
                          </p>
                          <p className="flex">
                            <input type="checkbox" name="" id="" />{" "}
                            <span>Barishal</span>
                          </p>
                          <p className="flex">
                            <input type="checkbox" name="" id="" />{" "}
                            <span>Shylet</span>
                          </p>
                          <p className="flex">
                            <input type="checkbox" name="" id="" />{" "}
                            <span>Cumillah</span>
                          </p>
                          <p className="flex">
                            <input type="checkbox" name="" id="" />{" "}
                            <span>Mymenshing</span>
                          </p>
                        </div>
                      </div>
                      <div>
                        <h3 className="p-1 rounded-md text-md text-slate-700 rounded-sm font-semibold bg-sky-200">
                          Bedrooms
                        </h3>
                        <hr />
                        <input
                          className="input input-bordered input-xs rounded-sm mt-2 w-20"
                          type="number"
                        />
                      </div>
                      <div>
                        <h3 className="p-1 rounded-md text-md text-slate-700 rounded-sm font-semibold bg-sky-200">
                          Bathrooms
                        </h3>
                        <input
                          className="input input-bordered input-xs rounded-sm mt-2 w-20"
                          type="number"
                        />
                        <hr />
                      </div>
                      <div>
                        <h3 className="p-1 rounded-md text-md text-slate-700 rounded-sm font-semibold bg-sky-200">
                          Availability
                        </h3>
                        <hr />
                      </div>
                      <div>
                        <h3 className="p-1 rounded-md text-md text-slate-700 rounded-sm font-semibold bg-sky-200">
                          Rent per month
                        </h3>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/sign-up">
              <button className="btn btn-sm rounded-md text-white bg-red-700 mr-2 hover:bg-red-800">
                Sign up
              </button>
            </Link>
            <Link to="/login">
              <button className="btn btn-sm rounded-md text-white bg-violet-800 mr-2 hover:bg-violet-900">
                Login
              </button>
            </Link>
            <div className="dropdown dropdown-bottom dropdown-end mt-1">
              <label tabIndex={0}>
                <div className="avatar">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    {/* <FcBusinessman className="text-4xl -ml-[2px]" /> */}ddd
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <Link to="wish-list">
                  <li className="font-semibold bg-gray-100 rounded-md mb-1">
                    <a>Wish List</a>
                  </li>
                </Link>
                <Link to="reading">
                  <li className="font-semibold bg-gray-100 rounded-md mb-1">
                    <a>Reading</a>
                  </li>
                </Link>
                <Link to="finished">
                  <li className="font-semibold bg-gray-100 rounded-md mb-1">
                    <a>Finished</a>
                  </li>
                </Link>
                <li
                  onClick={""}
                  className="btn text-white btn-sm w-full bg-teal-700 hover:bg-teal-600 mt-1"
                >
                  LogOut
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
