import { Avatar, Card, Skeleton } from '@suid/material'
import { Header } from '../types'

export default (header: Header) => (
    <Card>
        <Skeleton variant="circular" animation="wave">
            <Avatar />
        </Skeleton>
        <Avatar alt={header.infos.name} src={header.infos.pictureUrl} />

        <h3>{header.infos.name}</h3>
        <p>{header.position.join(', ')}</p>

        <ul>
            <li>
                <strong>Birthday:</strong> {header.infos.birthday}
            </li>
            <li>
                <strong>Address:</strong> {header.infos.address.join(', ')}
            </li>
            <li>
                <strong>Email:</strong> {header.infos.email}
            </li>
            <li>
                <strong>Phone:</strong> {header.infos.phone}
            </li>
        </ul>
    </Card>
)
