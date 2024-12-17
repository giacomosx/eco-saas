import React from 'react';
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import {Link} from "react-router-dom";


const MainSidebar = () => {
    const customTheme = {
        "root": {
            "base": "h-full",
            "collapsed": {
                "on": "w-16",
                "off": "w-64"
            },
            "inner": "h-full overflow-y-auto overflow-x-hidden rounded bg-white px-3 py-4"
        },
        "collapse": {
            "button": "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100",
            "icon": {
                "base": "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 ",
                "open": {
                    "off": "",
                    "on": "text-gray-900"
                }
            },
            "label": {
                "base": "ml-3 flex-1 whitespace-nowrap text-left",
                "icon": {
                    "base": "h-6 w-6 transition delay-0 ease-in-out",
                    "open": {
                        "on": "rotate-180",
                        "off": ""
                    }
                }
            },
            "list": "space-y-2 py-2"
        },
        "cta": {
            "base": "mt-6 rounded-lg bg-gray-100 p-4",
            "color": {
                "blue": "bg-cyan-50",
                "failure": "bg-red-50",
                "gray": "bg-alternative-50",
                "green": "bg-green-50",
                "light": "bg-light-50",
                "red": "bg-red-50",
                "purple": "bg-purple-50",
                "success": "bg-green-50",
                "yellow": "bg-yellow-50",
                "warning": "bg-yellow-50",            }
        },
        "item": {
            "base": "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100",
            "active": "bg-gray-100",
            "collapsed": {
                "insideCollapse": "group w-full pl-8 transition duration-75 mb-4 text-sm",
                "noIcon": "font-bold"
            },
            "content": {
                "base": "flex-1 whitespace-nowrap px-3"
            },
            "icon": {
                "base": "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900",
                "active": "text-gray-700"
            },
            "label": "",
            "listItem": ""
        },
        "items": {
            "base": ""
        },
        "itemGroup": {
            "base": "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 "
        }
    }

    return (
        <>
            <aside className="border-e border-gray-200 fixed top-0 pt-16 left-0 w-64 h-full transition-transform -translate-x-full sm:translate-x-0">
                <div className="h-full overflow-y-auto ">
                    <Sidebar theme={customTheme}>
                        <Sidebar.Items>
                            <Sidebar.ItemGroup >
                                <Sidebar.Item href="/" icon={HiChartPie}>
                                    Dashboard
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                            <Sidebar.ItemGroup >
                                <Sidebar.Collapse icon={HiInbox} label="Richieste di Offerta">
                                    <li className={customTheme.item.collapsed.insideCollapse}>
                                        <Link to={"/rdo"} className={'hover:text-primary'}>Vedi Tutte</Link>
                                    </li>
                                    <li className={customTheme.item.collapsed.insideCollapse}>
                                        <Link to={"/new-rdo" } className={'hover:text-primary'}>Nuova Richiesta</Link>
                                    </li>
                                </Sidebar.Collapse>
                                <Sidebar.Collapse icon={HiInbox} label="Preventivi">
                                    <li className={customTheme.item.collapsed.insideCollapse}>
                                        <Link to={"/rdo"} className={'hover:text-primary'}>Vedi Tutti</Link>
                                    </li>
                                    <li className={customTheme.item.collapsed.insideCollapse}>
                                        <Link to={"/new-rdo" } className={'hover:text-primary'}>Nuovo Preventivo</Link>
                                    </li>
                                </Sidebar.Collapse>
                            </Sidebar.ItemGroup>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item href="#" icon={HiUser}>
                                    Clienti
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiShoppingBag}>
                                    Fornitori
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                </div>
            </aside>
        </>
    );
};

export default MainSidebar;
