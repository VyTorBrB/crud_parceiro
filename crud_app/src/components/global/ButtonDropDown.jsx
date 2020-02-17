import React from 'react'
import { Link } from 'react-router-dom'
import uuidV4 from 'uuid/v4'
/**
 * @typedef {Object} Items
 * @property {String} [itemLink] whethers if the item will trigget some routing
 * @property {Function[]} [onClick]
 * @property {String} itemIcon
 * @property {String} itemNome
 * @property {String} [modalId] whether if its to open a modal default ""
 * @property {Boolean} [hide = false]
 * 
 * @typedef {Object<string, any>} Props
 * @property {String} menuIcon
 * @property {String} menuNome
 * @property {Items[]} items
 * @property {String} [buttonColor] default btn-white
 * 
 * @param {Props} props 
 */
export default function ButtonDropDown(props) {
    return (
        <div
            id="userDropdown"
            className="btn-group">
            <button
                type="button"
                className={`btn ${props.buttonColor ? props.buttonColor : 'btn-white'} dropdown-toggle`}
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <i className={props.menuIcon}></i> {props.menuNome}
            </button>
            <div
                className="dropdown-menu dropdown-menu-right">
                {
                    props.items.map((item, index) => {
                        return (
                            item.itemLink ? (
                                <div key={uuidV4()} className="dropdown-menu-item">
                                    <Link key={index} to={item.itemLink}>
                                        <button
                                            hidden={item.hide}
                                            className="dropdown-item text-dark"
                                            type="button"
                                            onClick={() => {
                                                if (item.onClick && item.onClick.length) return item.onClick.forEach(e => e())
                                            }} >
                                            <i className={item.itemIcon}></i> {item.itemNome}
                                        </button>
                                    </Link>
                                </div>
                            ) : (
                                    <div key={uuidV4()} className="dropdown-menu-item">
                                        <button
                                            hidden={item.hide}
                                            className="dropdown-item text-dark"
                                            type="button"
                                            key={index}
                                            data-toggle="modal"
                                            data-target={`${item.modalId ? item.modalId : ''}`}
                                            onClick={() => {
                                                if (item.onClick && item.onClick.length) return item.onClick.forEach(e => e())
                                            }} >
                                            <i className={item.itemIcon}></i> {item.itemNome}
                                        </button>
                                    </div>
                                )
                        )
                    })
                }
            </div>
        </div>
    )
}