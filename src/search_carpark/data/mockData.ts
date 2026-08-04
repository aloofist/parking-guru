import { useEffect, useState } from "react";

export interface StatItem {
  label: string;
  value: string;
  subText?: string;
}

export interface ConnectorOption {
  name: string;
  iconKey: "CCS2" | "CHAdeMO";
}

export interface HeaderData {
  title: string;
  parkingLotName: string;
  chargingLocation: string;
  statusText: string;
}

export interface WelcomeData {
  title: string;
  subtitle: string;
  buttonText: string;
  route: string;
}

export interface StartData {
  pricing: string;
  stats: StatItem[];
  connectors: ConnectorOption[];
  sliderText: string;
  buttonText: string;
  route: string;
}

export interface ChargingSessionData {
  chargeAmount: string;
  batteryLevel: string;
  statusLabel: string;
  updatedAt: string;
  chargingStats: StatItem[];
  endButtonText: string;
  route: string;
}

export interface PaymentDetailsData {
  amountDue: string;
  batteryLevel: string;
  chargingStats: StatItem[];
  notice: string;
  submitButtonText: string;
  route: string;
}

export interface PaymentConfirmationData {
  amountPaid: string;
  batteryLevel: string;
  timeRange: {
    startTime: string;
    startDate: string;
    endTime: string;
    endDate: string;
  };
  summary: StatItem[];
  notice: string;
  receiptButtonText: string;
  route: string;
}

export interface ParkingFlowData {
  header: HeaderData;
  welcome: WelcomeData;
  start: StartData;
  chargingSession: ChargingSessionData;
  paymentDetails: PaymentDetailsData;
  paymentConfirmation: PaymentConfirmationData;
}

const mockParkingFlowData: ParkingFlowData = {
  header: {
    title: "停車場名稱",
    parkingLotName: "B1023",
    chargingLocation: "B1-A23",
    statusText: "閒置中",
  },
  welcome: {
    title: "歡迎使用",
    subtitle: "自助充電系統",
    buttonText: "歡迎使用",
    route: "/scan",
  },
  start: {
    pricing: "HK$ 3.5/kWh",
    stats: [
      { label: "充電速度", value: "60kWh" },
      { label: "充電規格", value: "DC" },
      { label: "電樁狀態", value: "待機中" },
    ],
    connectors: [
      { name: "CCS2", iconKey: "CCS2" },
      { name: "CHAdeMO", iconKey: "CHAdeMO" },
    ],
    sliderText: "滑動以開始充電",
    buttonText: "start charge (remove)",
    route: "/charging_session",
  },
  chargingSession: {
    chargeAmount: "60.00kWh",
    batteryLevel: "60%",
    statusLabel: "充電中",
    updatedAt: "1分鐘前更新",
    chargingStats: [
      { label: "充電時間", value: "00:21:30" },
      {
        label: "開始充電時間",
        value: "18:30",
        subText: "2026年4月15日",
      },
      { label: "估計收費", value: "HK$ 210" },
    ],
    endButtonText: "結束充電",
    route: "/payment_details",
  },
  paymentDetails: {
    amountDue: "HK$ 210",
    batteryLevel: "60%",
    chargingStats: [
      { label: "充電時間", value: "00:21:30" },
      {
        label: "開始充電時間",
        value: "18:30",
        subText: "2026年4月15日",
      },
      { label: "估計收費", value: "HK$ 210" },
    ],
    notice: "非充電時停泊充電車位每分鐘將收取3元。",
    submitButtonText: "支付充電費用",
    route: "/payment_confirmation",
  },
  paymentConfirmation: {
    amountPaid: "HK$ 210",
    batteryLevel: "60%",
    timeRange: {
      startTime: "18:30",
      startDate: "2026年4月15日",
      endTime: "19:30",
      endDate: "2026年4月15日",
    },
    summary: [
      { label: "收費", value: "$3.5/kWh" },
      { label: "充電量", value: "60.00kWh" },
      { label: "充電時數", value: "00:21:30" },
    ],
    notice: "非充電時停泊充電車位每分鐘將收取3元。",
    receiptButtonText: "下載收據",
    route: "/",
  },
};

export function fetchParkingFlowData(): Promise<ParkingFlowData> {
  return new Promise((resolve) => {
    globalThis.setTimeout(() => resolve(mockParkingFlowData), 250);
  });
}

export function useParkingFlowData() {
  const [data, setData] = useState<ParkingFlowData | null>(null);

  useEffect(() => {
    let isActive = true;

    fetchParkingFlowData().then((result) => {
      if (isActive) {
        setData(result);
      }
    });

    return () => {
      isActive = false;
    };
  }, []);

  return data;
}
