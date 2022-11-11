import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
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
import { colors } from '../utils/theme'
import IconButton from '@mui/material/IconButton';
import {getData, columns} from '../utils/db'

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'firstName',
//     headerName: 'First name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];


export default function Dashboard()
{

    const queryClient = useQueryClient();
    const {data, status, isFetching} = useQuery('data', () => {return getData("Base Camp 1")});
  
    
    const [pressed, setPressed] = useState(0);
    return (
        <Box sx={{display:"flex",
        minHeight:"100vh",
        backgroundColor:'white',
        
        }}  
        >
            <Box sx={{
            display:'flex',
            width:'15rem',
            minHeight:'100vh',
            py:'1rem',
            backgroundColor:colors.dark,
            alignItems:"center",
            flexDirection:'column',
            flexGrow:0,
            gap:'1.2rem'}}
            >   
            
                
                <Image src="/resources/SLB_Logo_white_svg.svg" height={100} width={100} alt='SLB logo'/>

                <Typography></Typography>
                <Typography></Typography> 

                <Button sx={{width:'100%', height:'3.5rem', color:pressed == 0 ? "white" : '#ccd0f8', backgroundColor: pressed == 0 ? colors.main : null}} startIcon={<HomeIcon/>} variant='text' size='large' onClick={() => {setPressed(0);}}>Base Camp 1</Button>
                <Button sx={{width:'100%', height:'3.5rem', color:pressed == 1 ? "white" : '#ccd0f8', backgroundColor: pressed == 1 ? colors.main : null}} startIcon={<HomeIcon/>} variant='text' size='large' onClick={() => {setPressed(1);}}>Base Camp 2</Button>
                <Button sx={{width:'100%', height:'3.5rem', color:pressed == 2 ? "white" : '#ccd0f8', backgroundColor: pressed == 2 ? colors.main : null}} startIcon={<HomeIcon/>} variant='text' size='large' onClick={() => {setPressed(2);}}>Base Camp 3</Button>
                <Button sx={{width:'100%', height:'3.5rem', color:pressed == 3 ? "white" : '#ccd0f8', backgroundColor: pressed == 3 ? colors.main : null}} startIcon={<HomeIcon/>} variant='text' size='large' onClick={() => {setPressed(3);}}>Base Camp 4</Button>
                
            </Box>
            <Box sx={{
                display:'flex',
                width:'auto',
                justifyContent:'space-evenly',
                flexDirection:'column',
                flexGrow:1,
                p:'1rem',

            }}>
                <Box sx={{
                display:'flex',
                width:'auto',
                height:'6rem',
                justifyContent:'space-between',
                gap:2
                }}
                >
                    <Box display='flex' gap={2}>
                        <Button sx={{ height:'3rem',width:"9rem", color:'white', borderRadius:16}} startIcon={<TimelineIcon/>} variant="contained"  size='large'>Graphs</Button>
                        <Button sx={{ height:'3rem',width:"9rem", color:'white', borderRadius:16}} startIcon={<QueryBuilderIcon/>} variant="contained"  size='large'>Date/Time</Button>
                        <IconTextField iconStart={<SearchIcon/>} iconEnd={null} sx={{height:'3rem',width:"27rem", [`& fieldset`]: {borderRadius:16}}} variant="outlined" label='Search'></IconTextField>
                    </Box>
                    
                    <Box display='flex' gap={2}>
                        <Button sx={{ height:'3rem',width:"9rem", color:'white', borderRadius:16}} startIcon={<SettingsIcon/>} variant="contained"  size='large'>Settings</Button>
                    </Box>
                </Box>

                
                <Box
                sx={{display:'flex', flexGrow:1}}
                >
                    <DataGrid
                    columns={columns}
                    rows={status == 'success' ? data : []}
                    pageSize={13}
                    checkboxSelection
                    loading={isFetching}
                    />
                </Box>
            </Box>
            
            

        </Box>
    )
}