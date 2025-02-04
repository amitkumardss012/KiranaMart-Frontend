import { MetricCardProps } from "../../types/types";

export default function MetricCard({
  title,
  value,
  color,
}: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-center items-center flex-col">
            <h3 className="text-sm font-bold">{title}</h3>
            <p className="text-3xl font-bold mt-2 text-gray-900">{value}</p>
          </div>
      </div>
      <div className={`h-1 ${color.replace("text-", "bg-")}`} />
    </div>
  );
}
