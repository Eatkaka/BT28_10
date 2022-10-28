import axios from "axios"

export const BASE_URL = `https://api-qa.muangay-vn.com`
export const apiConfig =axios.create({url : BASE_URL})