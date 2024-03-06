import { Stack, Typography } from "@mui/material";
import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import utilityImg from "../../assets/utilitySettings.png";
const FaqBodyContent = () => {
  return (
    <Stack
      width={"1200px"}
      margin={"10px auto"}
      direction={"row"}
      gap={2}
      padding={"30px 0px"}
    >
      <Stack
        width={"850px"}
        borderRight={"1px solid gray"}
        paddingRight={"10px"}
      >
        <Stack gap={2}>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "30px",
              fontWeight: 700,
              lineHeight: "45px",
              letterSpacing: "0em",
              textAlign: "left",
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
            To change the balance of the ledger for a particular date, we use
            the above option. The difference will show as Trial balance
            difference.
          </Typography>
          <img
            src={utilityImg}
            alt="utilityImg"
            width={"250px"}
            height={"140px"}
            sx={{ marginLeft: "20px" }}
          />
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "20px",
              fontWeight: 500,
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
            The Ledger Bulk update help in change the details/ Particulars
            detail of the Ledger Both option are available in the Menu of
            Utility
          </Typography>
          {/* <Stack
            sx={{
              fontFamily: "Work Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "left",
              marginLeft: "40px",
              gap: "15px",
            }}
          >
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
              1. Open the Excel file.
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
              2. Data - Import External Data - Import Data.
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
              3. Choose the file.
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
              4. In Text Import Wizard Choose 'Delimited' as 'Original data
              type'.
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
              5. Choose UTF-8 from the File-origin List box.
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
              6. Click Next.
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
              7. Choose 'Comma' as 'Delimiters'.
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
              8. Click Next.
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
              9. Choose 'Text' as 'Column data format' by selecting each column
              from Data Preview.
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
              10. Click Finish and open in New Work Sheet.
            </Typography>
          </Stack> */}
          {/* <Typography
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
            For Excel 2003
          </Typography> */}
          {/* <Stack
            sx={{
              fontFamily: "Work Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "left",
              marginLeft: "40px",
              gap: "15px",
            }}
          >
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
              1. Open the Excel file.
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
              2. Data - Import External Data - Import Data.
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
              3. Choose the file.
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
              4. In Text Import Wizard Choose 'Delimited' as 'Original data
              type'.
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
              5. Choose UTF-8 from the File-origin List box.
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
              6. Click Next.
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
              7. Choose 'Comma' as 'Delimiters'.
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
              8. Click Next.
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
              9. Choose 'Text' as 'Column data format' by selecting each column
              from Data Preview.
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
              10. Click Finish and open in New Work Sheet.
            </Typography>
          </Stack> */}
        </Stack>
        <br
          style={{
            width: "97%",
            backgroundColor: "gray",
            height: "5px",
          }}
        />
        <Stack
          sx={{
            fontFamily: "Work Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: "0em",
            textAlign: "left",

            gap: "15px",
          }}
        >
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
            How can I export data from reports in Zoho CRM?
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
            You can export data from the modules as well as reports. In case of
            reports, you can export the data in three different formats - Excel,
            CSV and PDF. Each one of them have different export limits.
          </Typography>
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
            Export limit
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
            <ul>
              <li>
                In PDF and Excel formats you can export 2000 records per batch
                (records from a single page of a report).
              </li>
              <li>
                In CSV format you can export 20,000 records from the first page
                of a report and 2000 from the subsequent pages.
              </li>
            </ul>
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{
            width: "702px",
            height: "66px",
            padding: "7px 15px",
            gap: "15px",
            margin: "20px 0",
            backgroundColor: "#C9E7FF",
          }}
        >
          <HelpOutlineIcon />
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "30px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
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
          in CSV format. From the first page of the report you can export 20,000
          records and from the subsequent pages you can export 2000 records
          only. Now, since every page of a report consists of 2000 records, you
          would have exported from 10 pages to get 20,000 records. Therefore, to
          export the remaining 10,000 records you must start export from the
          11th page of the report. From here you can export 2000 records (i.e
          20,001-22,000) and so on.
        </Typography>
        <Stack
          direction={"column"}
          alignItems={"center"}
          sx={{
            width: "702px",

            padding: "7px 15px",
            gap: "15px",
            margin: "50px 0",
            backgroundColor: "#FFEFCB",
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"left"}
            width={"100%"}
            padding={"20px 20px 0px 20px"}
          >
            <HelpOutlineIcon
              sx={{
                display: "flex",
                direction: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            <Typography
              sx={{
                marginLeft: "20px",
                fontFamily: "Work Sans",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "30px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Notes
            </Typography>
          </Stack>

          <Typography>
            <ul>
              <li
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                You can export 20,000 records only from the first page of a
                report up to 5 times in a day. That is, if you think the first
                export was incorrect you can repeat the process upto 5 times a
                day. The limit applies to same or different reports.
              </li>
              <li
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Irrespective of the number of records in a report, the export
                limit is 5 times a day.
              </li>
            </ul>
          </Typography>
        </Stack>
      </Stack>
      <Stack width={"350px"}>
        <Stack padding={"20px 30px"} gap={3}>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "25px",
              fontWeight: 700,
              lineHeight: "37px",
              letterSpacing: "-0.02em",
              textAlign: "left",
            }}
          >
            On this page
          </Typography>
          <Stack paddingLeft={"20px"} gap={2}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "-0.02em",
                textAlign: "left",
              }}
            >
              What is an approval process?
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "-0.02em",
                textAlign: "left",
              }}
            >
              What is the order in which the approval processes are arranged by
              default?
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "-0.02em",
                textAlign: "left",
              }}
            >
              What is the order in which the approval processes are arranged by
              default?
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "-0.02em",
                textAlign: "left",
              }}
            >
              Who can be made an approver for approvals?
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "25px",
              fontWeight: 700,
              lineHeight: "37px",
              letterSpacing: "-0.02em",
              textAlign: "left",
            }}
          >
            Approval process
          </Typography>
          <Stack direction={"row"} gap={2}>
            <HelpOutlineIcon />
            <Typography>What is the key difference between ...</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FaqBodyContent;