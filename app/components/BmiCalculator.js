"use client";

import React, { useState, useMemo } from "react";
import model from "../Assets/Model.png";
import Image from "next/image";
import {
  ChevronDown,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

// BMI category boundaries, matched to the scale markers below the gauge
const BMI_SCALE_MIN = 15;
const BMI_SCALE_MAX = 40;

function getBmiCategory(bmi) {
  if (bmi < 18.5) {
    return { label: "Underweight", badgeClass: "bg-[#d6ecfb] text-[#333]" };
  }

  if (bmi < 25) {
    return { label: "You're Healthy", badgeClass: "bg-[#c5f2ca] text-[#333]" };
  }

  if (bmi < 30) {
    return { label: "Overweight", badgeClass: "bg-[#fbe9c5] text-[#333]" };
  }

  return { label: "Obese", badgeClass: "bg-[#f8d3d3] text-[#333]" };
}

export default function BmiCalculator() {
  const [heightCm, setHeightCm] = useState(170);
  const [weightKg, setWeightKg] = useState(72);
  const [period, setPeriod] = useState("Last Week");

  const bmi = useMemo(() => {
    const heightM = heightCm / 100;

    if (!heightM || !weightKg) return 0;

    return weightKg / (heightM * heightM);
  }, [heightCm, weightKg]);

  const bmiDisplay = bmi > 0 ? bmi.toFixed(1) : "--";
  const category = getBmiCategory(bmi);

  // Clamp the needle position within the gauge track (0% - 100%)
  const needlePosition = Math.min(
    100,
    Math.max(
      0,
      ((bmi - BMI_SCALE_MIN) / (BMI_SCALE_MAX - BMI_SCALE_MIN)) * 100
    )
  );

  const handlePeriodChange = () => {
    const periods = [
      "Last Week",
      "Last Month",
      "Last 3 Months",
      "This Year",
    ];

    const currentIndex = periods.indexOf(period);
    const nextIndex = (currentIndex + 1) % periods.length;

    setPeriod(periods[nextIndex]);
  };

  return (
    <aside
      className="
        w-full min-w-0
        bg-[#2f2f2f]
        p-4 text-white
        shadow-lg
        sm:p-6

        lg:sticky
        lg:top-0
        lg:h-screen
        lg:w-[clamp(390px,34vw,555px)]
        lg:shrink-0
        lg:overflow-y-auto
        lg:rounded-l-[22px]
        lg:p-10
      "
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-[14px] font-medium">
          BMI Calculator
        </h2>

        <button
          type="button"
          onClick={handlePeriodChange}
          className="flex shrink-0 items-center gap-2 rounded-[7px] border border-[#777] px-3 py-2 text-[10px] text-[#aaa]"
        >
          {period}
          <ChevronDown size={13} />
        </button>
      </div>

      {/* BMI */}
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-[125px_minmax(0,1fr)]">
        <div className="flex flex-col gap-4">
          <div className="h-[58px] w-full rounded-[9px] bg-[#f6dfbd] px-4 py-3 text-[#444] sm:w-[125px]">
            <div className="flex items-center justify-between">
              <span className="text-[10px]">
                Height
              </span>

              <div className="flex gap-[3px]">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
                  <span
                    key={x}
                    className={`w-[1px] rounded-full ${x === 5
                        ? "h-[14px] bg-[#d84b4b]"
                        : x % 2 === 0
                          ? "h-[9px] bg-[#75a9ac]"
                          : "h-[6px] bg-[#75a9ac]"
                      }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-1 flex items-center justify-center gap-1 text-center text-[11px]">
              <input
                type="number"
                value={heightCm}
                onChange={(e) =>
                  setHeightCm(Math.max(0, Number(e.target.value)))
                }
                className="w-[38px] bg-transparent text-right outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                aria-label="Height in centimeters"
              />

              <span>cm</span>
            </div>
          </div>

          <div className="h-[58px] w-full rounded-[9px] bg-[#c9f4f7] px-4 py-3 text-[#444] sm:w-[125px]">
            <div className="flex items-center justify-between">
              <span className="text-[10px]">
                Weight
              </span>

              <div className="flex gap-[3px]">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
                  <span
                    key={x}
                    className={`w-[1px] rounded-full ${x === 5
                        ? "h-[14px] bg-[#d84b4b]"
                        : x % 2 === 0
                          ? "h-[9px] bg-[#75a9ac]"
                          : "h-[6px] bg-[#75a9ac]"
                      }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-1 flex items-center justify-center gap-1 text-center text-[11px]">
              <input
                type="number"
                value={weightKg}
                onChange={(e) =>
                  setWeightKg(Math.max(0, Number(e.target.value)))
                }
                className="w-[38px] bg-transparent text-right outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                aria-label="Weight in kilograms"
              />

              <span>kg</span>
            </div>
          </div>
        </div>

        {/* BMI Card */}
        <div className="min-w-0 rounded-[9px] bg-[#414141] p-4">
          <p className="text-[10px] text-[#ddd]">
            Body Mass Index (BMI)
          </p>

          <div className="mt-3 flex items-center justify-between gap-3">
            <span className="text-[18px] font-medium">
              {bmiDisplay}
            </span>

            <span
              className={`rounded-[5px] px-3 py-1.5 text-[8px] ${category.badgeClass}`}
            >
              {category.label}
            </span>
          </div>

          <div className="mt-6">
            <div className="relative h-[5px] w-full rounded-full bg-gradient-to-r from-[#8ed8e7] via-[#f7d477] to-[#ed8d8d]">
              <span
                className="absolute top-[-5px] h-[14px] w-[4px] rounded-full bg-white transition-all"
                style={{ left: `${needlePosition}%` }}
              />
            </div>

            <div className="mt-2 flex justify-between text-[7px] text-[#aaa]">
              <span>15</span>
              <span>18.5</span>
              <span>25</span>
              <span>30</span>
              <span>40</span>
            </div>
          </div>
        </div>
      </div>

      <div className="my-7 h-px bg-[#444]" />

      {/* Body Measurements */}
      <div>
        <h3 className="text-[19px] font-medium">
          Body Measurements
        </h3>

        <p className="mt-1 text-[12px] text-[#bbb]">
          Last checked 2 Days Ago
        </p>

        <div className="mt-3 inline-block rounded-[4px] bg-[#444] px-2 py-1 text-[11px] text-[#ccc]">
          Inverted Triangle Body Shape
        </div>

        <div
          className="
            mt-5
            grid grid-cols-1 gap-6
            sm:grid-cols-[98px_minmax(0,1fr)]
            sm:gap-4
            lg:relative lg:block lg:min-h-[330px]
          "
        >
          {/* Measurement Cards */}
          <div
            className="
              grid grid-cols-3 gap-2
              sm:flex sm:flex-col sm:gap-3
              lg:absolute lg:left-0 lg:top-[45px]
            "
          >
            <div className="flex h-[70px] w-full flex-col justify-center rounded-[9px] bg-white px-3 text-[#333] sm:w-[98px] sm:px-4">
              <span className="text-[9px]">
                Chest (in)
              </span>

              <div className="flex items-center gap-1">
                <span className="text-[15px]">
                  44.5
                </span>

                <ArrowUp
                  size={13}
                  className="text-red-400"
                />
              </div>
            </div>

            <div className="flex h-[70px] w-full flex-col justify-center rounded-[9px] bg-white px-3 text-[#333] sm:w-[98px] sm:px-4">
              <span className="text-[9px]">
                Waist (in)
              </span>

              <div className="flex items-center gap-1">
                <span className="text-[15px]">
                  34
                </span>

                <ArrowDown
                  size={13}
                  className="text-green-400"
                />
              </div>
            </div>

            <div className="flex h-[70px] w-full flex-col justify-center rounded-[9px] bg-white px-3 text-[#333] sm:w-[98px] sm:px-4">
              <span className="text-[9px]">
                Hip (in)
              </span>

              <div className="flex items-center gap-1">
                <span className="text-[15px]">
                  42.5
                </span>

                <ArrowDown
                  size={13}
                  className="text-green-400"
                />
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex min-h-[300px] items-center justify-center sm:min-h-[270px] lg:absolute lg:inset-0 lg:items-start lg:justify-end">
            <Image
              src={model}
              alt="body"
              className="
                h-auto
                max-h-[290px]
                w-auto
                max-w-[170px]
                object-contain
                lg:mr-[44px]
                lg:mt-[-10px]
              "
            />
          </div>
        </div>
      </div>
    </aside>
  );
}