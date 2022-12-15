import DeleteIcon from "@mui/icons-material/DeleteForever";
import { Box, Grid, IconButton, Theme } from "@mui/material";
import { useEffect } from "react";
import { FieldError, useFormContext, useWatch } from 'react-hook-form';
import { ITEM_NAME_PLACEHOLDERS } from "../../../lib/constants";
import { getFormattedPrice } from "../../../lib/helpers";
import Input from "../../Input";

type Props = {
  index: number;
  handleDelete: () => void;
  errors: {
    name: Partial<FieldError>;
    quantity: Partial<FieldError>;
    price: Partial<FieldError>;
    total: Partial<FieldError>;
  };
};

const AddItem = ({ index, errors, handleDelete }: Props) => {
  const { setValue } = useFormContext()

  const itemNamePlaceholder =
    ITEM_NAME_PLACEHOLDERS[index % ITEM_NAME_PLACEHOLDERS.length];

  const quantity = (useWatch({name: `items.${index}.quantity`}))
  const price = (useWatch({name: `items.${index}.price`}))

  // Material UI allows the letter "e" as number so it's necessary to remove it in order for the "total" field does not become "0" when the letter is present in either "quantity" or "price"
  // if (quantity === )
  let total = Number(String(quantity).replace("e", "")) * Number(String(price).replace("e", ""))

  // Necessary when user presses "Discard" button
  if (Number.isNaN(total)) {
    total = 0
  }

  const setTotal = () => {setValue(`items.${index}.total`, total)}

  useEffect(() => {
    setTotal()
  }, [total])

  return (
    <Grid
      container
      spacing={2}
      sx={{
        "& > div:first-of-type": {
          paddingTop: 0,
        },
      }}
    >
      {/* ---------------------------- Item Name --------------------------- */}
      <Grid item xs={12}>
        <Input
          name={`items.${index}.name`}
          label="Item Name"
          placeholder={itemNamePlaceholder}
          error={Boolean(errors?.name)}
        />
      </Grid>
      {/* ---------------------------- Item Name --------------------------- */}
      {/* ---------------------------- Quantity ---------------------------- */}
      <Grid item xs={2.5}>
        <Input
          name={`items.${index}.quantity`}
          label="Qty."
          type="number"
          onChange={() => {
          }}
          error={Boolean(errors?.quantity)}
        />
      </Grid>
      {/* ---------------------------- Quantity ---------------------------- */}
      {/* ----------------------------- Price ----------------------------- */}
      <Grid item xs={4}>
        <Input
          name={`items.${index}.price`}
          label="Price"
          type="number"
          error={Boolean(errors?.price)}
        />
      </Grid>
      {/* ----------------------------- Price ----------------------------- */}
      {/* ----------------------------- Total ----------------------------- */}
      <Grid item xs={4}>
        <Input
          readonly
          readonlyValue={getFormattedPrice(total)}
          name={`items.${index}.total`}
          label="Price"
          type="number"
          disabled
          error={Boolean(errors?.total)}
        />
      </Grid>
      {/* ----------------------------- Total ----------------------------- */}
      {/* -------------------------- Delete Button -------------------------- */}
      <Grid
        item
        xs={1.5}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <IconButton onClick={handleDelete} sx={{ marginTop: 3 }}>
          <DeleteIcon
            sx={{
              color: (theme: Theme) => theme.palette.text.secondary,
            }}
          />
        </IconButton>
      </Grid>
      {/* -------------------------- Delete Button -------------------------- */}
    </Grid>
  );
};

export default AddItem;
