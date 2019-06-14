import { Photo, Album, Tag } from '@/types';
export default class Toolbox {
    public static mockPhotos(): Photo[] {
        return [
            {
                Id: "1", FileName: "Photo 01", Title: "Photo 01", Extension: "png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: "9.99", Tags: Toolbox.mockTags(), Url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                Id: "2", FileName: "Photo 02", Title: "Photo 02", Extension: "png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: "9.99", Tags: Toolbox.mockTags(), Url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                Id: "3", FileName: "Photo 03", Title: "Photo 03", Extension: "png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: "9.99", Tags: Toolbox.mockTags(), Url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                Id: "4", FileName: "Photo 04", Title: "Photo 04", Extension: "png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: "9.99", Tags: Toolbox.mockTags(), Url: "https://via.placeholder.com/400x400"
            } as Photo
        ] as Photo[]
    }

    public static mockAlbums(): Album[] {
        return [
            { Id: "0", CreationDate: new Date(), Title: "Album 00", Photos: Toolbox.mockPhotos(), Cover: { Url: "https://via.placeholder.com/400x400" } } as Album,
            { Id: "1", CreationDate: new Date(), Title: "Album 01", Photos: Toolbox.mockPhotos(), Cover: { Url: "https://via.placeholder.com/400x400" } } as Album,
            { Id: "2", CreationDate: new Date(), Title: "Album 02", Photos: Toolbox.mockPhotos(), Cover: { Url: "https://via.placeholder.com/400x400" } } as Album,
            { Id: "3", CreationDate: new Date(), Title: "Album 03", Photos: Toolbox.mockPhotos(), Cover: { Url: "https://via.placeholder.com/400x400" } } as Album,
            { Id: "4", CreationDate: new Date(), Title: "Album 04", Photos: Toolbox.mockPhotos(), Cover: { Url: "https://via.placeholder.com/400x400" } } as Album,
            { Id: "5", CreationDate: new Date(), Title: "Album 05", Photos: Toolbox.mockPhotos(), Cover: { Url: "https://via.placeholder.com/400x400" } } as Album,
            { Id: "6", CreationDate: new Date(), Title: "Album 06", Photos: Toolbox.mockPhotos(), Cover: { Url: "https://via.placeholder.com/400x400" } } as Album,
            { Id: "7", CreationDate: new Date(), Title: "Album 07", Photos: Toolbox.mockPhotos(), Cover: { Url: "https://via.placeholder.com/400x400" } } as Album,
            { Id: "8", CreationDate: new Date(), Title: "Album 08", Photos: Toolbox.mockPhotos(), Cover: { Url: "https://via.placeholder.com/400x400" } } as Album,
            { Id: "9", CreationDate: new Date(), Title: "Album 09", Photos: Toolbox.mockPhotos(), Cover: { Url: "https://via.placeholder.com/400x400" } } as Album,
        ] as Album[]
    }

    public static mockTags(): Tag[] {
        return [
            { Id: "0", Name: "Tag 00", CreationDate: new Date() } as Tag,
            { Id: "1", Name: "Tag 01", CreationDate: new Date() } as Tag,
            { Id: "2", Name: "Tag 02", CreationDate: new Date() } as Tag,
            { Id: "3", Name: "Tag 03", CreationDate: new Date() } as Tag,
            { Id: "4", Name: "Tag 04", CreationDate: new Date() } as Tag,
            { Id: "5", Name: "Tag 05", CreationDate: new Date() } as Tag,
            { Id: "6", Name: "Tag 06", CreationDate: new Date() } as Tag,
            { Id: "7", Name: "Tag 07", CreationDate: new Date() } as Tag,
            { Id: "8", Name: "Tag 08", CreationDate: new Date() } as Tag,
            { Id: "9", Name: "Tag 09", CreationDate: new Date() } as Tag,
        ] as Tag[]
    }
}
