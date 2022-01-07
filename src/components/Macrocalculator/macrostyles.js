import { makeStyles } from "@material-ui/core";
import { display } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8,15,5)
    
  },
  icon: {
    marginRight: '20px',
    marginLeft: '20px',

  },
  buttons: {
    marginTop: '40px'
    
  }

}));
export default useStyles;
