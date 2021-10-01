import * as React from 'react';
import {Grid} from "@material-ui/core";
import {TypeBar} from "../components/TypeBar";
import {useDispatch, useSelector} from "react-redux";
import {TypeBrandType} from "../../types";
import { setSelectedType } from '../store/reducers/type-reducer';
import {RootState} from "../store/store";
import { BrandBar } from '../components/BrandBar';
import {setSelectedBrand} from "../store/reducers/brand-reducer";
import {DeviceList} from "../components/DeviceList";



export const Shop = () => {
    const dispatch = useDispatch()
    const selectedType = useSelector<RootState,TypeBrandType>(state => state.types.selectedType)
    const selectedBrand = useSelector<RootState,TypeBrandType>(state => state.brands.selectedBrand)

    const selectTypeHandler = (type:TypeBrandType) => {
        dispatch(setSelectedType(type))
    }

    const selectBrandHandler = (brand:TypeBrandType) => {
        dispatch(setSelectedBrand(brand))
    }
    return (
        <Grid container spacing={2}>
            <Grid  item xs={3}>

            </Grid>
            <Grid item xs={9}>
               <BrandBar selectBrandHandler={selectBrandHandler} selectedBrand={selectedBrand}/>
            </Grid>
            <Grid item xs={3}>
                <TypeBar selectTypeHandler={selectTypeHandler} selectedType={selectedType}/>
            </Grid>
            <Grid item xs={9}>
                <DeviceList/>
            </Grid>
        </Grid>
    );
};
