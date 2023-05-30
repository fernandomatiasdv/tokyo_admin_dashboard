import ListItemText from '@mui/material/ListItemText';

import { styled } from '@mui/material/styles';
import { css } from '@emotion/react'

/*const isActive = (active) => 
    active ? css`color: red;` : css`color: blue;`
*/

const CustomizedListItemText = styled(ListItemText)`
  color: #20b2aa;
  border-radius: "6px";
  display: flex;
  flex-grow: 1;

  :hover {
    color: #2e8b57;
  }

  & .MuiSlider-thumb {
    border-radius: 1px;
  }
`;

export default CustomizedListItemText;