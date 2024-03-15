import utilityImg from "../../assets/utilitySettings.png";
import { Stack, Typography } from "@mui/material";
import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const FaqBodyContent = () => {
  return (
    <Stack
      width={{
        xl: "1200px",
        lg: "850px",
        md: "90%",
        xs: "93%",
      }}
      margin="10px auto"
      direction={{
        xs: "column",
        lg: "row",
      }}
      gap={2}
      padding="30px 0px"
    >
      <Stack
        width={{
          lg: "850px",
          xs: "100%",
        }}
        borderRight={{
          lg: "1px solid #E5E5E5",
          xs: "none",
        }}
        paddingRight={{
          lg: "20px",
          xs: "0px",
        }}
        gap={2}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "30px",
            fontWeight: 700,
            lineHeight: "45px",
            letterSpacing: "0em",
            textAlign: {
              lg: "left",
              xs: "center",
            },
          }}
        >
          Utility Update
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "25px",
            fontWeight: 500,
            lineHeight: "37px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Adjustment Entry-(Ledger Balance Adjustment)
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          To change the balance of the ledger for a particular date, we use the
          above option. The difference will show as Trial balance difference.
        </Typography>
        <img
          src={utilityImg}
          alt="utilityImg"
          width="250px"
          height="140px"
          sx={{ marginLeft: "20px" }}
        />
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "30px",
            letterSpacing: "0em",
            textAlign: "left",
            marginTop: "20px",
          }}
        >
          Ledger Bulk Update (Master Data)
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          The Ledger Bulk update helps in changing the details/ Particulars
          detail of the Ledger. Both options are available in the Menu of
          Utility.
        </Typography>

        <hr style={{ width: "97%", backgroundColor: "gray", height: "5px" }} />

        <Stack
          gap="15px"
          sx={{
            fontFamily: "Work Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          <Typography variant="h4">
            How can I export data from reports in Zoho CRM?
          </Typography>
          <Typography>
            You can export data from the modules as well as reports. In case of
            reports, you can export the data in three different formats - Excel,
            CSV, and PDF. Each one of them has different export limits.
          </Typography>
          <Typography variant="h4">Export limit</Typography>
          <Typography component="div">
            <ul>
              <li>
                In PDF and Excel formats, you can export 2000 records per batch
                (records from a single page of a report).
              </li>
              <li>
                In CSV format, you can export 20,000 records from the first page
                of a report and 2000 from the subsequent pages.
              </li>
            </ul>
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          width="90%"
          padding="7px 15px"
          gap="15px"
          margin="20px 0"
          bgcolor="#C9E7FF"
        >
          <HelpOutlineIcon />
          <Typography>
            Note that one page of a report consists of 2000 records only.
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: "0em",
            textAlign: "left",
            marginTop: "20px",
          }}
        >
          So, assume you have a report of 30,000 records that you want to export
          in CSV format. From the first page of the report, you can export
          20,000 records and from the subsequent pages, you can export 2000
          records only. Now, since every page of a report consists of 2000
          records, you would have exported from 10 pages to get 20,000 records.
          Therefore, to export the remaining 10,000 records you must start
          export from the 11th page of the report. From here you can export 2000
          records (i.e 20,001-22,000) and so on.
        </Typography>
        <Stack
          direction="column"
          alignItems="center"
          width="90%"
          padding="7px 15px"
          gap="15px"
          margin="50px 0"
          bgcolor="#FFEFCB"
        >
          <Stack direction="row" width="90%" padding="20px 20px 0px 20px">
            <HelpOutlineIcon />
            <Typography sx={{ marginLeft: "20px" }}>Notes</Typography>
          </Stack>
          <Typography width="100%">
            <ul>
              <li>
                You can export 20,000 records only from the first page of a
                report up to 5 times in a day. That is, if you think the first
                export was incorrect you can repeat the process up to 5 times a
                day. The limit applies to the same or different reports.
              </li>
              <li>
                Irrespective of the number of records in a report, the export
                limit is 5 times a day.
              </li>
            </ul>
          </Typography>
        </Stack>
      </Stack>
      <Stack width={{ lg: "350px", xs: "100%" }}>
        <Stack padding="20px 30px" gap={3}>
          <Typography variant="h4">On this page</Typography>
          <Stack paddingLeft="20px" gap={2}>
            <Typography>What is an approval process?</Typography>
            <Typography>
              What is the order in which the approval processes are arranged by
              default?
            </Typography>
            <Typography>Who can be made an approver for approvals?</Typography>
          </Stack>
          <Typography variant="h4">Approval process</Typography>
          <Stack direction="row" gap={2}>
            <HelpOutlineIcon />
            <Typography>What is the key difference between ...</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FaqBodyContent;
