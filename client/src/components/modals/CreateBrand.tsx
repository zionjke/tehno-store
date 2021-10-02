import * as React from 'react';
import {Box, Button, Modal, TextField} from "@material-ui/core";


const style = {
    display: 'flex',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type Props = {

};

export const CreateBrand = (props: Props) => {
    const [open, setOpen] = React.useState(false);
    const [brandName, setBrandName] = React.useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box>
            <Button onClick={handleOpen}>Добавить бренд</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField value={brandName}  label="Имя бренда" variant="outlined" />
                    <Button variant={"outlined"} sx={{marginLeft:1}}>Добавить</Button>
                </Box>
            </Modal>
        </Box>
    );
};