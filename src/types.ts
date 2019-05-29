// Stores
export interface IAlbumsStore
{
    Albums: IAlbum[];
}

export interface IPhotosStore
{
    Photos: IPhoto[];
}

export interface ITagStore
{
    Tags: ITag[];
}

// Models
export interface IAlbum
{
    Id: string;
    Title: string;
    CreationDate: Date;
    Photos: IPhoto[] | null;
}

export interface IPhoto
{
    Id: string;
    FileName: string;
    Title: string;
    Extension: string;
    Height: number;
    Width: number;
    Price: number;
    CreationDate: Date;
    Album: IAlbum | null;
    Tags: ITag[] | null;
}

export interface ITag
{
    Id: string;
    Name: string;
    CreationDate: Date;
}
