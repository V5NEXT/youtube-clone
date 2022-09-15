import React from 'react';
import {Link} from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { demoThumbnailUrl, demoVideoUrl,
demoVideoTitle, demoChanneUrl, demoChannelTitle } from '../utils/constants';
import { CheckCircle } from '@mui/icons-material';


const VideoCard = ({video : {id : { videoId}, snippet}}) => {
  return (
<Card>
    <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
    <CardMedia alt={snippet?.title}
    sx={{width:358, height:180}}
     image={snippet?.thumbnails?.high?.url}/>
    </Link>
    <CardContent sx={{backgroundColor : '#1e1e1e', height:'160px'}}>
    <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold"
         color="#fff">
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
    </Link>


    </CardContent>
</Card>

    )
}

export default VideoCard