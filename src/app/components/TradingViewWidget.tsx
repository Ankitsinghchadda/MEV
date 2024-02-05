'use client';
import { useEffect, useRef, memo } from 'react';

interface TradingViewWidgetProps {}

function TradingViewWidget(props: TradingViewWidgetProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    if (container.current) {
      script.src =
        'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = `
          {
            "symbols": [
                [
                    "BINANCE:BTCUSD|1D"
                  ],
                  [
                    "BINANCE:ETHUSDT|1D"
                  ]
            ],
            "chartOnly": false,
            "width": 600,
            "height": 450,
            "locale": "in",
            "colorTheme": "dark",
            "autosize": false,
            "showVolume": true,
            "showMA": true,
            "hideDateRanges": false,
            "hideMarketStatus": false,
            "hideSymbolLogo": false,
            "scalePosition": "right",
            "scaleMode": "Normal",
            "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
            "fontSize": "10",
            "noTimeScale": false,
            "valuesTracking": "1",
            "changeMode": "price-and-percent",
            "chartType": "area",
            "maLineColor": "#2962FF",
            "maLineWidth": 1,
            "maLength": 10,
            "lineWidth": 2,
            "lineType": 0,
            "dateRanges": [
              "1d|1",
              "1m|30",
              "3m|60",
              "12m|1D",
              "60m|1W",
              "all|1M"
            ]
          }`;
      container.current.appendChild(script);
    }

    return () => script.remove();
  }, []);

  return (
    <div className="flex">
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright"></div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
