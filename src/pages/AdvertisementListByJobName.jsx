import React, { useState, useEffect } from 'react'
import { Card } from 'semantic-ui-react'
import AdvertisementService from '../services/advertisementService';
import AdvertisementItem from '../layouts/AdvertisementItem/AdvertisementItem'
import { useParams } from 'react-router-dom';

export default function AdvertisementListByJobName() {

    let { jobname } = useParams();
    const [advertisements, setAdvertisements] = useState([]);

    useEffect(() => {
        let advertisementService = new AdvertisementService();
        advertisementService.getAdvertisementsByJobName(jobname).then(result => setAdvertisements(result.data.data))
    }, [jobname])

    const employerLogo = "https://media-exp3.licdn.com/dms/image/C4D03AQEQU8bMX2Nu1w/profile-displayphoto-shrink_100_100/0/1586847833785?e=1628726400&v=beta&t=atBEQ0W11i9EYPp844MPEC_Ug0BNwIW7nF5k3Zjyp_g"
    return (
        <Card.Group itemsPerRow={2}>
            {
                advertisements.map(advertisement => (
                    <AdvertisementItem key={advertisement.id} image={employerLogo} jobTitle={advertisement.jobPositionPosition}
                        jobEmployer={advertisement.employerCompanyName} jobCity={advertisement.cityName} />
                ))
            }
        </Card.Group>
    )
}




/* <AdvertisementItem image={employerLogo} jobTitle="Software Developer" jobEmployer="Turkcell" jobCity="Antalya"/>
<AdvertisementItem image={employerLogo} jobTitle=".Net Core Developer" jobEmployer="Ericcson" jobCity="İzmir"/>
<AdvertisementItem image={employerLogo} jobTitle="Senior Java Developer" jobEmployer="Apple" jobCity="İstanbul"/>
<AdvertisementItem image={employerLogo} jobTitle="Junior Java Developer" jobEmployer="Samsung" jobCity="Ankara"/>
<AdvertisementItem image={employerLogo} jobTitle="Software Developer" jobEmployer="İş Bankası" jobCity="Eskişehir"/>
<AdvertisementItem image={employerLogo} jobTitle="Software Developer" jobEmployer="Akbank" jobCity="İstanbul"/> */