import { Photo, Album, Tag } from '@/types';
export default class Toolbox
{
    public static mockPhotos(): Photo[]
    {
        return [
            {
                Id: "1", FileName: "Test", Title: "Test", Extension: ".png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: 9.99, Tags: null, Url: "https://via.placeholder.com/200x200"
            } as Photo,
            {
                Id: "1", FileName: "Test", Title: "Test", Extension: ".png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: 9.99, Tags: null, Url: "https://via.placeholder.com/200x200"
            } as Photo,
            {
                Id: "1", FileName: "Test", Title: "Test", Extension: ".png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: 9.99, Tags: null, Url: "https://via.placeholder.com/200x200"
            } as Photo,
            {
                Id: "1", FileName: "Test", Title: "Test", Extension: ".png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: 9.99, Tags: null, Url: "https://via.placeholder.com/200x200"
            } as Photo
        ] as Photo[]
    }

    public static mockAlbums(): Album[]
    {
        return [
            { Id: "0", CreationDate: new Date(), Title: "Test1", Photos: null, Cover: { Url: "https://via.placeholder.com/200x200" } } as Album,
            { Id: "0", CreationDate: new Date(), Title: "Test1", Photos: null, Cover: { Url: "https://via.placeholder.com/200x200" } } as Album,
            { Id: "0", CreationDate: new Date(), Title: "Test1", Photos: null, Cover: { Url: "https://via.placeholder.com/200x200" } } as Album,
            { Id: "0", CreationDate: new Date(), Title: "Test1", Photos: null, Cover: { Url: "https://via.placeholder.com/200x200" } } as Album,
            { Id: "0", CreationDate: new Date(), Title: "Test1", Photos: null, Cover: { Url: "https://via.placeholder.com/200x200" } } as Album,
            { Id: "1", CreationDate: new Date(), Title: "Test1", Photos: null, Cover: { Url: "https://via.placeholder.com/200x200" } } as Album,
            { Id: "1", CreationDate: new Date(), Title: "Test1", Photos: null, Cover: { Url: "https://via.placeholder.com/200x200" } } as Album,
            { Id: "1", CreationDate: new Date(), Title: "Test1", Photos: null, Cover: { Url: "https://via.placeholder.com/200x200" } } as Album,
            { Id: "1", CreationDate: new Date(), Title: "Test1", Photos: null, Cover: { Url: "https://via.placeholder.com/200x200" } } as Album,
            { Id: "1", CreationDate: new Date(), Title: "Test1", Photos: null, Cover: { Url: "https://via.placeholder.com/200x200" } } as Album,
        ] as Album[]
    }

    public static mockTags(): Tag[]
    {
        return [
            { Id: "0", Name: "Tag test", CreationDate: new Date() } as Tag,
            { Id: "0", Name: "Tag test", CreationDate: new Date() } as Tag,
            { Id: "0", Name: "Tag test", CreationDate: new Date() } as Tag,
            { Id: "0", Name: "Tag test", CreationDate: new Date() } as Tag,
            { Id: "0", Name: "Tag test", CreationDate: new Date() } as Tag,
            { Id: "1", Name: "Tag test", CreationDate: new Date() } as Tag,
            { Id: "1", Name: "Tag test", CreationDate: new Date() } as Tag,
            { Id: "1", Name: "Tag test", CreationDate: new Date() } as Tag,
            { Id: "1", Name: "Tag test", CreationDate: new Date() } as Tag,
            { Id: "1", Name: "Tag test", CreationDate: new Date() } as Tag,
            { Id: "1", Name: "Tag test", CreationDate: new Date() } as Tag,
        ] as Tag[]
    }
}
