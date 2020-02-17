import React from 'react'
import Header from '../global/Header'
import ButtonDropDown from '../global/ButtonDropDown'

export default function MainHeader() {
    return (
        <Header>
            <ButtonDropDown
                menuIcon="fas fa-plus"
                menuNome="Cadastros"
                items={[
                    {
                        itemNome: 'Cadastro Parceiros',
                        itemIcon: 'fas fa-user',
                        itemLink: `/main/parceiros`,
                    },
                    {
                        itemNome: 'Cadastro Usuário',
                        itemIcon: 'fas fa-users-cog',
                        itemLink: `/main/users`
                    }]}
            />
        </Header>
    )
}