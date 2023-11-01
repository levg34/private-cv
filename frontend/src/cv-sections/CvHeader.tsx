import { Avatar, Card } from '@suid/material'
import { Header } from '../types'
import { Show } from 'solid-js'
import Hidden from './Hidden'

export default (header: Header) => (
    <Card>
        <Avatar alt={header.infos.name} src={header.infos.pictureUrl} />
        <Show when={!header.infos.pictureUrl}>
            Picture: <Hidden key={'header.infos.pictureUrl'} />
        </Show>

        <Show
            when={header.infos.name !== null}
            fallback={
                <h3>
                    Full name: <Hidden key={'header.infos.name'} />
                </h3>
            }
        >
            <h3>{header.infos.name}</h3>
        </Show>
        <p>{header.position.join(', ')}</p>

        <ul>
            <li>
                <strong>Birthday:</strong>
                <Show when={header.infos.birthday !== null} fallback={<Hidden key={'header.infos.birthday'} />}>
                    {header.infos.birthday}
                </Show>
            </li>
            <li>
                <strong>Address:</strong>
                <Show when={header.infos.address[0] !== null} fallback={<Hidden key={'header.infos.address'} />}>
                    {header.infos.address.join(', ')}
                </Show>
            </li>
            <li>
                <strong>Email:</strong>
                <Show when={header.infos.email !== null} fallback={<Hidden key={'header.infos.email'} />}>
                    {header.infos.email}
                </Show>
            </li>
            <li>
                <strong>Phone:</strong>
                <Show when={header.infos.phone !== null} fallback={<Hidden key={'header.infos.phone'} />}>
                    {header.infos.phone}
                </Show>
            </li>
        </ul>
    </Card>
)
