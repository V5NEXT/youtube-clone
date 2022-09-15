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
</Card>

    )
}

export default VideoCard