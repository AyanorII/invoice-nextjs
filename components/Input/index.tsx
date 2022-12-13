import { Box, InputLabel } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  DatePickerElement,
  SelectElement,
  TextFieldElement,
} from "react-hook-form-mui";
import { InputProps } from "../../lib/interfaces";
import { datePickerStyles, selectStyles, textFieldStyles } from "./styles";

const Input = ({
  label,
  name,
  type = "text",
  error,
  placeholder,
  options,
  disabled,
  onChange,
}: InputProps) => {
  return (
    <Box position="relative">
      <InputLabel error={error} sx={{ fontWeight: "bold" }}>
        {label}
      </InputLabel>
      {(type === "text" || type === "number") && (
        <TextInput
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          type={type}
          onChange={onChange}
        />
      )}
      {type === "date" && <DatePicker name={name} disabled={disabled} />}
      {type === "select" && <SelectInput name={name} options={options} />}
    </Box>
  );
};

export default Input;

const TextInput = ({
  name,
  placeholder,
  disabled,
  type,
  onChange,
}: Pick<
  InputProps,
  "name" | "placeholder" | "disabled" | "type" | "onChange"
>) => {
  return (
    <TextFieldElement
      name={name}
      validation={{ required: "Can't be blank" }}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      disabled={disabled}
      sx={textFieldStyles}
    />
  );
};

const DatePicker = ({
  name,
  disabled,
}: Pick<InputProps, "name" | "disabled">) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePickerElement
        name={name}
        validation={{ required: "Can't be blank" }}
        disabled={disabled}
        inputProps={{
          sx: datePickerStyles,
        }}
      />
    </LocalizationProvider>
  );
};

type SelectInputProps = Pick<InputProps, "name" | "options">;

const SelectInput = ({ name, options }: SelectInputProps) => {
  return <SelectElement name={name} options={options} sx={selectStyles} />;
};
