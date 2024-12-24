"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {



    useEffect(() => {
        Crisp.configure("af3002db-af49-4653-b3e4-97cd4421d918");
    }, []);

    return null;
};