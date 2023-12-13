import { Account, Avatars, Client, Databases, ID, Locale } from 'appwrite';
import { IContact, IDocumentsContacts, IUser } from '../interfaces';

const client = new Client();

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const project = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

if (!endpoint || !project) {
    throw new Error('APPWRITE_ENDPOINT or APPWRITE_PROJECT is not defined.');
}

client
    .setEndpoint(endpoint)
    .setProject(project);

const databases = new Databases(client);
export const account = new Account(client);
const avatars = new Avatars(client);


// Auth methods

export const login = async (email: string, password: string) => {
    await account.createEmailSession(email, password);
    const user = await account.get();

    return user;
};

export const signUp = async (user: IUser) => {
    const { email, password, name } = user;
    await account.create(ID.unique(), email, password, name);

    const newUser = await login(email, password);

    return newUser;
}

export const getAccount = async () => {
    const user = await account.get();

    return user;
}

export const logout = async () => {
    const response = await account.deleteSessions()

    return response;
};



// Database methods
export const getContacts = async () => {
    const contactsResponse = await databases.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DB as string,
        process.env.NEXT_PUBLIC_APPWRITE_DB_C_CONTACTS as string
    )

    const contacts: IContact[] = contactsResponse.documents.map((document) => ({
        name: document.name,
        desc: document.desc,
        tags: document.tags,
    }));

    const formattedContacts: IDocumentsContacts = {
        total: contactsResponse.total,
        documents: contacts,
    };

    return formattedContacts;
}