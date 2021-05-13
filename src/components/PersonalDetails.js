import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'

const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {
  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <Container  component="main" maxWidth="xs">
      <div>
        <Typography  component="h1" variant="h5">
          Sign up
        </Typography>
        <form>
          <Grid container spacing={2}>

            {/* first name */}
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="First Name"
                label="First Name"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
              />
            </Grid>
            {/* last name */}
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="Last Name"
                label="Last Name"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
              />
            </Grid>

            {/* country of residence */}
            <Grid item xs={12}>
              <TextField 
                placeholder="Country of Residence"
                label="Country of Residence"
                onChange={handleChange('country')}
                defaultValue={values.country}
                autoComplete="country"
                fullWidth
              />
            </Grid>

            {/* level of education */}
            <Grid item xs={12}>
              <TextField 
                placeholder="Level of Education"
                label="Level of Education"
                onChange={handleChange('levelOfEducation')}
                defaultValue={values.levelOfEducation}
                autoComplete="Level of Education"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                onClick={ Previous }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Previous
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                onClick={ Continue }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default PersonalDetails

