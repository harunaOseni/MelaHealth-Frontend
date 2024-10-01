import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const HealthEngagementGraph = () => {
  const [data, setData] = useState({
    labels: ['Symptom Checks', 'Wellness Tips', 'Appointments', 'Local Resources'],
    datasets: [
      {
        data: [25, 30, 20, 25],
        backgroundColor: ['#2ECC71', '#F1C40F', '#3498DB', '#E67E22'],
        hoverBackgroundColor: ['#27AE60', '#F39C12', '#2980B9', '#D35400'],
      },
    ],
  });

  useEffect(() => {
    // Fetch engagement data from backend
    fetch('/api/engagement')
      .then((res) => res.json())
      .then((engagementData) => {
        setData({
          labels: ['Symptom Checks', 'Wellness Tips', 'Appointments', 'Local Resources'],
          datasets: [
            {
              data: [
                engagementData.symptomChecks,
                engagementData.wellnessTips,
                engagementData.appointments,
                engagementData.localResources,
              ],
              backgroundColor: ['#2ECC71', '#F1C40F', '#3498DB', '#E67E22'],
              hoverBackgroundColor: ['#27AE60', '#F39C12', '#2980B9', '#D35400'],
            },
          ],
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-glass backdrop-blur-md p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Health Engagement</h3>
      <Pie data={data} />
    </div>
  );
};

export default HealthEngagementGraph;