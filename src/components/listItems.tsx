import NavLinkItem from "./NavLinkItem"
import { navigationLinks } from '../utils/constants/constants';
import { icons } from '../utils/functions';

export const mainListItems = (
  <>
    {
    navigationLinks.filter(l => l.parent === 0)
    .map( (n,i) => {
        return(
          <>
            <NavLinkItem 
              key={i} 
              selected={true} 
              name={n.name} 
              icon={icons(n.icon)}
              child={n.child} 
              path={n.link}  
            />
           {/* <Fade in={open}> */}
            {
              !!n.child && n.child.length > 0 && n.child.map(c => 
                navigationLinks.filter(l => l.order === c)
                .map((nf,idx) =>
                  <NavLinkItem 
                    key={idx} 
                    selected={true} 
                    name={nf.name} 
                    icon={icons(nf.icon)}
                    child={nf.child} 
                    path={nf.link}  
                  />
              ))
            }
            {/* </Fade>*/}
          </>
        )
      }
    )}
  </>
);
