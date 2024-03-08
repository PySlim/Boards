import React from "react";

export interface FlyOutPropsInterface{
    id: string | number,
    children: React.ReactNode
}

export interface FlyOutMenuPropsInterface{
    id: string | number
    isCreateCard: boolean
    setIsCreateCard: (value: T | ((prevState: T) => T)) => void
}