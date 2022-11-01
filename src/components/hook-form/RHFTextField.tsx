// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { styled, TextField, TextFieldProps } from '@mui/material';

// ----------------------------------------------------------------------

interface IProps {
  name: string;
  isHome?: boolean;
}

// eslint-disable-next-line prettier/prettier
export default function RHFTextField({
  name,
  isHome,
  ...other
}: IProps & TextFieldProps) {
  const { control } = useFormContext();

  const HomeTextField = styled(TextField)`
    fieldset {
      border-radius: 50px;
    }
    .MuiInputBase-input {
      border-radius: 50px !important;
    }
  `;

  const CustomTextField = styled(TextField)`
    fieldset {
      border-radius: 50px;
    }
    .MuiInputBase-root {
      border-radius: 50px !important;
      background-color: ${({ theme }) => theme.palette.background.default};
    }
  `;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) =>
        isHome === true ? (
          <HomeTextField
            {...field}
            fullWidth
            error={!!error}
            helperText={error?.message}
            {...other}
          />
        ) : (
          <CustomTextField
            {...field}
            fullWidth
            error={!!error}
            helperText={error?.message}
            {...other}
          />
        )
      }
    />
  );
}
