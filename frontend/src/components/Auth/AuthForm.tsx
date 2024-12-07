import { Box, Button, Heading, HStack, Input, VStack } from "@kuma-ui/core";
import { authConfig } from "../../const/auth";

const AuthForm: React.FC<{
  id: "signin" | "signup";
}> = ({ id }) => {
  const { label, isForgotButton, changeButtonLabel, asItButtonLabel } =
    authConfig[id];
  return (
    <Box
      p={0}
      h="100%"
      display="flex"
      flexDirection="column"
      justify="space-between"
    >
      <VStack gap={24}>
        <Heading as="h2" fontSize="fontSizes.lg" m={0}>
          {label}
        </Heading>
        <Input placeholder="email" type="email" py={12} px={8} />
        <Input placeholder="password" type="password" py={12} px={8} />
        {isForgotButton && (
          <Button variant="text">パスワードをお忘れですか？</Button>
        )}
      </VStack>
      <HStack justify="center" alignItems="center" gap={8}>
        <Button variant="outlined">{changeButtonLabel}</Button>
        <Button variant="contained">{asItButtonLabel}</Button>
      </HStack>
    </Box>
  );
};

export default AuthForm;
