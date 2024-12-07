import { Box, Heading } from "@kuma-ui/core";

const Header = () => {
  return (
    <Box
      as="header"
      bg="colors.primary.main"
      position="fixed"
      top={0}
      left={0}
      w="100vw"
      h="50px"
      px={16}
      color="colors.white.main"
      display="flex"
      alignItems="center"
    >
      <Heading m={0} p={0} fontSize="fontSizes.xl">
        予約受付アプリ
      </Heading>
    </Box>
  );
};

export default Header;
