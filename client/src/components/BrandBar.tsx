import * as React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {TypeBrandType} from "../../types";
import {Box, List, ListItemButton, ListItemText} from "@material-ui/core";

type Props = {
    selectBrandHandler: (brand: TypeBrandType) => void
    selectedBrand: TypeBrandType
};

export const BrandBar = ({selectBrandHandler, selectedBrand}: Props) => {

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        brand: TypeBrandType
    ) => {
        selectBrandHandler(brand)
    };
    const brands = useSelector<RootState, TypeBrandType[]>(state => state.brands.brands)

    return (
        <Box sx={{width: '20%'}}>
            <List sx={{
                display: 'flex',
                flexDirection: 'row',
                padding: 0,
            }} component="nav">
                {brands.map((brand) => {
                    return (
                        <ListItemButton
                            style={{cursor: 'pointer'}}
                            key={brand.id}
                            selected={selectedBrand.id === brand.id}
                            onClick={(event) => handleListItemClick(event, brand)}
                        >
                            <ListItemText primary={brand.name}/>
                        </ListItemButton>
                    )
                })}
            </List>
        </Box>
    );
};