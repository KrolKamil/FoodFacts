import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const defaultProduct = {
  _id: '',
  allergens_tags: [],
  brands: '',
  amino_acids_tags: [],
  categories_tags: [],
  code: '',
  countries_tags: [],
  data_sources_tags: [],
  image_url: '',
  ingredients: [
    {
      id: 'en:something',
      percent_min: 0,
      percent_max: 100,
      vegetarian: '',
      vegan: '',
      rank: 1
    },
  ],
  ingredients_analysis_tags: [],
  ingredients_tags: [],
  labels_tags: [],
  nutriments: {
    
  },
  nutriscore_data: {
    
  },
  vitamins_tags: []
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '60%',
    margin: '0 auto'
  },
  media: {
    height: 0,
    paddingTop: '40%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  entryText: {
    display: 'block'
  },
  chipSpacing: {
    marginRight: '1em'
  }
}));

export default function ProductDetails({ details = defaultProduct }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant='outlined'>
      <CardHeader
        title={details.brands}
        subheader={details.code}
      />
      <CardMedia
        className={classes.media}
        image={details.image_url}
        title="Product image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Nutriments:</b>
          {
            Object.keys(details.nutriments).map((nutrimentKey) => (
            <span className={classes.entryText}>{nutrimentKey.replace(/_/g, ' ').replace(/-/g, ' ')}: {details.nutriments[nutrimentKey]}</span>
            ))
          }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Nutriscore data:</b>
          {
            Object.keys(details.nutriscore_data).map((nutrimentKey) => (
              <span className={classes.entryText}>{nutrimentKey.replace(/_/g, ' ').replace(/-/g, ' ')}: {details.nutriscore_data[nutrimentKey]}</span>
            ))
          }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Ingredients:</b>
          {
            details.ingredients.map((ingredient) => (
              <span className={classes.entryText}>{ingredient.id.substring(3)}, max {ingredient.percent_max.toFixed(2)}%, vegeratian: {ingredient.vegetarian || 'no'}, vegan: {ingredient.vegan || 'no'}</span>
            ))
          }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Vitamins:</b>
        </Typography>
        {
          details.vitamins_tags.length > 0 ? details.vitamins_tags.map((vitamin) => (
            <Chip variant='outlined' className={classes.chipSpacing} label={vitamin.substring(3)}></Chip>
          )) : <Chip label='Unknown'></Chip>
        }
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Ingredients analysis:</b>
        </Typography>
        {
          details.ingredients_analysis_tags.length > 0 ? details.ingredients_analysis_tags.map((element) => (
            <Chip variant='outlined' className={classes.chipSpacing} label={element.substring(3)}></Chip>
          )) : <Chip label='Unknown'></Chip>
        }
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Amino acids:</b>
        </Typography>
        {
          details.amino_acids_tags.length > 0 ? details.amino_acids_tags.map((element) => (
            <Chip variant='outlined' className={classes.chipSpacing} label={element.substring(3)}></Chip>
          )) : <Chip label='Unknown'></Chip>
        }
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Data sources:</b>
        </Typography>
        {
          details.data_sources_tags.length > 0 ? details.data_sources_tags.map((element) => (
            <Chip variant='outlined' className={classes.chipSpacing} label={element}></Chip>
          )) : <Chip label='Unknown'></Chip>
        }
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Available in:</b>
        </Typography>
        {
          details.countries_tags.length > 0 ? details.countries_tags.map((element) => (
            <Chip variant='outlined' className={classes.chipSpacing} label={element.substring(3)}></Chip>
          )) : <Chip label='Unknown'></Chip>
        }
      </CardContent>
    </Card>
  );
}