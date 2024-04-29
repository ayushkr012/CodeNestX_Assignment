import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import Form from "./Form";
import AdminForm from "./AdminForm";
import FlexBetween from "components/FlexBetween";
import { useState } from "react";

const LoginPage = () => {
  const theme = useTheme();
  const [isadmin, setIsadmin] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <FlexBetween>
          <Typography fontWeight="bold" fontSize="32px" color="primary">
            CodeNestX
          </Typography>
          <FlexBetween>
            <Button
              fontWeight="bold"
              fontSize="32px"
              color="primary"
              onClick={() => {
                setIsadmin(true);
              }}
            >
              Admin
            </Button>
            <Button
              fontWeight="bold"
              fontSize="32px"
              color="primary"
              onClick={() => {
                setIsadmin(false);
              }}
            >
              User
            </Button>
          </FlexBetween>
        </FlexBetween>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          fontWeight="500"
          variant="h5"
          sx={{ mb: "1.5rem", textAlign: "center" }}
        >
          Welcome to CodeNestX Community!
        </Typography>
        {isadmin ? <AdminForm /> : <Form setIsadmin={setIsadmin} />}
      </Box>
    </Box>
  );
};

export default LoginPage;
