import AddIcon from "@mui/icons-material/Add";
import { Button, Stack, SxProps, Theme, Typography } from "@mui/material";
import {
  FieldValues,
  useFieldArray,
  UseFieldArrayAppend,
  useFormState,
} from "react-hook-form";
import { TEXT_COLOR } from "../../../lib/constants";
import AddItem from "./AddItem";

type Props = {};

const ItemList = (props: Props) => {
  const { fields, append, remove } = useFieldArray({
    name: "items",
    rules: {
      minLength: 1,
    },
  });
  const { errors } = useFormState();

  return (
    <Stack gap={3}>
      <Typography variant="h4" fontWeight="bold" color="text.secondary">
        Item List
      </Typography>
      <Stack gap={6}>
        {fields.map((field, index) => {
          return (
            <AddItem
              key={field.id}
              index={index}
              handleDelete={() => remove(index)}
              errors={(errors as any)?.items?.[index]}
            />
          );
        })}
        <AddNewItemButton append={append} />
      </Stack>
    </Stack>
  );
};

export default ItemList;

type AddNewItemButtonProps = {
  append: UseFieldArrayAppend<FieldValues, "items">;
};
const AddNewItemButton = ({ append }: AddNewItemButtonProps) => {
  const styles: SxProps<Theme> = {
    paddingBlock: 1.5,
    lineHeight: 1,
    backgroundColor: (theme: Theme): string => theme.palette.background.paper,
    color: (theme: Theme) =>
      theme.palette.mode === "dark" ? TEXT_COLOR.light.secondary : "#7E88C3",

    "&:hover": {
      backgroundColor: (theme: Theme): string => theme.palette.background.paper,
      color: (theme: Theme) => theme.palette.text.primary,
    },
  };

  const appendNewItem = () => {
    append({
      name: "",
      quantity: 1,
      price: 0,
      total: 0,
    });
  };

  return (
    <Button
      variant="contained"
      sx={styles}
      onClick={appendNewItem}
      startIcon={<AddIcon />}
    >
      Add New Item
    </Button>
  );
};
