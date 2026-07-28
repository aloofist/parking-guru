interface HeaderProps {
    title?: string,
    parking_lot_name?: string,
    charging_state?: boolean,
    status_badge?: {
        status_text: string,
        code: string;
    };
}

export default function Header(Props : HeaderProps) {
  return (
    <div className="parking-info flex justify-between items-center">
      <span>停車場名稱</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.2937 4.09793L10.4646 6.26981V10.6223L9.35815 11.7288H9.37866L11.5496 13.8997V19.3069H0.694092V13.8997L2.86499 11.7288H2.87573L1.76929 10.6223V6.26981L3.94019 4.09793H8.2937ZM3.96167 12.804L2.32788 14.427V17.6839H9.93726V14.427L8.30347 12.804H3.96167ZM16.6365 11.9866L15.3035 13.3616L13.9695 11.9866V10.2805L15.3035 11.6458L16.6365 10.2805V11.9866ZM4.47827 5.73172L3.39233 6.81766V10.0745L4.47827 11.1595H7.73511L8.82007 10.0745V6.81766L7.73511 5.73172H4.47827ZM19.3044 2.75418V5.48367L17.3093 7.54129L16.6365 8.22293V9.24734L15.3035 10.6223L13.9695 9.24734V8.22293L17.6394 4.46024V3.77762L16.3064 2.40262H14.3103L11.3123 5.48367V2.75418L13.3074 0.696564H17.3093L19.3044 2.75418Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
