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

export default function NewsCard1() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            RB
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="RedBull Motorcross"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="../src/assets/images/card1_track.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         New racetrack developmnet news delivered daily. 
         Follow allong to for sneak peaks into how the new
         RedBull Energy Motorcross track is developing.
         
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
          <Typography paragraph>Track Update:</Typography>
          <Typography paragraph>
            In an exciting development for adrenaline junkies and motorsport
             enthusiasts, Red Bull Energy has announced its sponsorship of a 
             cutting-edge motocross track currently under construction. The
              track, located on the outskirts of town, is well underway in its
               development, with construction reaching an impressive 70% 
               completion. This state-of-the-art facility is set to provide 
               an unparalleled experience for motocross enthusiasts, combining
                challenging terrains and thrilling jumps for riders of all skill levels.
          </Typography>
          <Typography paragraph>
          Anticipation is building as the track is expected to open its gates to the
           public in just a few short months. However, for those looking to elevate
            their experience, Red Bull Energy is offering exclusive memberships with 
            special access privileges. Members will enjoy perks such as early access
             to the track, private events, and exclusive Red Bull-sponsored competitions.
              The response has been overwhelming, with a significant number of enthusiasts
               pre-ordering memberships to secure their spot as founding members of this
                exhilarating motocross community.
          </Typography>
          <Typography paragraph>
          As the news of the motocross track spreads throughout the town, 
          the community's morale is reaching new heights. Excitement and pride
           are palpable as residents eagerly anticipate the economic and
            recreational benefits the track will bring to the area. The 
            prospect of a world-class motocross facility not only promises
             a boost to local businesses but also fosters a sense of camaraderie
              among residents who share a passion for motorsports. The town is
               buzzing with positive energy, looking forward to the arrival of
                this Red Bull-sponsored motocross haven that is set to become a
                 hub for adrenaline-fueled adventures.
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
  );
}