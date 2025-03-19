import type { FC, ReactNode } from "react";
import { Text } from "../Text";
import { HorizontalStack } from "../HorizontalStack";
import { VerticalStack } from "../VerticalStack";

type Props = {
  /** A unique identifier for the label */
  id: string;
  /** Text for the label */
  label: ReactNode;
  /** Content to display */
  children?: React.ReactNode;
};

type LabelProps = {
  /** A unique identifier for the label */
  id: string;
  /** Content to display */
  children?: React.ReactNode;
};

const Label: FC<LabelProps> = ({ id, children }) => {
  return (
    <HorizontalStack align="space-between">
      <Text size="p16" as="label" htmlFor={id} weight={600}>
        {children}
      </Text>
    </HorizontalStack>
  );
};

export const Labelled: FC<Props> = ({ id, label, children }) => {
  return (
    <VerticalStack gap={4}>
      <Label id={id}>{label}</Label>
      {children}
    </VerticalStack>
  );
};
