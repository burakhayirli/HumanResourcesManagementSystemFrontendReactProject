import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom';
import JobPositionService from '../services/jobPositionService';
export default function Categories() {

    const [jobPositions, setJobPositions] = useState([]);

    useEffect(() => {
        let jobPositionService = new JobPositionService();
        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data))
    }, [])

    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item>
                    <Menu.Header>Kategoriler</Menu.Header>
                </Menu.Item>

                <Menu.Item  key="a" name="Deneme1" as={NavLink} to="/advertisements/Software Developer"></Menu.Item>
                <Menu.Item  key="b" name="Deneme2" as={NavLink} to="/advertisements/Software Architect"></Menu.Item>
                
                {
                    jobPositions.map(jobPosition => (
                        <Menu.Item key="{jobPosition.id}" name={jobPosition.jobName}>
                            <Link  to={`/advertisements/${jobPosition.jobName}`}>{jobPosition.jobName}</Link>
                        </Menu.Item>
                    ))
                }
            </Menu>
        </div>
    )
}
