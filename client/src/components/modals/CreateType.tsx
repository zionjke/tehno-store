import * as React from 'react';
import {Box, Button, Modal, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {createType} from "../../store/reducers/type-reducer";
import {deviceApi} from "../../http/deviceApi";


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


export const CreateType = () => {
    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(false);
    const [typeName, setTypeName] = React.useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addTypeHandler = () => {
       dispatch(createType(typeName))
        setTypeName('')
        setOpen(false)
    }

    return (
        <Box>
            <Button onClick={handleOpen}>Добавить тип</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField value={typeName}
                               onChange={(event) => setTypeName(event.currentTarget.value)}
                               label="Имя типа"
                               variant="outlined"/>
                    <Button onClick={addTypeHandler}
                            variant={"outlined"}
                            sx={{marginLeft: 1}}>
                        Добавить
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
};