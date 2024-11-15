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

export interface PostItem {
  seller: string;
  price: number;
  status: number;
  item: {
    iconUrl: string;
    itemName: string;
    quality: string;
    rarity: string;
    type: string;
    hero: string;
  };
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
  userId: string | null;
  userName: string | null;
  chatType: string;
  message: string;
  timestamp: Date;
}

export interface SellItem {
  id: string;
  iconUrl: string;
  itemName: string;
  quality: string;
  rarity: string;
  type: string;
  hero: string;
}

export interface SendData {
  item_id: string;
  seller: string;
  price: string;
  status?: number;
  item: {
    iconUrl: string;
    itemName: string;
    quality: string;
    rarity: string;
    type: string;
    hero: string;
  };
}

export interface raceItemLists {
  seller: string;
  startPrice: number;
  bidPrice: number;
  status: number;
  item: {
    iconUrl: string;
    itemName: string;
    quality: string;
    rarity: string;
    type: string;
    hero: string;
  };
}