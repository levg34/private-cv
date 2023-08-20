import { AppBar, Typography, Toolbar } from '@suid/material'

export default () => <header>
    <AppBar>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Private CV
            </Typography>
        </Toolbar>
    </AppBar>
    <Toolbar />
</header>