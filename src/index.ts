import server, { httpServer } from './server'
import colors from 'colors'

const port = process.env.PORT || 4000

httpServer.listen(port, () => {
    console.log(colors.cyan(`REST API working in port http://localhost:${port}`))
})