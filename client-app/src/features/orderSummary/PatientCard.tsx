import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import profilePic from '../../assets/profile_pic.png';
import { patient, PatientInfo } from '../../seedData/patient';

export default function PatientCard() {
  var patientInfo: PatientInfo = patient;
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
          <Typography variant='h5'>{patientInfo.Name}</Typography>
          <Typography variant='subtitle1' color='text.secondary'>
            Age: {patientInfo.Age}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary'>
            Address: {patientInfo.Address}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary'>
            Addition info: {patientInfo.AdditionInfo}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
