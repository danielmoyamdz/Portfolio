'use client';

import { useEffect } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function TechRadar() {
  const { t } = useTranslation();

  const data = {
    labels: [
      'Backend Development',
      'Frontend Development',
      'Database Management',
      'DevOps',
      'AI/ML',
      'System Architecture',
    ],
    datasets: [
      {
        label: t('skills.proficiency'),
        data: [95, 65, 80, 60, 80, 70],
        backgroundColor: 'rgba(0, 122, 255, 0.2)',
        borderColor: 'rgba(0, 122, 255, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(0, 122, 255, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0, 122, 255, 1)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(128, 128, 128, 0.1)',
        },
        grid: {
          color: 'rgba(128, 128, 128, 0.1)',
        },
        pointLabels: {
          font: {
            size: 12,
          },
          color: 'var(--text-color)',
        },
        ticks: {
          display: false,
          maxTicksLimit: 5,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 12,
        },
        padding: 10,
        callbacks: {
          label: function(context: any) {
            return `${context.parsed.r}% ${t('skills.mastery')}`;
          }
        }
      },
    },
    maintainAspectRatio: false,
  };

  useEffect(() => {
    const updateTextColor = () => {
      const isDark = document.documentElement.classList.contains('dark');
      options.scales.r.pointLabels.color = isDark ? '#FFFFFF' : '#1F2937';
    };

    updateTextColor();
    window.addEventListener('theme-change', updateTextColor);

    return () => {
      window.removeEventListener('theme-change', updateTextColor);
    };
  }, []);

  return (
    <div className="w-full h-[400px] p-4">
      <Radar data={data} options={options} />
    </div>
  );
} 