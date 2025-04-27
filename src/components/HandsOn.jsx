import React, { useEffect } from "react";
import DualTerminal from "./DualTerminal";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchModuleProgress,
  updateModuleProgress,
} from "../redux/moduleProgressSlice";
import { useParams } from "react-router-dom";
import TerminalComponent from "./Terminal";

const HandsOn = ({ title, tasks, single }) => {
  const [showTerminal, setShowTerminal] = React.useState(false);
  const [flags, setFlags] = React.useState(
    tasks?.map(() => ({ flag: "", isSubmitted: false }))
  );
  const { id } = useParams();
  const moduleName = `module${id}`;
  const data = useSelector((state) => state.moduleProgress[moduleName] || {});
  const email = JSON.parse(localStorage.getItem("user")).email;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchModuleProgress(email));
  }, [dispatch, email]);

  useEffect(() => {
    if (data.flags) {
      // setFlags(data.flags);
      setFlags(data.flags.map((flag) => ({ ...flag })));
    }
  }, [data.flags]);

  return (
    <div>
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          🧪 Hands-on Challenge
        </h2>
        <p className="mb-4">
          {title || ""} {title && " - "} Use our custom Kali Linux terminal to
          complete the tasks below.
        </p>
        -
        {/* <ul className="list-none list-inside mb-4 text-gray-800">
          <li>🔐 Crack passwords and password hashes.</li>
        </ul> */}
        <div className="bg-yellow-100 p-3 rounded-lg border-l-4 border-yellow-400 text-sm mb-4 font-semibold">
          Note: All the required files are present in the resources folder.
          Since the folder is read-only, make a copy of the folder to play
          around with the files.
        </div>
        <div className="mt-6 space-y-6">
          {tasks?.map((task, index) => {
            let correct =
              flags[index]?.isSubmitted && flags[index]?.flag === task.flag;

            return (
              <div key={index} className="bg-gray-200 p-5 rounded-lg">
                <label className="block mb-2 text-gray-700 font-semibold text-[1.1rem]">
                  {task.label}
                </label>
                {task.commands?.map((command, i) => {
                  return (
                    <div key={i} className="mb-2">
                      <label>{command.label}</label>
                      <pre className="bg-black text-green-400 p-3 rounded-md mt-2 mb-5">
                        {command.command}
                      </pre>
                    </div>
                  );
                })}
                <div className="flex items-center space-x-4 w-full">
                  <input
                    type="text"
                    value={flags[index]?.flag || ""}
                    disabled={correct}
                    onChange={(e) =>
                      setFlags((prev) => {
                        console.log(index);
                        console.log(prev);
                        let newFlags = [...prev];
                        console.log(newFlags);
                        newFlags[index].flag = e.target.value;
                        newFlags[index].isSubmitted = false;
                        return newFlags;
                      })
                    }
                    placeholder={`Enter flag for Task ${index + 1}`}
                    className="bg-white w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() =>
                      setFlags((prev) => {
                        const newFlags = [...prev];
                        newFlags[index].isSubmitted = true;

                        dispatch(
                          updateModuleProgress({
                            email,
                            progress: data.progress,
                            moduleName,
                            data: {
                              flags: newFlags,
                            },
                          })
                        );
                        return newFlags;
                      })
                    }
                    disabled={flags[index].isSubmitted}
                    className={` cursor-pointer w-40 mt-2 ${
                      flags[index].isSubmitted
                        ? correct
                          ? "bg-[#94dc17]"
                          : "bg-red-500"
                        : "bg-blue-500"
                    }  text-white px-2 py-2 rounded-md mb-3 transition duration-200`}
                  >
                    {flags[index].isSubmitted
                      ? correct
                        ? "Correct Answer"
                        : "Incorrect"
                      : "Submit Flag"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => setShowTerminal((prev) => !prev)}
          className="mt-8 cursor-pointer bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200 mb-5"
        >
          {showTerminal ? "Stop Terminal" : "Start Terminal"}
        </button>
        {showTerminal && (single ? <TerminalComponent kali={true}/> : <DualTerminal />)}
      </section>
    </div>
  );
};

export default HandsOn;
