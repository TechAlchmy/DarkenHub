export type GameDetail = {
  description: string;
  path: string;
  title: string;
  totalAmounts: number;
  updatedTotalAmounts: number;
}

export type tPlace = {
  image: string,
  time: string,
  amount: number,
}

export type tSeller = {
  avatar: string;
  userId: string;
  amount: string;
  premium: boolean
}