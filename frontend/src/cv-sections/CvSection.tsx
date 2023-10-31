import { Card } from '@suid/material'

export default (section: unknown) => (
    <Card>
        <pre>{JSON.stringify(section, null, 4)}</pre>
    </Card>
)
