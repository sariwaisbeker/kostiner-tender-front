import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Modal from '@mui/material/Modal';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconStepper from './stepPay';

export default function AutocompleteModal() {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleSelect = (event, value) => {
    if (value.length > 3) {
      value.pop(); // Remove the last item if more than 3 are selected
    } else {
      setSelectedOptions(value);
    }
  };

  return (
    <Modal
      open={true} // Open modal directly
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(5px)',
      }}
    >
      <Box
        sx={{
          width: '90%',
          maxWidth: 500,
          bgcolor: 'transparent',
          p: 4,
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        <IconStepper activeStep={1} />
        <Card
          variant="outlined"
          sx={{
            mt: 4,
            bgcolor: 'background.paper',
            borderRadius: '16px',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: 'EFT_Asaf Heavy',
                fontSize: '1.5rem',
                fontWeight: 300,
              }}
            >
              ?אילו תחומים מעניינים אותך
            </Typography>
            <Stack spacing={2}>
              <Autocomplete
                multiple
                limitTags={3}
                disableCloseOnSelect
                options={top100Films}
                getOptionLabel={(option) => option.label}
                value={selectedOptions}
                onChange={handleSelect}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" label="בחר עד שלושה תחומים" />
                )}
              />
            </Stack>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              sx={{
                margin: 'auto',
                borderRadius: '12px',
                backgroundColor: 'rgba(26,96,104,255)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgb(129, 175, 164)',
                },
              }}
            >
              שליחה לתשלום
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Modal>
  );
}

const top100Films = [
  { label: 'בנייה ותשתיות' },
  { label: 'שירותים מקצועיים' },
  { label: 'טכנולוגיה ותקשורת' },
  { label: 'מזון ומסחר תעופתי' },
  { label: 'שירותים רפואיים' },
  { label: 'חינוך והכשרה' },
  { label: 'שירותים לתעסוקה' },
  { label: 'שירותים פיננסיים ומשפטיים' },
  { label: 'מחקר ופיתוח' },
  { label: 'תרבות ופנאי' },
  { label: 'סביבה וקידום בריאות' },
  { label: 'שירותים חברתיים ומגזר שלישי' },
  { label: 'תחבורה ותחנות דלק' },
  { label: 'אנרגיה ומים' },
  { label: 'בטיחות ואבטחה' },
  { label: 'ניהול וייעוץ ארגוני' },
  { label: 'מוצרים וציוד' },
  { label: 'קניות ולוגיסטיקה' },
  { label: 'שירותים למגזר הציבורי' },
  { label: 'ביטוח ופיננסים' },
];
