
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "screens/navbar";
import CreatePost from "../widgets/CreatePost";
import PostsWidget from "screens/widgets/PostsWidget";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  const { palette } = useTheme();
  const { admin = false } = useSelector((state) => state);

  const token = useSelector((state) => state.token);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
        // className="flex-1 h-full px-4 flex flex-col gap-6 overflow-y-auto rounded-lg"
        sx={
          // isNonMobileScreens && {
          {
            maxHeight: "100vh", //"calc(100vh - 200px)", // Adjust the max height as per your design
            overflowY: "auto", // Add vertical scrollbar
            scrollbarWidth: "0px", // Set scrollbar width thin bold strong
            scrollbarColor: `${palette.primary.main} ${palette.background.default}`, // Set scrollbar color
          }
        }
      >
        {/*  left part of the home scree */}
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          {/* <UserWidget userId={_id} picturePath={picturePath} /> */}
        </Box>

        {/*  middle part of the home screen */}
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          {admin ? <CreatePost userId={_id} picturePath={picturePath} /> : ""}
          <PostsWidget userId={_id} />
        </Box>
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          {/* <UserWidget userId={_id} picturePath={picturePath} /> */}
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default HomePage;
