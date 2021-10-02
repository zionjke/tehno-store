import * as React from 'react';
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    SelectChangeEvent,
    TextField
} from "@material-ui/core";
import {useSelector} from "react-redux";
import {TypeBrandType} from "../../../types";
import {RootState} from "../../store/store";
import {DeviceInfo} from "../DeviceInfo";


const style = {
    display: "flex",
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


type Props = {};


export const CreateDevice = (props: Props) => {

    const types = useSelector<RootState, TypeBrandType[]>(state => state.types.types)
    const brands = useSelector<RootState, TypeBrandType[]>(state => state.brands.brands)

    const [open, setOpen] = React.useState(false);

    const [type, setType] = React.useState('');
    const [brand, setBrand] = React.useState('');
    const [deviceName, setDeviceName] = React.useState('');
    const [devicePrice, setDevicePrice] = React.useState(0);
    const [info, setInfo] = React.useState<any>([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleTypeChange = (event: SelectChangeEvent) => {

    };

    const handleBrandChange = (event: SelectChangeEvent) => {

    };

    const addInfoHandler = () => {
        setInfo([...info, {title: '', description: '', number:Date.now()}])
    };

    const removeInfoHandler = (number:any) => {
        setInfo(info.filter((i:any) => i.number !== number))
    }
    return (
        <Box>
            <Button onClick={handleOpen}>Добавить устройство</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={{flexDirection: 'column'}} sx={style}>
                    <FormControl>
                        <InputLabel id="typeId">Тип</InputLabel>
                        <Select sx={{marginBottom: 2}}
                                labelId="typeId"
                                value={type}
                                label="Тип"
                                onChange={handleTypeChange}
                        >
                            {types.map(type =>
                                <MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="brandId">Бренд</InputLabel>
                        <Select sx={{marginBottom: 2}}
                                labelId="brandId"
                                value={brand}
                                label="Бренд"
                                onChange={handleBrandChange}
                        >
                            {brands.map(brand =>
                                <MenuItem key={brand.id} value={brand.id}>{brand.name}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <TextField sx={{marginBottom: 2}} value={deviceName} label="Имя устройства" variant="outlined"/>
                    </FormControl>
                    <FormControl>
                        <TextField sx={{marginBottom: 2}} value={devicePrice} label="Стоимость устройства"
                                   variant="outlined"/>
                    </FormControl>
                    <label htmlFor="contained-button-file">
                        <input style={{display: 'none'}} accept="image/*" id="contained-button-file" multiple
                               type="file"/>
                        <Button sx={{marginBottom: 2, padding: 1}} variant="contained" component="span">
                            Загрузить картинку
                        </Button>
                    </label>
                    <Button onClick={addInfoHandler} sx={{marginBottom: 2, padding: 1}} variant={"contained"}>Добавить свойство</Button>
                    {info.map((i:any) => <DeviceInfo info={i} removeInfoHandler={removeInfoHandler} key={i.number}/>)}
                    <Button sx={{marginBottom: 2, padding: 1}} variant={"contained"}>Добавить Устройство</Button>
                </Box>
            </Modal>
        </Box>
    );
};