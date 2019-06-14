// Stores
export interface RootState {

}

export interface AlbumsState extends Load {
    albums: Album[];
}

export interface PhotosState extends Load {
    photos: Photo[];
}

export interface TagsState extends Load {
    tags: Tag[];
}

// Models
export interface Album {
    Id?: string;
    Title?: string;
    Description?: string;
    CreationDate?: Date;
    Photos?: Photo[] | null;
    Cover?: Photo;
    Url?: string;
    Category?: Category;
}

export interface Photo {
    Id?: string;
    FileName?: string;
    Title?: string;
    Extension?: string;
    Height?: number;
    Width?: number;
    Price?: number | string;
    CreationDate?: Date;
    Album?: Album | null;
    Tags?: Tag[] | null;
    Url?: string;
    Comments?: Comment[]
}

export interface Tag {
    Id?: string;
    Name?: string;
    CreationDate?: Date;
}

export interface Comment {
    Author: string;
    CreationDate: Date;
    Text: string;
}

export interface Category {
    Name: string;
}
// Others
export interface Load {
    loading: boolean,
    loaded: boolean,
    error: string | null | any
}
