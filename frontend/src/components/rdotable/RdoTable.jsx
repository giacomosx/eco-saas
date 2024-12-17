import { Table } from "flowbite-react";
import {Link} from "react-router-dom";

export function RdoTable() {
    return (
        <div className="overflow-x-auto">
            <Table striped>
                <Table.Head>
                    <Table.HeadCell>Data</Table.HeadCell>
                    <Table.HeadCell>Prospect</Table.HeadCell>
                    <Table.HeadCell>Stato</Table.HeadCell>
                    <Table.HeadCell>Rif. Preventivo</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Modifica</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white ">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                            {'Apple MacBook Pro 17"'}
                        </Table.Cell>
                        <Table.Cell>Sliver</Table.Cell>
                        <Table.Cell>Laptop</Table.Cell>
                        <Table.Cell>$2999</Table.Cell>
                        <Table.Cell>
                            <Link to={"/"} className="font-medium text-primary hover:underline ">
                                Modifica
                            </Link>
                        </Table.Cell>
                    </Table.Row>
                <Table.Row className="bg-white ">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                            {'Apple MacBook Pro 17"'}
                        </Table.Cell>
                        <Table.Cell>Sliver</Table.Cell>
                        <Table.Cell>Laptop</Table.Cell>
                        <Table.Cell>$2999</Table.Cell>
                        <Table.Cell>
                            <Link to={"/"} className="font-medium text-primary hover:underline ">
                                Modifica
                            </Link>
                        </Table.Cell>
                    </Table.Row>
                <Table.Row className="bg-white ">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                            {'Apple MacBook Pro 17"'}
                        </Table.Cell>
                        <Table.Cell>Sliver</Table.Cell>
                        <Table.Cell>Laptop</Table.Cell>
                        <Table.Cell>$2999</Table.Cell>
                        <Table.Cell>
                            <Link to={"/"} className="font-medium text-primary hover:underline ">
                                Modifica
                            </Link><Table.Row className="bg-white ">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                                {'Apple MacBook Pro 17"'}
                            </Table.Cell>
                            <Table.Cell>Sliver</Table.Cell>
                            <Table.Cell>Laptop</Table.Cell>
                            <Table.Cell>$2999</Table.Cell>
                            <Table.Cell>
                                <Link to={"/"} className="font-medium text-primary hover:underline ">
                                    Modifica
                                </Link>
                            </Table.Cell>
                        </Table.Row>

                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
}
