import { Avatar, Card, Skeleton } from "@suid/material";
import { Header } from "../types";
import { For, Show } from "solid-js";
import Hidden from "./Hidden";

export default (section: Header) => <Card>
    <Skeleton variant="circular" animation='wave'>
        <Avatar />
    </Skeleton>
    <Avatar
        alt={`${section.infos.name}`}
        src={section.infos.pictureUrl}
    />
    <p>{section.position.join(', ')}</p>
    <ul>
        <For each={Object.keys(section.infos)}>
            {(key) => <Show when={key !== 'pictureUrl'}>
                <li>{key}: <Show when={section.infos[key]} fallback={<Hidden />}>{section.infos[key]}</Show>
                </li>
            </Show>}
        </For>
    </ul>
</Card>