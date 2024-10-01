import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const checkSymptoms = async (symptoms) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/check-symptoms`, { symptoms });
    return response.data;
  } catch (error) {
    console.error('Error checking symptoms:', error);
    throw error;
  }
};

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};