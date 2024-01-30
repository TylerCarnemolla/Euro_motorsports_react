import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ATVCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./src/assets/images/AtvCard.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ATV's 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Imported Side-by-sides and Quad's
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}