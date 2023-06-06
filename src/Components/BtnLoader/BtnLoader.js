import ClipLoader from "react-spinners/ClipLoader";

const override = {
  margin: "auto",
};

export function BtnLoader({ loading, color }) {
  return (
    <ClipLoader
      color={color}
      cssOverride={override}
      loading={loading}
      size={16}
      speedMultiplier={2}
    />
  );
}
