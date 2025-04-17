import { toast } from "react-toastify";

import { Link, useParams } from "react-router-dom";
import React, { lazy, Suspense, useEffect } from "react";
import modules from "../data/modules";
import CircularProgress from "@mui/material/CircularProgress";
import { ProgressCircle } from "../components/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchModuleProgress } from "../redux/moduleProgressSlice";

// Lazy load each module
const Module1 = lazy(() => import("../modules/Module1"));
const Module2 = lazy(() => import("../modules/Module2"));
const Module3 = lazy(() => import("../modules/Module3"));
const Module4 = lazy(() => import("../modules/Module4"));
const Module5 = lazy(() => import("../modules/Module5"));
const Module6 = lazy(() => import("../modules/Module6"));
const Module7 = lazy(() => import("../modules/Module7"));
const Module9 = lazy(() => import("../modules/Module9"));
const Module10 = lazy(() => import("../modules/Module10"));
const Module11 = lazy(() => import("../modules/Module11"));
const Module8 = lazy(() => import("../modules/Module8"));

const moduleComponents = [
  Module1,
  Module2,
  Module3,
  Module4,
  Module5,
  Module6,
  Module7,
  Module9,
  Module10,
  Module11,
  Module8,
];

const ModulePage = ({ id }) => {
  const index = parseInt(id, 10) - 1;
  const SelectedModule = moduleComponents[index];

  if (!SelectedModule)
    return <p className="text-center mt-10">Module not found</p>;

  return (
    <Suspense
      fallback={
        <p className="text-center mt-10">
          <CircularProgress />
        </p>
      }
    >
      <SelectedModule title={modules[index].title} />
    </Suspense>
  );
};

export const ModuleWrapper = () => {
  const { id } = useParams();
  return <ModulePage id={id} />;
};

const Home = ({ user }) => {
  const data = useSelector((state) => state.moduleProgress);
  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.email) dispatch(fetchModuleProgress(user.email));
  }, [dispatch, user?.email]);

  const displayError = (message) => {
    console.log(message);
    if (user) return;
    toast.error(message, {
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="content">
      <h1 className="title">Cybersecurity in Medical IoT</h1>
      <p className="description">
        Welcome to a hands-on training and awareness program designed for
        medical professionals, biomedical engineers, and healthcare IT staff.
        Navigate through these interactive modules to know about real-world
        risks and vulnerabilities and learn how to prevent them .
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <div
            key={index}
            className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Link
              onClick={() =>
                displayError("Please login to access the content.")
              }
              to={`/module/${index + 1}`}
              className="block h-full w-full"
            >
              <div className="flex justify-between">
                <h2 className=" text-xl font-semibold text-gray-800 mb-2">
                  Module {index + 1}
                </h2>
                <ProgressCircle moduleName={`module${index + 1}`} />
              </div>
              <p className="text-gray-600 mb-4">{module.title}</p>

              <div className="relative">
                <div className="text-blue-600 font-medium group-hover:-translate-y-2 transition-transform duration-300">
                  Learning Objectives
                </div>

                {Array.isArray(module.objectives) && (
                  <div className="mt-2 max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100">
                    <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm">
                      {module.objectives.map((obj, i) => (
                        <li key={i}>{obj}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
