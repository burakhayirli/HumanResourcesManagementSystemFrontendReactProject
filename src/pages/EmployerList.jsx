import React, {useState,useEffect} from 'react'
import { Icon, Label, Menu, Table,Radio } from 'semantic-ui-react'
import EmployerService from '../services/employerService';

export default function EmployerList() {
    
    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getEmployers().then(result => setEmployers(result.data.data))
    }, [])
    
    // const [open, setOpen] = useState(false); 

    // const handleClick = e => {
    //     e.preventDefault();
    //     setOpen(!open);
    //     console.log(!open)
    //   };

    return (
        <div>
           <Label>İş Veren Listesi {employers.length}</Label>
           <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>E-Posta</Table.HeaderCell>
                        <Table.HeaderCell>Web Sitesi</Table.HeaderCell>
                        <Table.HeaderCell>Telefon</Table.HeaderCell>
                        <Table.HeaderCell>Durum</Table.HeaderCell>
                        <Table.HeaderCell>Durum</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                
                <Table.Body>
                    {
                        employers.map(employer=>(
                            <Table.Row key={employer.id}>
                            <Table.Cell>{employer.companyName}</Table.Cell>
                            <Table.Cell>{employer.email}</Table.Cell>
                            <Table.Cell>{employer.website}</Table.Cell>
                            <Table.Cell>{employer.phone}</Table.Cell>
                            <Table.Cell>{employer.status === true ? "Aktif": "Pasif"}</Table.Cell>
                            <Table.Cell><Radio toggle checked={employer.status} /></Table.Cell>
                            
                        </Table.Row>
                        ))
                    }
                 
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
