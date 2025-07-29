import { NumberInput, Box } from "@chakra-ui/react";
import { Provider } from "../ui/provider";

const CustomNumberInput = () => (
  <Provider>
    <NumberInput.Root
      min={0}
      defaultValue={"0"}
      max={9999}
      width="100%"
      height={"38px"}
      border={"none"}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bg="gray.50"
        // px={4}
        // py={2}
        border="1px solid"
        borderColor="gray.200"
        borderRadius="md"
        height={"38px"}
      >
        <NumberInput.Input
          textAlign="left"
          border="none"
          fontWeight="semibold"
          w="100%"
          px={2}
          bg="transparent"
          outline="none"
          _focusVisible={{ boxShadow: "none", borderColor: "transparent" }}
          _focus={{ boxShadow: "none", borderColor: "transparent" }}
          height={"38px"}
          //   placeholder="Default Value"
        />

        <NumberInput.Control
          direction="column"
          height={"38px"}
          ml={0}
          border="none"
          borderLeft="none"
          _before={{ display: "none" }}
        >
          <NumberInput.IncrementTrigger
            border="none"
            fontSize="10px"
            color="gray.600"
            _hover={{ bg: "gray.100" }}
          />
          <NumberInput.DecrementTrigger
            border="none"
            fontSize="10px"
            color="gray.600"
            _hover={{ bg: "gray.100" }}
          />
        </NumberInput.Control>
      </Box>
    </NumberInput.Root>
  </Provider>
);

export default CustomNumberInput;
