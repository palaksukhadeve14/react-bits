
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setdata] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("Full API response:", res);
        console.log("Extracted currency rates:", res[currency.toLowerCase()]);

        setdata(res[currency.toLowerCase()] || {});
      })
      .catch((error) => {
        console.error("Fetch failed:", error);
      });
  }, [currency]);

  console.log("Hook data during render:", data);

  return data;
}

export default useCurrencyInfo;
