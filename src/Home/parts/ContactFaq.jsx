import React from "react";
// import "./Faq.css"; // Import a CSS file for custom styling
import ContactCustomFaq from "./ContactCustomFaq";
import { Typography } from "@mui/material";

const data = {
  rows: [
    {
      title: `Get started with your free trial`,
      content: (
        <p>
          Users are expected to treat the pod and its contents with care. Any
          damages or malfunctions should be reported immediately through the
          app.
        </p>
      ),
    },
    {
      title: "Get started with your free trial",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Get started with your free trial",
      content: `Cancellation Time Frame: Cancellations must be made at least 1 hour before the scheduled booking time.  `,
    },
    {
      title: "Get started with your free trial",
      content: (
        <p>
          Users are expected to treat the pod and its contents with care. Any
          damages or malfunctions should be reported immediately through the
          app.
        </p>
      ),
    },
    {
      title: "How do I assemble my Autonomous SmartDesk?",
      content: `Cancellation Time Frame: Cancellations must be made at least 1 hour before the scheduled booking time.  `,
    },
  ],
};

const config = {
  animate: true,
  tabFocus: true,
};

const ContactFaq = () => {
  return (
    <>
      <Typography
        marginTop={"10px"}
        fontWeight={"bold"}
        color={"#052973"}
        display={"flex"}
        justifyContent={"Center"}
        textAlign={"center"}
        sx={{
          fontSize: { xs: "20px", sm: "30px", md: "45px" },
          margin: {
            xs: "7px",
            sm: "15px",
            lg: "0px",
          },
        }}
      >
        Frequently Asked Question
      </Typography>
      <ContactCustomFaq data={data} />
    </>
  );
};

export default ContactFaq;
