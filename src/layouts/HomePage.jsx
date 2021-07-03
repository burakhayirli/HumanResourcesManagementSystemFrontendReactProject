import React, { Route } from 'react'
import { useRouteMatch, Link ,Switch} from 'react-router-dom'
import AdvertisementList from '../pages/AdvertisementList'
import Categories from './Categories'
import { Router } from 'react-router'
import { Grid } from 'semantic-ui-react'
import AdvertisementListByJobName from '../pages/AdvertisementListByJobName'
export default function HomePage() {
    //momentjs.com tarih kütüphanesini araştır
    let match = useRouteMatch();
    return (

        <div className="container">
            Home Page
            {console.log(match.url + "- " + match.path)}
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <AdvertisementList />

                        {/* <Switch>
                            <Route path="/">
                                <AdvertisementList />
                            </Route>
                            <Route path="/advertisements/:jobname" component={AdvertisementListByJobName} />
                        </Switch> */}


                        {/* <Route path="/" component={AdvertisementList}/>  */}
                        {/* <Route path="/advertisements/:jobname" component={AdvertisementListByJobName} />  */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
