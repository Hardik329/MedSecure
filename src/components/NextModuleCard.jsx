import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import SendIcon from "@mui/icons-material/Send";
const NextModuleCard = ({ nextModule, description }) => {
  const { id } = useParams();
  if(!nextModule) nextModule = parseInt(id) + 1;

  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/module/" + nextModule)}
      className="bg-green-100 p-4 border-l-4 flex justify-between hover:scale-101 cursor-pointer transition border-green-500 rounded-md"
    >
      <p>
        <strong>Next:</strong> {description}
      </p>
    </div>
  );
};

export default NextModuleCard;
