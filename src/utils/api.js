import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const checkSymptoms = async (symptoms) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/symptom-checker/check-symptoms`, { symptoms });
    return response.data.guidance;
  } catch (error) {
    console.error('Error checking symptoms:', error);
    throw error;
  }
};

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`/api/${endpoint}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
};