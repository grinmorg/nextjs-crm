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
