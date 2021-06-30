import React from 'react';
import Categories from './Categories';
import { Grid, Label } from 'semantic-ui-react';
import CandidateList from '../pages/CandidateList';
import { Route } from "react-router";
import EmployeeList from '../pages/EmployeeList';
import EmployerList from '../pages/EmployerList';
import Login from '../pages/Login';
import AdvertisementList from '../pages/AdvertisementList';
import AdvertisementListByJobName from '../pages/AdvertisementListByJobName';
export default function Dashboard() {
    return (
        <div>
            <Label>Dashboard</Label>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={AdvertisementList} />
                        <Route exact path="/candidates" component={CandidateList} />
                        <Route exact path="/employees" component={EmployeeList} />
                        <Route exact path="/employers" component={EmployerList} />
                        <Route path="/login" component={Login} />
                        <Route exact path="/advertisements" component={AdvertisementList} />
                        <Route exact path="/advertisements/:jobname" component={AdvertisementListByJobName} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
