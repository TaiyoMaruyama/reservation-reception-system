import { Box } from "@kuma-ui/core";

const AuthPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box as="div" h="100%" display="flex" justify="center" alignItems="center">
      {children}
    </Box>
  );
};

export default AuthPage;
