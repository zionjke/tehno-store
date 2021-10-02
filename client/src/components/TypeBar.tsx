import * as React from 'react';
import {TypeBrandType} from "../../types";
import {Box, List, ListItemButton, ListItemText} from "@material-ui/core";

type Props = {
    types: TypeBrandType[]
    selectTypeHandler: (type: TypeBrandType) => void
    selectedType: TypeBrandType
};

export const TypeBar = ({selectTypeHandler, selectedType,types}: Props) => {

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        type: TypeBrandType
    ) => {
        selectTypeHandler(type)
    };


    return (
        <Box sx={{width: '50%', bgcolor: 'background.paper'}}>
            <List component="nav">
                {types.map((type) => {
                    return (
                        <ListItemButton
                            style={{cursor: 'pointer'}}
                            key={type.id}
                            selected={selectedType.id === type.id}
                            onClick={(event) => handleListItemClick(event, type)}
                        >
                            <ListItemText primary={type.name}/>
                        </ListItemButton>
                    )
                })}
            </List>
        </Box>
    );
};