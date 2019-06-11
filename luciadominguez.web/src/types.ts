// Stores
export class RootState
{
    modules: any;
}

export interface AlbumsState extends Load
{
    albums: Album[];
}

export interface PhotosState extends Load
{
    photos: Photo[];
}

export interface TagsState extends Load
{
    tags: Tag[];
}

// Models
export interface Album
{
    Id: string;
    Title: string;
    CreationDate: Date;
    Photos: Photo[] | null;
}

export interface Photo
{
    Id: string;
    FileName: string;
    Title: string;
    Extension: string;
    Height: number;
    Width: number;
    Price: number;
    CreationDate: Date;
    Album: Album | null;
    Tags: Tag[] | null;
}

export interface Tag
{
    Id: string;
    Name: string;
    CreationDate: Date;
}

// Others
export interface Load
{
    loading: boolean,
    loaded: boolean,
    error: string | null
}
