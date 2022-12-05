import { Button } from "@mui/material";
import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import { toggleMode } from "../store/themeSlice";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(toggleMode());
        }}
      >
        Primary
      </Button>
      <Button variant="contained" color="error">
        Error
      </Button>
      <Button variant="contained" color="paid">
        Paid
      </Button>
      <Button variant="contained" color="pending">
        Pending
      </Button>
      <Button variant="contained" color="draft">
        Draft
      </Button>
    </>
  );
};

export default Home;
