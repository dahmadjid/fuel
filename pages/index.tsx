import Button from "@mui/material/Button"
import IconTextField from "../components/IconTextField"
import Checkbox from "@mui/material/Checkbox"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import EmailOutlined from "@mui/icons-material/EmailOutlined"
import KeyOutlined from "@mui/icons-material/KeyOutlined"
import VisibilityButton from "../components/VisibilityButton"
import {useVisibilityStore} from "../utils/store"
import Image from "next/image"
export default function Auth()
{
    const pass_visible = useVisibilityStore((state) => state.pass_visible );
    return (
        <Box sx={{display:"flex",
        justifyContent:"center",
        alignItems:"center",
        minHeight:"100vh",
        backgroundColor:'primary.dark'}}  
        >
            <Box sx={{
            display:'flex',
            width:'300px',
            height:'500px',
            backgroundColor:'white',
            borderRadius:4,
            justifyContent:"center",
            alignItems:"center",
            flexDirection:'column',
            gap:4}}
            >
            <Image src="/resources/SLB_Logo_RGB_svg.svg" height={150} width={150} alt='SLB logo'/>
            <IconTextField iconStart={<EmailOutlined/>} iconEnd={null} sx={{width:'75%', height:'10%', [`& fieldset`]: {borderRadius:16}}} variant="outlined" label='Email'></IconTextField>
            <IconTextField iconStart={<KeyOutlined/>} iconEnd={<VisibilityButton/>} sx={{width:'75%', height:'10%', [`& fieldset`]: {borderRadius:16}}} variant="outlined" label='Password'></IconTextField>
            <Button sx={{width:'75%', height:'10%', borderRadius:16}} variant="contained" size='large'>Login</Button>

            
            </Box>
        </Box>
    )
}