import DashboardIcon from '@mui/icons-material/Dashboard'; 
import MemoryIcon from '@mui/icons-material/Memory';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SettingsIcon from '@mui/icons-material/Settings';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/Add';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PenIcon from '@mui/icons-material/Add';

export const hasChild: (child: number[]) => boolean = (child: number[]) => child.length > 0;

export const icons = (index:string|undefined) => {
  if(!index) return null
  const iconValues = {
    "dashboard": <DashboardIcon />,
    "memory": <MemoryIcon/>,
    "track-changes": <TrackChangesIcon />,
    "person-pin": <PersonPinIcon />,
    "settings": <SettingsIcon />,
    "supervised-user-circle": <SupervisedUserCircleIcon />,
    "login": <LoginIcon /> ,
    "add": <AddIcon />,
    "errorOutline": <ErrorOutlineIcon />,
    "pen": <PenIcon />
  }
  return iconValues[index]
}

export const getParameters = (index:string):string => {
  const selectParameter = {
      "all": ["primary", "Todos"],
      "testing": ["info", "A evaluar"],
      "tested": ["success", "Evaluados"]
  }
  return selectParameter[index]
}

export const getPropertiesFromRol = (index:number) => {
  const actions = {
    1: {nameRol: "Administrador", color: "primary"},
    2: {nameRol: "Usuario editor", color: "success" },
  }
  return actions[index]
}