import ky from 'ky'

const prefixUrl = 'http://localhost:3000'

const kyIns = ky.create({ prefixUrl, timeout: 30 * 1000 })
const http = kyIns.extend({
    hooks: {
        beforeRequest: [(request, option) => {}],

        beforeRetry: [],

        afterResponse: [(request, option, response) => {}]
    }
})

export default http
