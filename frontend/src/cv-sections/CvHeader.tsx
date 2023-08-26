import { Avatar, Card } from "@suid/material";
import { Header } from "../types";
import { For } from "solid-js";

export default (section: Header) => <Card>
    <Avatar
        alt="John Doe"
        src={section.infos.pictureUrl}
    />
    <p>{section.position.join(', ')}</p>
    <ul>
    <For each={Object.keys(section.infos)}>
        {(key) => <li>{key}: {section.infos[key]}</li>} 
    </For>
    </ul>
</Card>