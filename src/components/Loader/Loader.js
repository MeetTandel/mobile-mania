import { useData } from "../../contexts/DataContext";
import "./Loader.css";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  margin: "auto",
};

export function Loader() {
  const { isLoading } = useData();

  return (
    <div className="loader__container">
      <ClipLoader
        color="#16a17f"
        cssOverride={override}
        loading={isLoading}
        size={100}
        speedMultiplier={2}
      />
    </div>
  );
}
