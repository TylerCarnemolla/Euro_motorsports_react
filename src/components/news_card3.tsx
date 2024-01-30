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

export default function NewsCard3() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            EM
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Euro Motorsports"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="../src/assets/images/kids-ride.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Helping the Community
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
          <Typography paragraph>Euro Motorsports media team:</Typography>
          <Typography paragraph>
          Celebrating a triumph of community spirit,
           Euro Motorsports recently hosted a highly 
           successful fundraiser aimed at supporting 
           local kids' sports programs. The event,
            marked by a palpable sense of unity, managed
             to surpass all expectations by raising an 
             impressive $20,000. This substantial amount 
             of funds is destined to inject vitality into
              the local high school sports scene, ensuring
               that the upcoming football, basketball, and
                girls' volleyball seasons will go ahead as planned.
          </Typography>
          <Typography paragraph>
          The overwhelming success of the fundraiser can be attributed
           to the unwavering support and generosity of the community.
            Families, businesses, and passionate sports enthusiasts came 
            together to contribute to the cause, recognizing the importance
             of fostering a healthy and active lifestyle for the younger 
             generation. Euro Motorsports played a pivotal role in orchestrating
              this community-driven initiative, underscoring the powerful impact
               of businesses engaging with local causes.
          </Typography>
          <Typography paragraph>
          The $20,000 raised will be instrumental
           in providing essential resources and support for the local 
           high school's sports programs. From updated equipment
            and uniforms to facilitating travel arrangements for away
             games, the funds will ensure that students have the necessary 
             tools to excel in their chosen sports. The ripple effect
              of this successful fundraiser extends beyond the monetary
               aspect, reinforcing the sense of community pride and camaraderie
                as everyone comes together to champion the development of young 
                athletes. Euro Motorsports, through its commitment to community 
                engagement, has not only demonstrated its dedication to motorsports 
                but has also become a driving force behind the success of local 
                youth sports, leaving a lasting impact on the community's well-being.
          </Typography>          
        </CardContent>
      </Collapse>
    </Card>
  );
}