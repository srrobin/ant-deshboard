import axios from 'axios';
const BASE_URL = "http://localhost:5000"

export const axiosInstance = axios.create({baseURL:BASE_URL})

export async function fetchRoomStatus() {
    const response = await axiosInstance.get('/topRoomStatus');
    return response.data;
}

export async function timeLineRoomStatus() {
    const response = await axiosInstance.get('/timelineRoomStatus');
    return response.data;
}