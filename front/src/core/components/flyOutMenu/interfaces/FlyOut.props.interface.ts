import React from "react";

export interface FlyOutPropsInterface{
    id: string | number,
    localCards: []
    setLocalCard: (value: T | ((prevState: T) => T)) => void
    children: React.ReactNode
    open: boolean
    setOpen: (value: T | ((prevState: T) => T)) => void
    showEditCard: boolean
    setShowEditCard:(value: T | ((prevState: T) => T)) => void
}

export interface FlyOutMenuPropsInterface{
    id: string | number
    localCards: []
    setLocalCard: (value: T | ((prevState: T) => T)) => void
    showEditCard: boolean
    setShowEditCard:(value: T | ((prevState: T) => T)) => void
}