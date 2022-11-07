import Box from '@mui/material/Box'
import getData from './api/db'
import { useQuery, useQueryClient } from 'react-query'

export default function Dashboard()
{

    const queryClient = useQueryClient();


    const {data, isLoading ,isFetching} = useQuery('metadata', getData);
    console.log(isLoading);
    console.log(isFetching);
    console.log(data);

    return (
        <Box sx={{display:"flex",
        minHeight:"100vh",
        backgroundColor:'seconday.dark',
        
        }}  
        >
            <Box sx={{
            display:'flex',
            width:'20rem',
            height:'100vh',
            backgroundColor:'primary.dark',
            justifyContent:"center",
            alignItems:"center",
            flexDirection:'column',
            flexGrow:0,
            gap:4}}
            >



            </Box>
            
            <Box sx={{
            display:'flex',
            width:'auto',
            height:'6rem',
            backgroundColor:'black',
            justifyContent:"center",
            alignItems:"center",
            flexDirection:'column',
            flexGrow:1

            }}
            >

            </Box>



        </Box>
    )
}