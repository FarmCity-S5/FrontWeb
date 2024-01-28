import React from 'react';
import { Card, CardContent, Typography, Icon } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const NumberCard = ({ title, number, icon }) => {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
      <Icon component={icon} sx={{ mr: 2, fontSize: '2rem' }} />
      <CardContent>
        <Typography variant="h5" component="h2">
          {number}
        </Typography>
        <Typography variant="body1">{title}</Typography>
      </CardContent>
    </Card>
  );
};

// Usage example:
const MyNumberCard = () => {
  return (
    <NumberCard
      title="Terrain en attente"
      number="5"
      icon={AccountBalanceWalletIcon}
    />
  );
};

export default MyNumberCard;