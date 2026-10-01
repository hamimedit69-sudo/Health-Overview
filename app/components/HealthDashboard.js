"use client";

import {
  Search,
  Bell,
  ChevronDown,
  HeartPulse,
  Droplets,
} from "lucide-react";

const activityData = [
  [30, 43, 50],
  [34, 48, 58],
  [27, 40, 48],
  [35, 46, 44],
  [25, 39, 49],
  [37, 47, 46],
  [30, 49, 60],
  [34, 46, 53],
  [29, 42, 54],
  [37, 44, 49],
  [32, 45, 40],
  [34, 45, 57],
  [36, 47, 53],
  [39, 45, 49],
  [37, 47, 55],
  [27, 38, 46],
  [33, 47, 52],
];

function HealthCard({
  icon,
  title,
  value,
  unit,
  iconClass,
  badgeClass,
  stroke,
}) {
  return (
    <div className="h-[165px] min-w-0 overflow-hidden rounded-[10px] bg-white p-3.5">
      <div className="flex items-center gap-2.5">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[9px] ${iconClass}`}
        >
          {icon}
        </div>

        <span className="truncate text-[8px] text-[#333]">{title}</span>
      </div>

      <div className="mt-3 flex items-end gap-1.5">
        <span className="text-[23px] font-medium text-[#333]">
          {value}
        </span>

        <span className="mb-1 text-[7px] text-gray-500">
          {unit}
        </span>
      </div>

      <span
        className={`mt-1.5 inline-block rounded-[4px] px-2 py-1 text-[5px] ${badgeClass}`}
      >
        Normal
      </span>

      <div className="mt-3 h-[38px]">
        <svg
          viewBox="0 0 180 40"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 32 C20 20 30 27 45 29 C65 33 72 27 82 13 C94 -1 105 5 114 18 C125 32 145 28 180 23 L180 40 L0 40 Z"
            fill={stroke}
            fillOpacity="0.12"
          />

          <path
            d="M0 32 C20 20 30 27 45 29 C65 33 72 27 82 13 C94 -1 105 5 114 18 C125 32 145 28 180 23"
            fill="none"
            stroke={stroke}
            strokeWidth="1.2"
          />
        </svg>
      </div>
    </div>
  );
}

export default function HealthDashboard() {
  return (
    <section className="min-w-0 flex-1 p-4 sm:p-5">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-[20px] font-semibold text-white sm:text-[23px]">
            Health Overview
          </h1>

          <p className="mt-1 text-[10px] text-white">
            August 12, 2021
          </p>
        </div>

        <div className="flex shrink-0 gap-2 sm:gap-3">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-[9px] bg-white text-black sm:h-10 sm:w-10"
          >
            <Search size={19} />
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-[9px] bg-white text-black sm:h-10 sm:w-10"
          >
            <Bell size={19} />
          </button>
        </div>
      </div>

      {/* Health Cards */}
      <div
        className="
          mt-7 grid grid-cols-1 gap-3
          sm:grid-cols-2
          lg:mt-9 lg:grid-cols-3 lg:gap-4
        "
      >
        <HealthCard
          icon={<Droplets size={21} />}
          title="Blood Sugar"
          value="80"
          unit="mg / dL"
          iconClass="bg-[#f8dfbc] text-[#e49a38]"
          badgeClass="bg-[#f8dfbc]"
          stroke="#f2a15d"
        />

        <HealthCard
          icon={<HeartPulse size={21} />}
          title="Heart Rate"
          value="98"
          unit="bpm"
          iconClass="bg-[#f7e4e9] text-[#d86c7b]"
          badgeClass="bg-[#f7e4e9]"
          stroke="#e58b99"
        />

        <HealthCard
          icon={<Droplets size={21} />}
          title="Blood Pressure"
          value="102"
          unit="/ 72 mmhg"
          iconClass="bg-[#d2f2f4] text-[#4daab0]"
          badgeClass="bg-[#d2f2f4]"
          stroke="#63b7bd"
        />
      </div>

      {/* Activity Growth */}
      <div className="mt-5 h-[285px] min-w-0 overflow-hidden rounded-[12px] bg-white p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-[15px] font-semibold text-[#333] sm:text-[16px]">
            Activity Growth
          </h2>

          <button className="flex shrink-0 items-center gap-2 rounded-[8px] border border-gray-200 px-2.5 py-2 text-[8px] text-gray-600">
            Jan 2021
            <ChevronDown size={11} />
          </button>
        </div>

        <div className="relative mt-4 h-[165px]">
          <div className="absolute inset-0 flex flex-col justify-between">
            {[80, 60, 40, 20, 0].map((value) => (
              <div
                key={value}
                className="flex items-center gap-2"
              >
                <span className="w-8 shrink-0 text-[6px] text-gray-400">
                  {value}%
                </span>

                <div className="h-px flex-1 bg-gray-100" />
              </div>
            ))}
          </div>

          <div className="absolute bottom-3 left-10 right-0 h-[140px] overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex h-full min-w-[280px] items-end justify-between gap-[3px] sm:min-w-0 sm:gap-0">
              {activityData.map((bar, index) => (
                <div
                  key={index}
                  className="flex h-full shrink-0 items-end gap-[2px] sm:gap-[3px]"
                >
                  <span
                    className="w-[4px] rounded-full bg-[#d96b72] sm:w-[5px]"
                    style={{ height: `${bar[0]}%` }}
                  />

                  <span
                    className="w-[4px] rounded-full bg-[#4d969b] sm:w-[5px]"
                    style={{ height: `${bar[1]}%` }}
                  />

                  <span
                    className="w-[4px] rounded-full bg-[#d58a25] sm:w-[5px]"
                    style={{ height: `${bar[2]}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[7px] text-gray-500">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#d96b72]" />
            Aerobics
          </span>

          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#4d969b]" />
            Yoga
          </span>

          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#d58a25]" />
            Meditation
          </span>
        </div>
      </div>

      {/* Appointment */}
      <div className="mt-5 flex min-h-[55px] flex-col items-start justify-center gap-2 rounded-[10px] bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-[10px] font-semibold text-[#333]">
          Upcoming Appointment
        </span>

        <div className="flex w-full flex-wrap items-center justify-between gap-3 sm:w-auto sm:justify-end">
          <span className="rounded-[6px] bg-[#d5f3f5] px-3 py-2 text-[7px]">
            August 14, 2021
          </span>

          <span className="text-[7px] text-gray-500">
            Consultation with Dr. James
          </span>
        </div>
      </div>
    </section>
  );
}