import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function CircularProgressWithLabel(props) {
  
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: "text.secondary" }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export function ProgressCircle({ moduleName }) {
  const value = useSelector((state) => state?.moduleProgress[moduleName]?.progress || 0);
  
  // const [progress, setProgress] = React.useState(0);

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => {
  //       if (prevProgress >= value) {
  //         clearInterval(timer);
  //         return prevProgress;
  //       }
  //       return prevProgress + 10;
  //     });
  //   }, 40);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return <CircularProgressWithLabel value={value} />;
}
export function ProgressBar({ value }) {
  const {id} = useParams();
  const moduleName = `module${id}`;
  const progress = useSelector((state) => state?.moduleProgress[moduleName]?.progress || 0);
    if(!value) value = 0;
    return (
      <div className="bg-gray-700 h-3.5 w-full relative flex items-center justify-center">
        <div className="absolute text-white text-[11px] font-bold z-10">
          Module progress ({progress}%)
        </div>x 
  
        <div
          className="bg-green-500 h-full absolute top-0 left-0"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  }
