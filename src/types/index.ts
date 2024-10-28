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

export type tBid = {
  time: string;
  heart: number;
  title: string;
  price: number;
  image: string;
  avatar: string;
  filled: boolean;
}

export type tHero = {
  img: string,
  name: string
}

export interface IMessage {
  userId: string;
  roomId: string;
  message: string;
  timestamp: Date;
}