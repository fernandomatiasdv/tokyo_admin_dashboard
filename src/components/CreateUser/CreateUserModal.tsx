import { useContext } from 'react';
import {Box, Modal} from '@mui/material';
import NavBarContext from '../../contexts/NavBarContext';
import { styleBoxModel } from '../../styles';
import CreateUserForm from './CreateUserForm';

const CreateUserModal = () => {
  const { openCreateUserModal, setOpenCreateUserModal } = useContext(NavBarContext);

  return (
      <Modal
        open={openCreateUserModal}
        onClose={()=>setOpenCreateUserModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{borderRadius: "10px"}}
      >
        <Box sx={styleBoxModel}>
          <CreateUserForm />
        </Box>
      </Modal>
  );
}

export default CreateUserModal