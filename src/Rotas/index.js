import React, { useContext } from 'react'

import { AutContexts } from '../components/Context/Contexts'

import NoAuthRotas from '../Rotas/NoAuth'
import AuthRotas from '../Rotas/Auth'

export default function RotasIndex() {
    const { autenticado } = useContext(AutContexts)

    return (
        autenticado === false ? <NoAuthRotas /> : <AuthRotas />
    )
}