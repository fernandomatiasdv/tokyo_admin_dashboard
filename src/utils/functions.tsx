import DashboardIcon from '@mui/icons-material/Dashboard'; 
import MemoryIcon from '@mui/icons-material/Memory';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SettingsIcon from '@mui/icons-material/Settings';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import LoginIcon from '@mui/icons-material/Login';

export const hasChild: (child: number[]) => boolean = (child: number[]) => child.length > 0;

export const icons = (index:string) => {
  const iconValues = {
    "dashboard": <DashboardIcon />,
    "memory": <MemoryIcon/>,
    "track-changes": <TrackChangesIcon />,
    "person-pin": <PersonPinIcon />,
    "settings": <SettingsIcon />,
    "supervised-user-circle": <SupervisedUserCircleIcon />,
    "login": <LoginIcon /> 
  }
  return iconValues[index]
}