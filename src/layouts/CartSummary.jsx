import React from 'react'
import { Dropdown} from 'semantic-ui-react'
export default function CartSummary() {
    return (
        <div>
            <Dropdown item text='Bana Özel'>
                <Dropdown.Menu>
                    <Dropdown.Item>Önerilen İş İlanları</Dropdown.Item>
                    <Dropdown.Item>Başvurularım</Dropdown.Item>
                    <Dropdown.Item>Kaydedilenler</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
