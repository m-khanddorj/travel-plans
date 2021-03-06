import * as React from 'react';
import { Container} from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Event from './components/Event'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';

const App = () => {
  return <Container fluid style ={{backgroundColor: '#FFF8EB'}}> 
    <Grid container>
      <Grid item xs = {0} md={3}/>
      <Grid item xs = {12} md={6}>
        <Typography variant="h4" mt={2}>
        {/* <CommuteIcon/> */}
          Ghibli Trip 🧭
        </Typography>
        <Divider />
        
        <Box sx={{ marginTop:2, marginBottom:2 }}>
          <Grid container rowSpacing={2}>
            <Grid item xs = {12} >
              <Event
                avatar = '🚆'
                name = 'Commute'
                start = '11:40'
                end = '13:00'
                desc = {
                    `
                      We will go to 吉祥寺駅 by train. 
                      宮前平駅 -> 吉祥寺駅
                  `
                }
                price = {460}
              />
            </Grid>
            <Grid item xs = {12} >
              <Event
                avatar = '🍱'
                name = 'Lunch'
                start = '13:00'
                end = '14:30'
                desc = {
                  `
                    Lets have lunch at the Cafe Russia.
                  `
                }
                price = {'~2000 - 3000'}
              />
            </Grid>
            <Grid item xs = {12} >
              <Event
                avatar = '🚌'
                name = 'Commute'
                start = '14:30'
                end = '15:00'
                desc = {
                  `
                    We will go to the Ghibli museum by bus. 
                    吉祥寺駅 -> Ghibli Museum
                  `
                }
                price = {'220'}
              />
            </Grid>
            <Grid item xs = {12} >
              <Event
                avatar = '🎨'
                name = 'Ghibli Museum'
                start = '15:00'
                end = '16:30'
                desc = {
                  `
                    Let's explore the Ghibli world!
                  `
                }
                price = {'1000'}
              />
              
            </Grid>
            
            <Grid item xs = {12} >
              <Event
                avatar = '🚌'
                name = 'Commute'
                start = '16:40'
                end = '16:50'
                desc = {
                  `
                    Let's head back to the 吉祥寺駅.
                    Ghibli Museum -> 吉祥寺駅
                  `
                }
                price = {'220'}
              />
            </Grid>
            <Grid item xs = {12} >
              <Event
                avatar = '☕'
                name = "Shirohige's Cream Puff Factory"
                start = '16:50'
                end = '17:10'
                desc = {
                  `
                    There are Totoro shaped deserts!
                  `
                }
                price = {'~1000'}
              />
            </Grid>
            <Grid item xs = {12} >
              <Event
                avatar = '🚆'
                name = 'Commute'
                start = '17:10'
                end = '18:10'
                desc = {
                    `
                      Let's head back home! 
                      吉祥寺駅-> 宮前平駅
                  `
                }
                price = {460}
              />
            </Grid>
            <Grid item xs = {12}>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AccessTimeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="11:00 > 18:30" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <CurrencyYenIcon/>
                    </ListItemIcon>
                    <ListItemText primary="~5000" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs = {0} md={3}/>
    </Grid>
  </Container>
}

export default App