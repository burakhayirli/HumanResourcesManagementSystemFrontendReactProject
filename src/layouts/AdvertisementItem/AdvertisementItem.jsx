import React from 'react'
import { Button, Card, Icon, Image, Label } from 'semantic-ui-react'

export default function AdvertisementItem(props) {
    const { content } = props;
    return (
        <Card color='orange' >
            <Card.Content textAlign="left">
                <Image
                    floated='left'
                    size='tiny'
                    src={props.image}
                />
                <Card.Header>{props.jobTitle}</Card.Header>
                {/* <Icon link name="tag" corner="top right" /> */}
                <Card.Meta >{props.jobEmployer}</Card.Meta>
                <Card.Meta >{props.jobCity} / Türkiye</Card.Meta>
                <Card.Description>
                    {props.jobCity} ofimizde çalışmak üzere <strong>{props.jobTitle}</strong> pozisyonunda takım arkadaşları arıyoruz.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        Başvuru Yap
                    </Button>
                    <Button basic color='red'>
                        Kaydet
                    </Button>
                </div>
            </Card.Content>
        </Card>
    )
}
