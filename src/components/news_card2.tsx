import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function NewsCard2() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            KTM
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="KTM North America"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="../src/assets/images/welder.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          NEWS FROM HEADQUARTERS! New ideas being put to work at KTM.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>KTM North America Media:</Typography>
          <Typography paragraph>
        
            Revving up the anticipation in the world of dirt biking, 
            KTM has just unveiled an exhilarating redesign of their signature
             dirt bikes, promising an adrenaline-packed riding experience 
             like never before. The buzz centers around a groundbreaking 
             suspension system developed specifically for racing, set to 
             elevate the rider's control to unprecedented levels. This innovative
              technology is the result of meticulous engineering, aimed at providing 
              riders with a responsive and dynamic experience on the track.
          </Typography>
          <Typography paragraph>
          One of the most exciting features of KTM's latest
           lineup is the incorporation of this cutting-edge
            suspension system. Designed with racing precision 
            in mind, it's poised to redefine the limits of rider control,
             allowing enthusiasts to push their bikes to the edge with 
             confidence. The suspension's responsiveness promises a smoother
              and more controlled ride, ensuring that riders can navigate the
               toughest terrains and take on challenging jumps with ease.
                As a dirt bike enthusiast, the prospect of testing this
                 state-of-the-art suspension system is nothing short of thrilling.


          </Typography>
          <Typography paragraph>
          In addition to the revolutionary suspension,
           KTM is taking things a step further by integrating new 
           lightweight materials into their redesigned dirt bikes. The goal is 
           to reduce overall weight without compromising durability, 
           making the bikes even more agile and responsive on the track.
            This commitment to innovation demonstrates KTM's dedication 
            to pushing the boundaries of dirt biking technology, and as riders 
            prepare to hit the trails with these upgraded machines,
             the excitement is palpable. The combination of enhanced 
             suspension and reduced weight heralds a new era for KTM dirt bikes,
              promising an adrenaline rush that is sure to captivate riders
               and elevate the dirt biking experience to unparalleled heights.
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}