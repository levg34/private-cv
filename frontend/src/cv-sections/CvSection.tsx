import { Card } from "@suid/material";

export default (section: any) => <Card><pre>{JSON.stringify(section, null, 4)}</pre></Card>