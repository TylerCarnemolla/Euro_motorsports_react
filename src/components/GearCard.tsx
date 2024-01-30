
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function GearCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../src/assets/images/newGear.jpg"
          alt="green iguana"
        />
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