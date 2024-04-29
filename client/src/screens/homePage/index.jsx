import { Box, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "screens/navbar";
import CreatePost from "../widgets/CreatePost";
import PostsWidget from "screens/widgets/PostsWidget";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  const { palette } = useTheme();
  const { admin = false } = useSelector((state) => state);
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
        sx={{
          maxHeight: "100vh", //"calc(100vh - 200px)",
          overflowY: "auto", // Add vertical scrollbar
          scrollbarWidth: "0px", // Set scrollbar width thin bold strong
          scrollbarColor: `${palette.primary.main} ${palette.background.default}`, // Set scrollbar color
        }}
      >
        {/*  left part of the home screen */}
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}></Box>

        {/*  middle part of the home screen */}
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          {admin ? <CreatePost userId={_id} picturePath={picturePath} /> : ""}
          <PostsWidget userId={_id} />
        </Box>
        {/*  right part of the home screen */}
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}></Box>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default HomePage;
