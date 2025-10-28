import { v4 as uuidv4 } from "uuid";


export type Author = { id: string; name: string; bio?: string; birthYear?: number };
export const authors: Author[] = [];


export type Book = { id: string; title: string; authorId: string; year?: number; isbn?: string };
export const books: Book[] = [];