type Balance = {
  leaveType: string;
  used: number;
  total: number;
  text: string;
};

interface Chart {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    hoverOffset: number;
  }[];
}

type LeavesHistory = {
  id: string;
  type: string;
  status: "pending" | "approved" | "cancel";
  startdate: string
  enddate: string
};
