import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material'

const NewsCard = () => {
  return (
    <Card>
        <CardActionArea>    
            <CardMedia/>
            <div>
                <Typography color = 'textSecondary' variant='body2'
                 component='h2'>

                </Typography>
            </div>
        </CardActionArea>
    </Card>
  )
}

export default NewsCard