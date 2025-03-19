import React, { FC, ReactNode, useId } from "react";
import { Labelled } from "../Labelled";
import * as styles from "./Select.css";

const PLACEHOLDER_VALUE = "";

/**
 * Converts a string option (and each string option in a Group) into
 * an Option object.
 */
function normalizeOption(option: SelectOption): StrictOption {
  if (typeof option === "string") {
    return {
      label: option,
      value: option,
    };
  }

  return option;
}

type StrictOption = {
  /** Machine value of the option; this is the value passed to `onChange` */
  value: string;
  /** Human-readable text for the option */
  label: string;
  /** Option will be visible, but not selectable */
  disabled?: boolean;
  /** Option will not be visible */
  hidden?: boolean;
};

export type SelectOption = string | StrictOption;

export interface SelectProps
  extends Omit<React.InputHTMLAttributes<HTMLSelectElement>, "onChange"> {
  /** List of options or option groups to choose from */
  options?: SelectOption[];
  /** Label for the select */
  label: ReactNode;
  /** Callback when selection is changed */
  onChange?(selected: string, id: string): void;
  /** Used for automation testing to assign a unique identifier to a field */
  testId?: string;
}

export const Select: FC<SelectProps> = ({
  id: idProp,
  label,
  options: optionsProp,
  placeholder,
  value = PLACEHOLDER_VALUE,
  disabled,
  name,
  onChange,
  onFocus,
  onBlur,
  testId,
  className,
}) => {
  const uniqId = useId();
  const id = idProp ?? uniqId;

  const handleChange = onChange
    ? (event: React.ChangeEvent<HTMLSelectElement>) =>
        onChange(event.currentTarget.value, id)
    : undefined;

  const describedBy: string[] = [];

  const options = optionsProp || [];
  let normalizedOptions = options.map(normalizeOption);

  if (placeholder) {
    normalizedOptions = [
      {
        label: placeholder,
        value: PLACEHOLDER_VALUE,
        disabled: true,
      },
      ...normalizedOptions,
    ];
  }

  return (
    <div className={className}>
      <Labelled id={id} label={label}>
        <div className={styles.wrapper}>
          <select
            id={id}
            name={name}
            value={value}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={handleChange}
            aria-describedby={
              describedBy.length ? describedBy.join(" ") : undefined
            }
            data-testid={testId}
          >
            {normalizedOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </Labelled>
    </div>
  );
};
