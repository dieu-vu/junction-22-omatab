import { styled } from '@mui/material/styles';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
  Collapse,
} from '@mui/material';
import { useEffect, useState } from 'react';
import item1 from '../../assets/item1.png';
import item2 from '../../assets/item2.png';
import item3 from '../../assets/item3.png';
import { prescriptions } from '../../data/prescriptions';
// import {Prescription, prescriptions} from '../../seedData/prescriptions';

interface ExpandMoreProps {
  category: string;
  expand: boolean;
  image: string;
  handleClick: () => void;
}

export default function PrescriptionSummary() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [expandedContent, setExpandedContent] = useState<string>('');
  const [categories, setCategories] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    const newCategories = new Map<string, number>();
    prescriptions.forEach((el) => {
      const tags = el.Tag;
      tags.forEach((t) => {
        if (!newCategories.has(t)) {
          newCategories.set(t, 1);
        } else {
          const item = newCategories.get(t);
          if (item) newCategories.set(t, item + 1);
        }
      });
    });
    setCategories(newCategories);
  }, []);

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { image, category, handleClick } = props;
    return (
      <div onClick={handleClick}>
        <img src={image} alt='Item' className='img' />
        <p style={{ marginLeft: 5 }}>{category}</p>
      </div>
    );
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = (name: string) => {
    if (name === expandedContent) setExpanded(!expanded);
    setExpandedContent(name);
  };

  return (
    <Card sx={{ minWidth: 345 }}>
      <CardHeader title='Prescription summary' />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          Below you can find a summary of the ordered prescription.
        </Typography>
        <CardActions sx={{ marginY: 2 }}>
          {Array.from(categories.keys()).map((cat) => {
            return (
              <ExpandMore
                expand={expanded}
                category={`${cat} (${categories.get(cat)})`}
                image={
                  cat === 'Painkiller'
                    ? item1
                    : cat === 'Supplements'
                    ? item2
                    : item3
                }
                handleClick={() => handleExpandClick(cat)}
              />
            );
          })}
        </CardActions>
      </CardContent>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          {expandedContent === 'Painkiller' ? (
            <Typography paragraph>MedicineName: 'Aspirin'</Typography>
          ) : expandedContent === 'Supplements' ? (
            <>
              <Typography paragraph>MedicineName: 'Multivitamin'</Typography>
              <Typography paragraph>
                MedicineName: 'BEPANTHEN EYE SILM??TIPAT 40X0,5 ML'
              </Typography>
            </>
          ) : (
            <Typography paragraph>MedicineName: 'Calcium'</Typography>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}
