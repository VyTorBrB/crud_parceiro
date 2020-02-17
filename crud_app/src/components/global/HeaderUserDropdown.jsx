import React from 'react'
import ButtonWithPath from './ButtonWithPath';
import { ContextConsumer } from '../../config/context/Context';

export default function HeaderUserDropdown() {
    return (
        <ContextConsumer>
            {
                value =>
                    <div className="ml-auto">
                        <div id="userDropdown" className="btn-group">
                            <button type="button" className="btn btn-white dropdown-toggle"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {value.uiStore.userData.nome}
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <ButtonWithPath path={`/main`} classes="dropdown-item" type="button" label="Menu Principal">
                                    <i className="fas fa-home"></i>
                                </ButtonWithPath>

                                <ButtonWithPath path="/" classes="dropdown-item" type="button" label="Sair"
                                    onClick={e => {
                                        e.preventDefault()
                                        value.signOut()
                                    }} >
                                    <i className="fas fa-sign-out-alt"></i>
                                </ButtonWithPath>
                            </div>
                        </div>
                    </div>
            }
        </ContextConsumer>
    )
}