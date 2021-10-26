import { Icon, IconProps } from "@chakra-ui/react";

export const CircleIcon = (props: IconProps) => (
  <Icon width="34" height="34" viewBox="0 0 34 34" {...props}>
    <rect width="34" height="34" rx="17" fill="currentColor" />
    <circle cx="17" cy="17" r="5.5" fill="white" />
  </Icon>
);
