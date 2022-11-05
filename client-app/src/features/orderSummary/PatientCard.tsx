import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import profilePic from '../../assets/profile_pic.png';

export default function PatientCard() {
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component='img'
        sx={{ width: 151 }}
        image={profilePic}
        alt='Profile Picture'
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant='h5'>Name</Typography>
          <Typography variant='subtitle1' color='text.secondary'>
            Age
          </Typography>
          <Typography variant='subtitle1' color='text.secondary'>
            Address
          </Typography>
          <Typography variant='subtitle1' color='text.secondary'>
            Addition info:
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
