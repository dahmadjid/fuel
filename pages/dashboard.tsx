import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import getData from './api/db'
import { useQuery, useQueryClient } from 'react-query'
import { Typography } from '@mui/material';
import { useState } from 'react';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import TimelineIcon from '@mui/icons-material/Timeline';
import SearchIcon from '@mui/icons-material/Search';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import IconTextField from '../components/IconTextField';
import Image from 'next/image'
export default function Dashboard()
{

    const queryClient = useQueryClient();


    const {data, isLoading ,isFetching} = useQuery('metadata', getData);
    console.log(isLoading);
    console.log(isFetching);
    console.log(data);
    const [pressed, setPressed] = useState(0);
    return (
        <Box sx={{display:"flex",
        minHeight:"100vh",
        backgroundColor:'seconday.dark',
        
        }}  
        >
            <Box sx={{
            display:'flex',
            width:'15rem',
            height:'100vh',
            padding:'1rem',
            backgroundColor:'#0010b0',
            alignItems:"center",
            flexDirection:'column',
            flexGrow:0,
            gap:'1.2rem'}}
            >   
            
                
                <Image src="/resources/SLB_Logo_white_svg.svg" height={100} width={100} alt='SLB logo'/>

                <Typography></Typography>
                <Typography></Typography>

                <Button sx={{width:'100%', height:'3.5rem', color:pressed == 0 ? 'white' : '#ccd0f8', backgroundColor: pressed == 0 ? '#0014dc' : null}} startIcon={<HomeIcon/>} variant={pressed == 0 ? "contained" : 'text'} size='large' onClick={() => {setPressed(0);}}>Base Camp 1</Button>
                <Button sx={{width:'100%', height:'3.5rem', color:pressed == 1 ? 'white' : '#ccd0f8', backgroundColor: pressed == 1 ? '#0014dc' : null}} startIcon={<HomeIcon/>} variant={pressed == 1 ? "contained" : 'text'} size='large' onClick={() => {setPressed(1);}}>Base Camp 2</Button>
                <Button sx={{width:'100%', height:'3.5rem', color:pressed == 2 ? 'white' : '#ccd0f8', backgroundColor: pressed == 2 ? '#0014dc' : null}} startIcon={<HomeIcon/>} variant={pressed == 2 ? "contained" : 'text'} size='large' onClick={() => {setPressed(2);}}>Base Camp 3</Button>
                <Button sx={{width:'100%', height:'3.5rem', color:pressed == 3 ? 'white' : '#ccd0f8', backgroundColor: pressed == 3 ? '#0014dc' : null}} startIcon={<HomeIcon/>} variant={pressed == 3 ? "contained" : 'text'} size='large' onClick={() => {setPressed(3);}}>Base Camp 4</Button>
                
            </Box>
            
            <Box sx={{
            display:'flex',
            width:'auto',
            height:'6rem',
            flexDirection:'row',
            flexGrow:1,
            gap:2,
            p:'1rem'

            }}
            >
                <Button sx={{ height:'3rem', color:'white', borderRadius:16}} startIcon={<SettingsIcon/>} variant="contained"  size='large'>Settings</Button>
                <Button sx={{ height:'3rem', color:'white', borderRadius:16}} startIcon={<TimelineIcon/>} variant="contained"  size='large'>Graphs</Button>
                <Button sx={{ height:'3rem', color:'white', borderRadius:16}} startIcon={<QueryBuilderIcon/>} variant="contained"  size='large'>Date/Time</Button>
                <IconTextField iconStart={<SearchIcon/>} iconEnd={null} sx={{width:'40rem',height:'3rem', [`& fieldset`]: {borderRadius:16}}} variant="outlined" label='Search'></IconTextField>


            </Box>
            


        </Box>
    )
}