
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function HelmetCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Helmets
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stylish helmets for dirt and street riding
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}