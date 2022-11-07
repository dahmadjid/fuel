import {useVisibilityStore} from "../utils/store"
import shallow from 'zustand/shallow'
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import IconButton from "@mui/material/IconButton"


export default function VisibilityButton()
{
    
    const [inverseVisibility, pass_visible] = useVisibilityStore((state) => [state.inverseVisibility, state.pass_visible], shallow);


    return (<IconButton onClick={inverseVisibility}>{pass_visible ? <VisibilityOff/> : <Visibility/>}</IconButton>)
}