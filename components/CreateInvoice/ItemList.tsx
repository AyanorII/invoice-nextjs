import { Button, Stack, Typography } from "@mui/material";
import { useFieldArray, useFormState } from "react-hook-form";
import AddItem from "./AddItem";

type Props = {};

const ItemList = (props: Props) => {
  const { fields, append, remove } = useFieldArray(
    {
      name: "items",
      rules: {
        minLength: 1,
      },
    }
  );
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
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            append({
              name: "",
              quantity: 1,
              price: 0,
              total: 0,
            })
          }
        >
          Add Item
        </Button>
      </Stack>
    </Stack>
  );
};

export default ItemList;
