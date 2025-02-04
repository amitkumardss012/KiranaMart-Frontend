import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { env } from '../../utils/env';

interface ChartData {
  month: string;
  applications: number;
}

export default function ApplicationsChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [monthlyData, setMonthlyData] = useState<ChartData[]>([]);

  const getApplicationByMonth = async () => {
    try {
      const res = await axios.get(`${env.backendUrl}/api/v1/franchise/franchise-months`);
      const apiData = res.data;

      // Map API data to match ChartData structure
      const transformedData: ChartData[] = [
        { month: 'Jan', applications: apiData.january || 0 },
        { month: 'Feb', applications: apiData.february || 0 },
        { month: 'Mar', applications: apiData.march || 0 },
        { month: 'Apr', applications: apiData.april || 0 },
        { month: 'May', applications: apiData.may || 0 },
        { month: 'Jun', applications: apiData.june || 0 },
        { month: 'Jul', applications: apiData.july || 0 },
        { month: 'Aug', applications: apiData.august || 0 },
        { month: 'Sep', applications: apiData.september || 0 },
        { month: 'Oct', applications: apiData.october || 0 },
        { month: 'Nov', applications: apiData.november || 0 },
        { month: 'Dec', applications: apiData.december || 0 },
      ];

      setMonthlyData(transformedData);
    } catch (error) {
      console.error('Error fetching application data:', error);
    }
  };

  useEffect(() => {
    getApplicationByMonth();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const maxValue = Math.max(...monthlyData.map(d => d.applications), 1); // Ensure maxValue is at least 1
    const barWidth = 60;
    const spacing = 20;
    const chartHeight = 300;

    const drawChart = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.strokeStyle = '#e5e7eb';
      ctx.lineWidth = 0.5;
      for (let i = 0; i <= 5; i++) {
        const y = chartHeight - (i * chartHeight) / 5 + 20;
        ctx.beginPath();
        ctx.moveTo(30, y);
        ctx.lineTo(canvas.width - 30, y);
        ctx.stroke();
      }

      // Draw bars
      monthlyData.forEach((data, index) => {
        const x = (barWidth + spacing) * index + 40;
        const height = (data.applications / maxValue) * chartHeight;
        const y = chartHeight - height + 20;

        // Draw bar with gradient
        const gradient = ctx.createLinearGradient(x, y, x, chartHeight + 20);
        gradient.addColorStop(0, '#ff6709');
        gradient.addColorStop(1, '#ff8537');

        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, height);

        // Draw month label
        ctx.fillStyle = '#6B7280';
        ctx.font = '12px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(data.month, x + barWidth / 2, chartHeight + 40);

        // Always draw the number of applications
        ctx.fillStyle = '#111827';
        ctx.font = 'bold 12px Inter';
        ctx.fillText(data.applications.toString(), x + barWidth / 2, y - 10);

        // Draw hover effect
        if (hoveredBar === index) {
          ctx.fillStyle = 'rgba(255, 103, 9, 0.1)';
          ctx.fillRect(x, 20, barWidth, chartHeight);

          // Highlight the number on hover
          ctx.fillStyle = '#ff6709';
          ctx.font = 'bold 14px Inter';
          ctx.fillText(data.applications.toString(), x + barWidth / 2, y - 10);
        }
      });
    };

    drawChart();

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const barIndex = Math.floor((x - 40) / (barWidth + spacing));

      if (barIndex >= 0 && barIndex < monthlyData.length) {
        setHoveredBar(barIndex);
      } else {
        setHoveredBar(null);
      }
    };

    const handleMouseLeave = () => {
      setHoveredBar(null);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hoveredBar, monthlyData]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-6 text-gray-900">Monthly Applications</h2>
      <canvas ref={canvasRef} width={1000} height={400} className="w-full" />
    </div>
  );
}
