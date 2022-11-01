import {
  Card,
  CardContent,
  Stack,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  styled,
  Divider,
  FormGroup,
} from '@mui/material';

export default function Filter() {
  const CustomTextField = styled(TextField)`
    fieldset {
      height: 30px
      border-radius: 0px;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
        -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
    .MuiInputBase-root {
      border-radius: 50px !important;
      // borderTopRightRadius: '0',
      // borderBottomRightRadius: '0',
      height: 30px;
      font-size: 13px;
    }
  `;
  return (
    <FormGroup>
      <Card
        sx={{
          boxShadow:
            '0px 1px 2px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);',
        }}
      >
        <CardContent>
          <Stack
            spacing={2}
            display="flex"
            divider={<Divider orientation="horizontal" flexItem />}
          >
            <Stack
              spacing={2}
              display="flex"
              // divider={<Divider orientation="horizontal" flexItem />}
            >
              <Stack
                direction="row"
                display="flex"
                justifyContent="space-between"
                // divider={<Divider orientation="vertical" flexItem />}
                spacing={3}
              >
                <Typography variant="h4" width="max-content">
                  Filter
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderRadius: '9999px',
                    color: '#222',
                    borderColor: '#222',
                    width: 'max-content',
                    py: 0,
                  }}
                >
                  <Typography variant="subtitle1" width="max-content">
                    Reset
                  </Typography>
                </Button>
              </Stack>
              <Typography variant="h4">Harga</Typography>

              <CustomTextField
                color="success"
                name="search"
                placeholder="Harga Minimun"
                type="text"
                size="small"
                fullWidth
                sx={{
                  borderLeft: '0 !important',
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        edge="start"
                        type="submit"
                        sx={{
                          backgroundColor: 'grey.300',
                          // borderRadius: '8px',
                          borderTopRightRadius: '0',
                          borderBottomRightRadius: '0',
                          transform: 'translateX(-1.5px)',
                          fontSize: '13px',
                        }}
                      >
                        Rp
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <CustomTextField
                name="search"
                color="success"
                placeholder="Harga Maksimum"
                type="text"
                size="small"
                fullWidth
                sx={{
                  borderLeft: '0 !important',
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        edge="start"
                        type="submit"
                        sx={{
                          backgroundColor: 'grey.300',
                          // borderRadius: '8px',
                          borderTopRightRadius: '0',
                          borderBottomRightRadius: '0',
                          transform: 'translateX(-1.5px)',
                          fontSize: '13px',
                        }}
                      >
                        Rp
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <Stack>{/* <Typography variant="h4">Kota</Typography> */}</Stack>
          </Stack>
        </CardContent>
      </Card>
    </FormGroup>
  );
}
