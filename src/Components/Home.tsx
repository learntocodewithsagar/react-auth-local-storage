import { useEffect, useState } from "react";
import { IUserModel, getActiveUser, removeActiveUser } from "../LocalStorage";
import { useNavigate } from "react-router";

const Home = () => {
  const [activeUser, setActiveUser] = useState<IUserModel>();

  useEffect(() => {
    var user = getActiveUser();
    if (user != null) setActiveUser(user);
  }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    removeActiveUser();
    navigate("/login");
  };

  return (
    <div
      style={{
        color: "white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>Welcome {activeUser?.name}</div>
      <button onClick={handleLogout} style={{ width: 200 }}>
        Log Out
      </button>
    </div>
  );
};

export default Home;
