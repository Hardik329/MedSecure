import React from "react";
import DualTerminal from "./DualTerminal";

const HandsOn = ({ title, tasks }) => {
  const [showTerminal, setShowTerminal] = React.useState(false);
  const [flags, setFlags] = React.useState(
    tasks?.map(() => ({ flag: "", isSubmitted: false }))
  );
  return (
    <div>
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          🧪 Hands-on Challenge
        </h2>
        <p className="mb-4">
          {title || ""} {title && " - "} Use our custom Kali Linux terminal to complete the tasks below.
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
              flags[index].isSubmitted && flags[index].flag === task.flag;

            return (
              <div key={index}>
                <label className="block mb-2 text-gray-700 ">
                  {task.label}
                </label>
                <div className="flex items-center space-x-4 w-full">
                  <input
                    type="text"
                    value={flags[index]?.flag || ""}
                    disabled={correct}
                    onChange={(e) =>
                      setFlags((prev) => {
                        console.log(index);
                        const newFlags = [...prev];
                        newFlags[index].flag = e.target.value;
                        newFlags[index].isSubmitted = false;
                        return newFlags;
                      })
                    }
                    placeholder={`Enter flag for Task ${index + 1}`}
                    className=" w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() =>
                      setFlags((prev) => {
                        const newFlags = [...prev];
                        newFlags[index].isSubmitted = true;
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
                    }  text-white px-2 py-2 rounded-md transition duration-200`}
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
          className="mt-8 cursor-pointer bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200"
        >
          {showTerminal ? "Stop Terminal" : "Start Terminal"}
        </button>

        {showTerminal && <DualTerminal kali={true} />}
      </section>
    </div>
  );
};

export default HandsOn;
