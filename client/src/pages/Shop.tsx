import * as React from 'react';
import {Grid} from "@material-ui/core";
import {TypeBar} from "../components/TypeBar";
import {useDispatch, useSelector} from "react-redux";
import {DeviceType, TypeBrandType} from "../../types";
import {fetchTypes, setSelectedType} from '../store/reducers/type-reducer';
import {RootState} from "../store/store";
import {BrandBar} from '../components/BrandBar';
import {fetchBrands, setSelectedBrand} from "../store/reducers/brand-reducer";
import {DeviceList} from "../components/DeviceList";
import {useEffect} from "react";
import {fetchDevices} from "../store/reducers/device-reducer";


export const Shop = () => {
    const dispatch = useDispatch()

    const selectedType = useSelector<RootState, TypeBrandType>(state => state.types.selectedType)
    const selectedBrand = useSelector<RootState, TypeBrandType>(state => state.brands.selectedBrand)

    const types = useSelector<RootState, TypeBrandType[]>(state => state.types.types)
    const brands = useSelector<RootState, TypeBrandType[]>(state => state.brands.brands)
    const devices = useSelector<RootState, DeviceType[]>(state => state.devices.devices)


    const selectTypeHandler = (type: TypeBrandType) => {
        dispatch(setSelectedType(type))
    }

    const selectBrandHandler = (brand: TypeBrandType) => {
        dispatch(setSelectedBrand(brand))
    }

    useEffect(() => {
        dispatch(fetchTypes())
        dispatch(fetchBrands())
        dispatch(fetchDevices())
    }, [])

    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>

            </Grid>
            <Grid item xs={9}>
                <BrandBar brands={brands}
                          selectBrandHandler={selectBrandHandler}
                          selectedBrand={selectedBrand}/>
            </Grid>
            <Grid item xs={3}>
                <TypeBar types={types}
                         selectTypeHandler={selectTypeHandler}
                         selectedType={selectedType}/>
            </Grid>
            <Grid item xs={9}>
                <DeviceList devices={devices}/>
            </Grid>
        </Grid>
    );
};
