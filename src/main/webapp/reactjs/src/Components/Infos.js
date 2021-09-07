import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Accordion,Card} from '@material-ui/core';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import {Explore,Room,PeopleAlt} from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Infos(props) {
  const classes = useStyles();
  return (
	  
    <div className={classes.root}>
		{props.infos.map((info)=>(<>
      <Card  style={{margin:'15px'}}>
        <AccordionSummary
		  expandIcon={<Room />}
          aria-controls="panel2a-content"
          id="panel2a-header"

        >
          <Typography className={classes.heading} style={{fontWeight:"bold"}}>Régionalisation</Typography>
        </AccordionSummary>
        <AccordionDetails style={{textAlign:"left"}}>
          <Typography>
           Ville : {info.city}<br/>
		   Région : {info.admin_name}<br/>
		   Paye : {info.country}<br/>
          </Typography>
        </AccordionDetails>
      </Card>
      <Card  style={{margin:'15px'}}>
        <AccordionSummary
          expandIcon={<Explore  />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} style={{fontWeight:"bold"}}>Localisation géographique</Typography>
        </AccordionSummary>
        <AccordionDetails style={{textAlign:"left"}}>
          <Typography>
            longitude : {info.lng}<br/>
			latitude : {info.lat}
          </Typography>
        </AccordionDetails>
      </Card>
      <Card  style={{margin:'15px'}}>
        <AccordionSummary
          expandIcon={<PeopleAlt />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading} style={{fontWeight:"bold"}}>Population</Typography>
        </AccordionSummary>
		<AccordionDetails style={{textAlign:"left"}}>
          <Typography>
           {info.population} habitants
          </Typography>
        </AccordionDetails>
	  </Card></>
	 ))}
    </div>
  );
}
