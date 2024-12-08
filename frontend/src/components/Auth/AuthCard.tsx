import { Box } from "@kuma-ui/core";

const AuthCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      as="div"
      w={400}
      h={320}
      mb={48}
      p={24}
      borderRadius={8}
      boxShadow="1px 1px 4px rgba(0, 0, 0, 0.3)"
    >
      {children}
    </Box>
  );
};

export default AuthCard;
