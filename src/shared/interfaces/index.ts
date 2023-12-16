import { ReactNode } from "react";

export interface MenuAsideItem {
  label: string;
  icon?: ReactNode;
  href: string;
}

export interface IContact {
  name: string;
  desc: string;
  tags: string;
}

export interface IPost {
  id?: string;
  title: string | null;
  desc?: string;
  tags?: string;
  content?: string;
  user_id?: string | null;
}

export interface IUser {
  id?: string;
  email: string;
  password: string;
  name?: string | undefined;
  confirm?: string;
}

export interface IReview {
  id: string;
  created_at: string;
  event?: string;
  message?: string;
  stars?: string;
  memeber_id?: string;
}

export interface IMember {
  id: number;
  created_at: string;
  name?: string;
  email?: string;
  tg?: string;
  job?: string;
  level?: string;
  city?: string;
}