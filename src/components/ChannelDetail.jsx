import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {Videos, ChannelCard} from './'
import { fetchFromApi } from '../utils/fetchFromApi';

const ChannelDetail = () => {
   const [ChannelDetail, setChannelDetail] = useState(null)
   const [videos, setVideos] = useState([])


   const {id} = useParams();

   useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]));

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items));
   }, [id])

  return (
<Box minHeight="95vh">
  <Box>
    <div style={{
      background: 'background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,72,1) 49%, rgba(0,212,255,1) 100%)',
      zIndex: 10,
      height:'300px'
   }}/>

  </Box>

</Box>  
 )
}

export default ChannelDetail