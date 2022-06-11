import React from 'react'
import { Card, CardContent, CardHeader,CardActions, Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Event = (props) => {
    return <Card >
          <CardHeader
          avatar={
                <Avatar aria-label="recipe" sx = {{backgroundColor: '#FFF8EB'}}>
                    {props.avatar}
                </Avatar>
            }
            title={props.name}
            style = {{backgroundColor: '#FFD485',}}
            subheader = {`${props.start} > ${props.end}`}
            />
          <CardContent style = {{backgroundColor: '#FFDB99',}}>
            {props.desc.split("\n").map(line => (
                <Typography>
                    {line}
                </Typography>
            ))}
          </CardContent>
          <CardActions style = {{backgroundColor: '#FFDB99',}}>
            <Paper style = {{padding: 5,backgroundColor: '#72B8FD'}}>
                {props.price}円
            </Paper>
          </CardActions>
    </Card>
        
} 
export default Event