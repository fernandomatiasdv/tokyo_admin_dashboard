import Avatar from '@mui/material/Avatar';
import {AvatarGroup as AvatarGroupMUI} from '@mui/material';

export default function GroupAvatars() {
  return (
    <AvatarGroupMUI max={4}>
      <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4W3b79361tjcn957BVLnLTxupx155dDSaEwiso3Q-EOXl5NkqLKuUlUuOexCibKFE-9s&usqp=CAU" />
      <Avatar alt="Travis Howard" src="https://i.pinimg.com/236x/be/2d/cd/be2dcd2f8d9c1364cca76c63cd9da2a9.jpg" />
      <Avatar alt="Cindy Baker" src="https://i.pinimg.com/236x/bf/c6/7e/bfc67e1bcfd0e331ea9587fbdcaeacac.jpg" />
      <Avatar alt="Agnes Walker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl6tjFP7_qvRlUEZQA4bFMzDstJRbixcBVKRkzx-QqWeRK3wZb" />
      <Avatar alt="Trevor Henderson" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQdzcKzYWqfYgtLwhkX-hxLfjbmHIvHA966qAoUyjPOVLi5Mmm" />
    </AvatarGroupMUI>
  );
}