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
    id: string;
    title: string;
    description: string;
    creationDate: Date;
    photos: Photo[];
    cover: Photo;
    url: string;
    category: Category;
}

export interface Photo
{
    id: string;
    fileName: string;
    title: string;
    extension: string;
    height: number;
    width: number;
    price: number | string;
    creationDate: Date;
    album: Album | null;
    tags: Tag[] | null;
    url: string;
    comments: Comment[]
}

export interface Tag
{
    id: string;
    name: string;
    creationDate: Date;
}

export interface Comment
{
    id: string;
    author: string;
    creationDate: Date;
    text: string;
}

export interface Category
{
    name: string;
    albums: Album[];
}
// Others
export interface Load
{
    loading: boolean,
    loaded: boolean,
    error: string | null | any
}
