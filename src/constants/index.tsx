export const SeatType = {
  Unset: 'unset',
  SeatNormal: 'seat_normal',
  SeatVip: 'seat_vip',
  YourChoice: 'your-choice',
  SeatSold: 'seat_sold',
};

export const AppPath = {
  Home: '/',
  Showtimes: '/lich-chieu',
  BuyTicket: '/mua-ve',
  Film: '/phim',
  Review: '/review',
};

export const EmailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
export const PhoneNumberRegex = /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/;
