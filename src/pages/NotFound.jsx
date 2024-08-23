



import ClearIcon from '@mui/icons-material/Clear';


const NotFound=()=>{
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
            <ClearIcon sx={{fontSize:"100px",color:"red"}}/>
            <h3 style={{color:"white"}}>404 Page Not Found</h3>
        </div>
    )
}
export default NotFound