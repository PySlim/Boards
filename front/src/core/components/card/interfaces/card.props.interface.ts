import React from 'react'
export interface CardPropsInterface{
    body: string
    title: string
    id: string | number
    localCards: []
    setLocalCards: (value: T | ((prevState: T) => T)) => void
    children: React.ReactNode
}

export interface CardComponentPropsInterface{
    body: string
    title: string
    id: string | number
    localCards: []
    setLocalCards: (value: T | ((prevState: T) => T)) => void
}