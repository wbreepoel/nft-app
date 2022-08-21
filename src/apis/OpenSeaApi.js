import axios from 'axios'
import React from 'react'

const baseURL = 'https://api.opensea.io/api/v1'

export default axios.create({
    baseURL: baseURL,
    params: {}
})





