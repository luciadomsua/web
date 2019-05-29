import { IPhoto, IAlbum, ITag } from '../types';
export default class Toolbox
{
    public static mockPhotos(): IPhoto[]
    {
        return [
            {
                Id: "1", FileName: "Test", Title: "Test", Extension: ".png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: 9.99, Tags: null
            } as IPhoto,
            {
                Id: "1", FileName: "Test", Title: "Test", Extension: ".png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: 9.99, Tags: null
            } as IPhoto,
            {
                Id: "1", FileName: "Test", Title: "Test", Extension: ".png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: 9.99, Tags: null
            } as IPhoto,
            {
                Id: "1", FileName: "Test", Title: "Test", Extension: ".png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: 9.99, Tags: null
            } as IPhoto
        ] as IPhoto[]
    }

    public static mockAlbums(): IAlbum[]
    {
        return [
            { Id: "0", CreationDate: new Date(), Title: "Test1", Photos: null } as IAlbum,
            { Id: "0", CreationDate: new Date(), Title: "Test1", Photos: null } as IAlbum,
            { Id: "0", CreationDate: new Date(), Title: "Test1", Photos: null } as IAlbum,
            { Id: "0", CreationDate: new Date(), Title: "Test1", Photos: null } as IAlbum,
            { Id: "0", CreationDate: new Date(), Title: "Test1", Photos: null } as IAlbum,
            { Id: "1", CreationDate: new Date(), Title: "Test1", Photos: null } as IAlbum,
            { Id: "1", CreationDate: new Date(), Title: "Test1", Photos: null } as IAlbum,
            { Id: "1", CreationDate: new Date(), Title: "Test1", Photos: null } as IAlbum,
            { Id: "1", CreationDate: new Date(), Title: "Test1", Photos: null } as IAlbum,
            { Id: "1", CreationDate: new Date(), Title: "Test1", Photos: null } as IAlbum,
        ] as IAlbum[]
    }

    public static mockTags(): ITag[]
    {
        return [
            { Id: "0", Name: "Tag test", CreationDate: new Date() } as ITag,
            { Id: "0", Name: "Tag test", CreationDate: new Date() } as ITag,
            { Id: "0", Name: "Tag test", CreationDate: new Date() } as ITag,
            { Id: "0", Name: "Tag test", CreationDate: new Date() } as ITag,
            { Id: "0", Name: "Tag test", CreationDate: new Date() } as ITag,
            { Id: "1", Name: "Tag test", CreationDate: new Date() } as ITag,
            { Id: "1", Name: "Tag test", CreationDate: new Date() } as ITag,
            { Id: "1", Name: "Tag test", CreationDate: new Date() } as ITag,
            { Id: "1", Name: "Tag test", CreationDate: new Date() } as ITag,
            { Id: "1", Name: "Tag test", CreationDate: new Date() } as ITag,
            { Id: "1", Name: "Tag test", CreationDate: new Date() } as ITag,
        ] as ITag[]
    }
}
