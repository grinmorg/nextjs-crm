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

export interface IDocumentsContacts {
    total: number,
    documents: IContact[]
}

export interface IUser {
    email: string,
    password: string,
    name?: string | undefined
}