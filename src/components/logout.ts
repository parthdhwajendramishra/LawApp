import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getUpdateAuth } from "../authentication/services/auth/getUpdateAuth";
import { RootState } from "../../utils/type";
import { authSelected } from '../authentication/services/auth/selectors';
import { notEmpty } from "../../validation/validate";
export const Logout = (props: any) => {
    const sessionData = useSelector<RootState, RootState["authentication"]>(authSelected);
    const isLogoutRender = React.useRef(true);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!isLogoutRender.current && props == "logout") {

            dispatch<any>(getUpdateAuth({ "token": "", "username": "" }));
        }
        isLogoutRender.current = false;
    })
}
