import { Icon, IconProps } from "@chakra-ui/react";

export const TriangleIcon = (props: IconProps) => (
  <Icon width="34" height="34" viewBox="0 0 34 34" {...props}>
    <rect width="34" height="34" rx="17" fill="currentColor" />
    <rect x="12.5" y="12.5" width="9" height="9" fill="white" />
  </Icon>
);
