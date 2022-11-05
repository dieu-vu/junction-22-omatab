import { styled } from '@mui/material/styles';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
  Collapse,
} from '@mui/material';
import { useState } from 'react';
import item1 from '../../assets/item1.png';
import item2 from '../../assets/item2.png';
import item3 from '../../assets/item3.png';

interface ExpandMoreProps {
  expand: string;
  image: string;
  handleClick: () => void;
}

export default function PrescriptionSummary() {
  const [expanded, setExpanded] = useState('');

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { image, handleClick } = props;
    return <img src={image} alt='Item' onClick={handleClick} className='img' />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = (name: string) => {
    setExpanded(name);
  };

  return (
    <Card sx={{ minWidth: 345 }}>
      <CardHeader title='Prescription summary' />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like to die.
        </Typography>
        <CardActions sx={{ marginY: 2 }}>
          <ExpandMore
            expand={expanded}
            image={item1}
            handleClick={() => handleExpandClick('item1')}
          />

          <ExpandMore
            expand={expanded}
            image={item2}
            handleClick={() => handleExpandClick('item2')}
          />

          <ExpandMore
            expand={expanded}
            image={item3}
            handleClick={() => handleExpandClick('item3')}
          />
        </CardActions>
      </CardContent>
      <Collapse in={expanded !== ''} timeout='auto' unmountOnExit>
        <CardContent>
          {expanded === 'item1' ? (
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
          ) : expanded === 'item2' ? (
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
          ) : (
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}
