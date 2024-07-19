import { constants } from "fs/promises";

export const bal: Balance[] = [
  {
    leaveType: "Casual Leave",
    used: 5,
    total: 10,
    text: "taken from this year",
  },
  {
    leaveType: "Sick Leaves",
    used: 5,
    total: 10,
    text: "taken from this year",
  },
  {
    leaveType: "Marriage Leave",
    used: 5,
    total: 10,
    text: "taken from this year",
  },
  {
    leaveType: "Marriage Leave",
    used: 5,
    total: 10,
    text: "taken from this year",
  },
  {
    leaveType: "Marriage Leave",
    used: 5,
    total: 10,
    text: "taken from this year",
  },
];

export const chart: Chart = {
  labels: ["Pending", "Approved", "Cancel"],
  datasets: [
    {
      label: "Leaves",
      data: [10, 25, 15],
      backgroundColor: ["#fab905", "#15fa05", "#fa0505"],
      hoverOffset: 4,
    },
  ],
};

export const personal = {
  name: "Kamlesh Sahani",
  designation: "Software Engineer",
  id: 12356,
  email: "kamlesh.sahani@techsailors.com",
  phone: "+91 1234567890",
  address: "Noida",
  dob: "1998-01-01",
  doj: "2020-01-01",
  department: "Acadmic",
};

