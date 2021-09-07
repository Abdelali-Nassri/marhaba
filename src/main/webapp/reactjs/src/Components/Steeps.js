import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Badge} from 'react-bootstrap';
import json from '../images/json.JPG';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [<h2>Choisir une requette Http</h2>, <h2>Récupérer la reponse</h2>, <h2>Créer une expérience</h2>];
}

function getStepContent(step) {
  switch (step) {
    case 0:
	  return (
		  <div>
	  		<h4>Emplacement</h4>
	  		<p>L'API est disponible sur <Badge style={{backgroundColor:'gray'}}>https://api.marhaba.com</Badge></p>
			<h4>Liste des photos de toutes les villes marocaines</h4>
			<h5><Badge style={{backgroundColor:'yellow'}}>https://api.marhaba.com/api/villes/photos</Badge></h5>
			<h4>Liste des photos d'une ville marocaine</h4>
			<h5><Badge style={{backgroundColor:'yellow'}}>https://api.marhaba.com/api/villes/photos/[ville]</Badge></h5>
			<h4>Spécifiant le nombre de photos</h4>
			<h5><Badge style={{backgroundColor:'yellow'}}>?nombre=[nombre]</Badge></h5>
			<h4>Liste des infos de toutes les villes marocaines</h4>
			<h5><Badge style={{backgroundColor:'orange'}}>https://api.marhaba.com/api/villes/infos</Badge></h5>	
			<h4>Liste des infos d'une ville marocaine</h4>
			<h5><Badge style={{backgroundColor:'orange'}}>https://api.marhaba.com/api/villes/infos/[ville]</Badge></h5>
      <h4>Liste des nomes de toutes les ville marocaine</h4>
			<h5><Badge style={{backgroundColor:'orange'}}>https://api.marhaba.com/api/villes/noms</Badge></h5>
		  </div>);
    case 1:
      return (
		  <div>
	  		<h4>Reponses</h4>
	  		<p>Les réponses sont envoyées au format JSON.</p>
			  <Badge style={{backgroundColor:'orange'}}>https://api.marhaba.com/api/villes/infos/Nador</Badge>
			<img src={json}/>
				
		  </div>);
    case 2:
	  return (
		  <div>
	  	 	<h4>Conçu et optimisé pour votre flux de travail.</h4>
		    <p>Nous avons conçu l'API <Badge style={{backgroundColor:'orange'}}>Marhaba</Badge> pour qu'elle s'intègre parfaitement à votre flux de travail.</p>
		  </div>	
			   );
    default:
      return 'Unknown step';
  }
}

export default function Steeps() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root} style={{marginLeft:'20px'}}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Retour
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finis' : 'Compris'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Toutes les étapes sont complétes</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Repasse
          </Button>
        </Paper>
      )}
    </div>
  );
}
