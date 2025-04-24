import React from "react";
import TerminalComponent from "./Terminal";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const DualTerminal = () => {
  const [value, setValue] = React.useState("0");
  const handleValue = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mt-5">
      <Tabs value={value} onChange={handleValue}>
        <Tab label="Attacker" value="0" />
        <Tab label="Defender" value="1" />
      </Tabs>

      <div
        className={`mt-4  ${
          value !== "0" && "hidden"
        }`}
      >
        <TerminalComponent kali={true} />
      </div>


      <div
        className={`mt-4 ${
          value !== "1" && "hidden"
        }`}
      >
        <TerminalComponent kali={false} />
      </div>
    </div>
  );
};

// const DualTerminal = () => {
//   return (
// <div className="mt-4 flex  mx-[-100px] rounded-lg border border-gray-300 shadow-lg">
//   <div className="w-1/2 border-gray-300 border-r pr-2">
//     <div className="text-lg font-semibold text-center mb-2">ATTACKER</div>
//     <TerminalComponent kali={true} />
//   </div>
//   <div className="w-1/2 pl-2">
//     <div className="text-lg font-semibold text-center mb-2">DEFENDER</div>
//     <TerminalComponent />
//   </div>
// </div>
//   );
// };

export default DualTerminal;
