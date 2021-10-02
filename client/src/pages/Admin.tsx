import * as React from 'react';
import {Box, Button, Container, Modal, TextField, Typography} from "@material-ui/core";
import {CreateType} from "../components/modals/CreateType";
import {CreateBrand} from "../components/modals/CreateBrand";
import {CreateDevice} from "../components/modals/CreateDevice";

type Props = {

};


export const Admin = (props: Props) => {
    return (
        <Container sx={{
            display:"flex",
            flexDirection: "column",
            alignItems:"center",
            justifyContent:"center",
            padding: 10
        }}>
            <CreateType/>
            <CreateBrand/>
            <CreateDevice/>
        </Container>
    );
};