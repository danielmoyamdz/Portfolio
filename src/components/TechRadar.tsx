'use client';

import { useState, useEffect } from 'react';
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

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

export default function TechRadar() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const labels = isMobile
    ? [
        t('skills.backend') || 'Backend',
        t('skills.frontend') || 'Frontend',
        t('skills.databases') || 'DB',
        t('skills.tools') || 'DevOps',
        t('skills.data') || 'Data',
        t('skills.ai') || 'AI',
        t('skills.architecture') || 'Arch',
      ]
    : [
        t('skills.techDetails.backend'),
        t('skills.techDetails.frontend'),
        t('skills.techDetails.databases'),
        t('skills.techDetails.devops'),
        t('skills.techDetails.data'),
        t('skills.techDetails.ai'),
        t('skills.techDetails.architecture'),
      ];

  const data = {
    labels,
    datasets: [
      {
        label: t('skills.proficiency'),
        data: [95, 80, 75, 70, 80, 90, 85],
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
            size: isMobile ? 10 : 12,
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
    <div className={`w-full ${isMobile ? 'h-[260px]' : 'h-[400px]'} p-2 sm:p-4`}>
      <Radar data={data} options={options} />
    </div>
  );
} 