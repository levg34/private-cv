import { Card } from "@suid/material";
import { CVInterface } from "./types";
import { For } from "solid-js";
import { Dynamic } from "solid-js/web";
import CvHeader from "./cv-sections/CvHeader";
import CvSection from "./cv-sections/CvSection";

const sections = {
    header: CvHeader,
    fallback: CvSection
}

export default (cv: CVInterface) => <Card>
    <For each={Object.entries(cv.metadata.sectionTitles)}>
        {([key,title], index) => <Card>
            <h2>{index()} {title()}</h2>
            <p>{key}</p>
            <Dynamic component={sections[key] ?? sections.fallback} {...cv[key]}/>
        </Card>}
    </For>
</Card>