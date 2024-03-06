import React, { useState } from "react";

import { Stack } from "@mui/material";
import PricingFeaturesTable from "./PricingFeaturesTable";
import PriceTagSection from "./PracingTagSection";
import Card from "./PriceCard";

const SubscriptionPlans = [
  {
    Title: "STANDARD",
    Price: { monthly: "1,300", yearly: "2,600" },
    PeriodDesc: "/user/month billed monthly",
    PlanDesc: "Automate and optimize your sales cycle",
    videoUrl: "",
    showMoreUrl: "",
  },
  {
    Title: "PROFESSIONAL",
    Price: { monthly: "2,100", yearly: "4,200" },
    PeriodDesc: "/user/month billed monthly",
    PlanDesc: "Automate and optimize your sales cycle",
    videoUrl: "",
    showMoreUrl: "",
  },
  {
    Title: "ENTERPRISE",
    Popularity: "Most popular",
    Price: { monthly: "3,000", yearly: "6,000" },
    PeriodDesc: "/user/month billed monthly",
    PlanDesc: "Automate and optimize your sales cycle",
    videoUrl: "www.https://google.com",
    showMoreUrl: "",
  },
  {
    Title: "PREMIUM",
    Price: { monthly: "3,200", yearly: "6,200" },
    PeriodDesc: "/user/month billed monthly",
    PlanDesc: "Automate and optimize your sales cycle",
    videoUrl: "www.https://google.com",
    showMoreUrl: "",
  },
];

const STANDARD = [
  {
    category: "Sales Management",
    items: [
      { name: "Invoice", availability: [false, true, false, true, false] },
      {
        name: "Pro-Forma Invoice ",
        availability: [false, true, false, true, false],
      },
      {
        name: "Sale-Challan",
        availability: [false, true, false, true, false],
      },
    ],
  },
  {
    category: "Purchase Management",
    items: [
      { name: "Invoice", availability: [false, true, false, true, false] },
      {
        name: "Invoice ",
        availability: [false, true, false, true, false],
      },
      {
        name: "Sale-Challan",
        availability: [false, true, true, true, true],
      },
    ],
  },
  {
    category: "Inventory Management",
    items: [
      { name: "Invoice", availability: [false, false, true, true, true] },
      {
        name: "Invoice ",
        availability: [false, true, true, true, true],
      },
      {
        name: "Sale-Challan",
        availability: [false, true, true, true, true],
      },
    ],
  },
];

const PROFESSIONAL = [
  {
    category: "Sales Management",
    items: [
      { name: "Invoice", availability: [false, false, true, true, true] },
      {
        name: "Pro-Forma Invoice ",
        availability: [false, true, true, true, true],
      },
      {
        name: "Sale-Challan",
        availability: [false, true, true, true, true],
      },
    ],
  },
  {
    category: "Purchase Management",
    items: [
      { name: "Invoice", availability: [false, false, true, true, true] },
      {
        name: "Invoice ",
        availability: [false, true, true, true, true],
      },
      {
        name: "Sale-Challan",
        availability: [false, true, true, true, true],
      },
    ],
  },
  {
    category: "Inventory Management",
    items: [
      { name: "Invoice", availability: [false, false, true, true, true] },
      {
        name: "Invoice ",
        availability: [false, true, true, true, true],
      },
      {
        name: "Sale-Challan",
        availability: [false, true, true, true, true],
      },
    ],
  },
];

const ENTERPRISE = [
  {
    category: "Sales Management",
    items: [
      { name: "Invoice", availability: [false, true, false, true, false] },
      {
        name: "Pro-Forma Invoice ",
        availability: [false, true, false, true, false],
      },
      {
        name: "Sale-Challan",
        availability: [false, true, false, true, false],
      },
    ],
  },
  {
    category: "Purchase Management",
    items: [
      { name: "Invoice", availability: [false, true, false, true, false] },
      {
        name: "Invoice ",
        availability: [false, true, false, true, false],
      },
      {
        name: "Sale-Challan",
        availability: [false, true, false, true, false],
      },
    ],
  },
  {
    category: "Inventory Management",
    items: [
      { name: "Invoice", availability: [false, true, false, true, false] },
      {
        name: "Invoice ",
        availability: [false, true, false, true, false],
      },
      {
        name: "Sale-Challan",
        availability: [false, true, false, true, false],
      },
    ],
  },
];

const PREMIUM = [
  {
    category: "Sales Management",
    items: [
      { name: "Invoice", availability: [true, true, true, true, true] },
      {
        name: "Pro-Forma Invoice ",
        availability: [true, true, true, true, true],
      },
      {
        name: "Sale-Challan",
        availability: [true, true, true, true, true],
      },
    ],
  },
  {
    category: "Purchase Management",
    items: [
      { name: "Invoice", availability: [true, true, true, true, true] },
      {
        name: "Invoice ",
        availability: [true, true, true, true, true],
      },
      {
        name: "Sale-Challan",
        availability: [true, true, true, true, true],
      },
    ],
  },
  {
    category: "Inventory Management",
    items: [
      { name: "Invoice", availability: [true, true, true, true, true] },
      {
        name: "Invoice ",
        availability: [true, true, true, true, true],
      },
      {
        name: "Sale-Challan",
        availability: [true, true, true, true, true],
      },
    ],
  },
];

const Info = [STANDARD, PROFESSIONAL, ENTERPRISE, PREMIUM];

const PriceCardSection = ({ plan }) => {
  const [featuresInfo, setFeaturesInfo] = useState(ENTERPRISE);
  const [activeCard, setActiveCard] = useState("ENTERPRISE");

  const handleClick = (feature) => {
    setFeaturesInfo(feature);
  };

  return (
    <>
      <Stack direction={"row"} gap={5} m={"0px 190px"} mt={"87px"}>
        {SubscriptionPlans.map((subscriptionPlan, idx) => (
          <Card
            key={idx}
            Subsplan={subscriptionPlan}
            plan={plan}
            isActive={activeCard === subscriptionPlan.Title}
            isEnterprise={activeCard === "ENTERPRISE"}
            onClick={() => {
              handleClick(Info[idx]);
              setActiveCard(subscriptionPlan.Title);
            }}
          />
        ))}
      </Stack>
      <PriceTagSection />
      <PricingFeaturesTable features={featuresInfo} />
    </>
  );
};

export default PriceCardSection;
