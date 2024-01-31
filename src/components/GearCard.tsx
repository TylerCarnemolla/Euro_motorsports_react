
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function GearCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gear
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Apearal, gloves, goggles, boots, and more
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}