import React from 'react';
import Categories from './Categories';
import { Grid } from 'semantic-ui-react';
import CandidateList from '../pages/CandidateList';
import {Route} from "react-router";
import EmployeeList from '../pages/EmployeeList';
import EmployerList from '../pages/EmployerList';
export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={CandidateList}/>
                        <Route exact path="/candidates" component={CandidateList}/>
                        <Route exact path="/employees" component={EmployeeList}/>
                        <Route exact path="/employers" component={EmployerList}/>
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        </div>
    )
}
