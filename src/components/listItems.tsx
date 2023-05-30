import NavLinkItem from "./NavLinkItem"
import { navigationLinks } from '../utils/constants/constants';
import { icons } from '../utils/functions';

export const mainListItems = (
  <>
    {navigationLinks.filter(l => l.parent === 0)
    .map( n => 
        <NavLinkItem 
          key={n.order} 
          selected={true} 
          name={n.name} 
          icon={icons(n.icon)}
          child={[1,2]} 
          path={n.link}  
        />
    )}

  </>
);
