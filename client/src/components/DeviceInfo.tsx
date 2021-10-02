import * as React from 'react';
import {Box, Button, TextField} from "@material-ui/core";


const style = {
    display: 'flex',
    marginBottom: '10px',
    justifyContent: 'space-between'
};

type Props = {
    info: any
    removeInfoHandler: (number: any) => void
};

export const DeviceInfo = ({removeInfoHandler, info}: Props) => {
    return (
        <Box sx={style}>
            <TextField sx={{marginLeft: 1}} label="Название свойства" variant="outlined"/>
            <TextField sx={{marginLeft: 1}} label="Описание свойства" variant="outlined"/>
            <Button onClick={() => removeInfoHandler(info.number)} color={"error"} variant={"outlined"}
                    sx={{marginLeft: 1}}>Удалить</Button>
        </Box>
    );
};