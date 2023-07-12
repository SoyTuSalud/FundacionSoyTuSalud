import Cors from 'cors';

export const cors = Cors({
    origin:['http://example.com'],
    methods: ['POST', 'GET', 'HEAD'],
})