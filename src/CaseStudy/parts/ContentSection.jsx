import React from "react";
import KeyResults from "./KeyResults";
import { Box, Stack } from "@mui/material";
import UserContent from "./../parts/UserContent";
import CaseStudyCard1 from "./../parts/CaseStudtyCard1";
import CaseStudyCard2 from "./../parts/CaseStudtyCard2";
import frameImg from "../../assets/icons/Group 62562.png";
const UserContents = [
  {
    id: 1,
    title: "The company",
    description:
      "Brigade Group has been one of the leading developers in the Indian real estate market since 1986. With a strong presence in residential, commercial, hospitality, education, and retail sectors, the company has earned a reputation for its cutting-edge infrastructure, top-notch amenities, unwavering commitment to quality, and customer-centric philosophy. Brigade Plus is a new initiative by Brigade Group, offering a one-stop solution for all things interior, from modular kitchens and electrical fittings to wardrobes and smart homes.",
  },
  {
    id: 2,
    title: "The challenge",
    description:
      "Brigade Group manages its residential business on SAP ERP and C4C (SAP Cloud for Customer Management). However, the residential team has encountered certain limitations with this system, including complex configurations, limited customization options, and a lack of user-friendliness. When Ponappa PM, was entrusted with leading their new interior design division (called Brigade Plus), he recognized the need for a CRM system that would not only improve the customer experience but also provide an easy-to-use and adaptable user experience for his team.",
  },
  {
    id: 3,
    title: "The solution",
    description:
      "The team conducted a comprehensive evaluation of Zoho CRM and Salesforce, considering various aspects. Following a meticulous assessment, Brigade Plus ultimately opted for Zoho CRM due to its user-friendly interface, seamless user experience, low-code/no-code platform, extensive integration capabilities, and diverse range of functionalities. They successfully integrated Zoho CRM with other Zoho applications, as well as third-party solutions, thereby automating their complete end-to-end sales process.",
  },
  {
    id: 5,
    title: "Benefits and ROI",
    description:
      "Within just six months of implementation, the company saw a significant improvement in overall sales efficiency and team productivity. The comprehensive CRM setup provided a holistic view of customers, contributing significantly to the ultimate objective of enhancing customer experience. The CRM system is thoughtfully configured to ensure that the team has continuous access to accurate and relevant data, allowing them to make informed decisions at all times.",
  },
  {
    id: 6,
    title: "Benefits and ROI",
    description:
      "Within just six months of implementation, the company saw a significant improvement in overall sales efficiency and team productivity. The comprehensive CRM setup provided a holistic view of customers, contributing significantly to the ultimate objective of enhancing customer experience. The CRM system is thoughtfully configured to ensure that the team has continuous access to accurate and relevant data, allowing them to make informed decisions at all times.",
  },
  {
    id: 7,
    title: "Benefits and ROI",
    description:
      "Within just six months of implementation, the company saw a significant improvement in overall sales efficiency and team productivity. The comprehensive CRM setup provided a holistic view of customers, contributing significantly to the ultimate objective of enhancing customer experience. The CRM system is thoughtfully configured to ensure that the team has continuous access to accurate and relevant data, allowing them to make informed decisions at all times.",
  },
];

const ContentSection = () => {
  return (
    <>
      <Stack backgroundColor={"white"} paddingBottom={"100px"}>
        <Stack position={"relative"} width={"1200px"} margin={"auto"}>
          <Stack width={"790px"} direction={"column"} gap={2}>
            <KeyResults />
            <Stack gap={3}>
              {/* Corrected map function */}
              {UserContents.map((content) => (
                <UserContent key={content.id} content={content} />
              ))}
            </Stack>
          </Stack>

          <Stack
            gap={3}
            sx={{
              position: "absolute",
              width: "330px",
              top: "30px",
              right: "30px",
            }}
          >
            <Box
              component="img"
              width={"74px"}
              height={"70px"}
              position={"absolute"}
              top={-20}
              right={-40}
              src={frameImg}
              zIndex={1}
            />
            <CaseStudyCard1 />
            <CaseStudyCard2 />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ContentSection;
