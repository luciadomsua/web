// Stores
export interface RootState
{

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
    Id?: string;
    Title?: string;
    Description?: string;
    CreationDate?: Date;
    Photos?: Photo[] | null;
    Cover?: Photo;
}

export interface Photo
{
    Id?: string;
    FileName?: string;
    Title?: string;
    Extension?: string;
    Height?: number;
    Width?: number;
    Price?: number;
    CreationDate?: Date;
    Album?: Album | null;
    Tags?: Tag[] | null;
    Url?: string;
}

export interface Tag
{
    Id?: string;
    Name?: string;
    CreationDate?: Date;
}

// Others
export interface Load
{
    loading: boolean,
    loaded: boolean,
    error: string | null | any
}
