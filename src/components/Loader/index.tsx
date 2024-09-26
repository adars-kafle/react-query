import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
    return (
        <Box
            sx={{
                display: "flex",
                minHeight: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CircularProgress thickness={5} color="success" />
        </Box>
    );
};

export default Loader;
