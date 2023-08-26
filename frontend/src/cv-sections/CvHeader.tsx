import { Avatar, Card } from "@suid/material";
import { Header } from "../types";
import { For } from "solid-js";

export default (section: Header) => <Card>
    <Avatar
        alt="John Doe"
        src="https://mui.com/static/images/avatar/3.jpg"
    />
    <p>{section.position.join(', ')}</p>
    <ul>
    <For each={Object.keys(section.infos)}>
        {(key) => <li>{key}: {section.infos[key]}</li>} 
    </For>
    </ul>
</Card>