import React from 'react';
import Categories from './Categories';
import { Grid,Label } from 'semantic-ui-react';
import CandidateList from '../pages/CandidateList';
import {Route} from "react-router";
import EmployeeList from '../pages/EmployeeList';
import EmployerList from '../pages/EmployerList';
import Login from '../pages/Login';
export default function AdminDashboard() {
    return (
        <div>
            <Label>Admin Dashboard</Label>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/admin" component={CandidateList}/>
                        <Route exact path="/admin/candidates" component={CandidateList}/>
                        <Route exact path="/admin/employees" component={EmployeeList}/>
                        <Route exact path="/admin/employers" component={EmployerList}/>
                        <Route exact path="/login" component={Login}/>
                       
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
