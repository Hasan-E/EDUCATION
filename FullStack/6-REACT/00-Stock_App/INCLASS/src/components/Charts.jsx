import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { AreaChart } from "@tremor/react";
import { useSelector } from "react-redux";

const dataFormatter = (number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

function Charts() {
  const { sales, purchases } = useSelector((state) => state.stock);

  const salesData = sales.map((sale) => ({
    // date:new Date(sale.createdAt).toLocaleString(),
    date: new Date(sale.createdAt).toLocaleDateString("tr-Tr", {
      day: "2-digit",
      month: "long",
    }),
    amount: sale.amount,
  }));
  const purchasesData = purchases.map((purc) => ({
    // date:new Date(sale.createdAt).toLocaleString(),
    date: new Date(purc.createdAt).toLocaleDateString("tr-Tr", {
      day: "2-digit",
      month: "long",
    }),
    amount: purc.amount,
  }));

  return (
    <Grid container mt={4} spacing={2}>
      <Grid item xs={12} md={6}>
        <Box className="p-[2px] rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 shadow-lg mt-6">
          <Box className="bg-white rounded-xl p-4">
            <AreaChart
              className="h-80"
              data={salesData}
              categories={["amount"]}
              colors={["indigo"]}
              valueFormatter={dataFormatter}
              yAxisWidth={60}
              onValueChange={(v) => console.log(v)}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box className="p-[2px] rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 shadow-lg mt-6">
          <Box className="bg-white rounded-xl p-4">
            <AreaChart
              className="h-80"
              data={purchasesData}
              categories={["amount"]}
              colors={["pink"]}
              valueFormatter={dataFormatter}
              yAxisWidth={60}
              onValueChange={(v) => console.log(v)}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Charts;
