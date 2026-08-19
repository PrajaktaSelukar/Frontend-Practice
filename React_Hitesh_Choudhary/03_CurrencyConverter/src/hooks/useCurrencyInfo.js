import {useEffect, useState} from 'react'

const useCurrencyInfo = (currency) => {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((data) => {
          setCurrencyInfo(data[currency]);
        })
  }, [currency]);

    return currencyInfo;
}

export default useCurrencyInfo;