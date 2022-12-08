import { Typography } from '@mui/material';
import { Address } from '../../lib/interfaces';

type Props = {
  address: Address
}

const AddressInfo = ({address}: Props) => {
  const { street, city, postCode, country } = address

  return (
    <div>
      <Typography color="text.secondary">{street}</Typography>
      <Typography color="text.secondary">{city}</Typography>
      <Typography color="text.secondary">{postCode}</Typography>
      <Typography color="text.secondary">{country}</Typography>
    </div>
  )
}

export default AddressInfo
