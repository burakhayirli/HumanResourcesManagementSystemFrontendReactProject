import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink,useRouteMatch,Link } from 'react-router-dom';
import JobPositionService from '../services/jobPositionService';
export default function Categories() {

    let match = useRouteMatch();
    const [jobPositions, setJobPositions] = useState([]);

    useEffect(() => {
        let jobPositionService = new JobPositionService();
        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data))
    }, [])
//as={NavLink} to={`/advertisements/${jobPosition.jobName}`}
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item>
                    <Menu.Header>Kategoriler</Menu.Header>
                </Menu.Item>
                {
                    jobPositions.map(jobPosition => (
                        <Menu.Item key={jobPosition.id} name={jobPosition.jobName}>
                    <Link to={`/advertisements/${jobPosition.jobName}`}>{jobPosition.jobName}</Link>
                        </Menu.Item>
                    ))
                }
            </Menu>
        </div>
    )
}
