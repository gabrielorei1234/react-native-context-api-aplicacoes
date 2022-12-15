import { createContext, useState } from 'react'

export const AutenticacaoContext = createContext({})

export function AutenticacaoProvider({ children }) {

    const [usuario, setUsuario] = useState({})

    function login(email, senha) {
        if (email == 'gabriel@hotmail.com'
            && senha == 123) {
                setUsuario({
                    nome:'Gabriel',
                    email:email,
                    endereco:'Estrada do Pombo',
                    telefone: '(21) 9999-9999'
                })
            return 'ok'
        } else {
            return 'Email ou Senha incorretos';
        }
    }

    return (
        <AutenticacaoContext.Provider value={{
            usuario,login
        }}>
            {children}
        </AutenticacaoContext.Provider>
    )
}