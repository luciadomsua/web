import { Photo, Album, Tag, Comment } from '@/types';
export default class Toolbox
{
    public static mockPhotos(): Photo[]
    {
        return [
            {
                Id: "0", FileName: "Photo 00", Title: "Photo 00", Extension: "png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: "9.99", Tags: Toolbox.mockTags(), Comments: Toolbox.mockComments(),
                Url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                Id: "1", FileName: "Photo 01", Title: "Photo 01", Extension: "png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: "9.99", Tags: Toolbox.mockTags(), Comments: Toolbox.mockComments(),
                Url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                Id: "2", FileName: "Photo 02", Title: "Photo 02", Extension: "png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: "9.99", Tags: Toolbox.mockTags(), Comments: Toolbox.mockComments(),
                Url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                Id: "3", FileName: "Photo 03", Title: "Photo 03", Extension: "png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: "9.99", Tags: Toolbox.mockTags(), Comments: Toolbox.mockComments(),
                Url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                Id: "4", FileName: "Photo 04", Title: "Photo 04", Extension: "png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: "9.99", Tags: Toolbox.mockTags(), Comments: Toolbox.mockComments(),
                Url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                Id: "5", FileName: "Photo 05", Title: "Photo 05", Extension: "png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: "9.99", Tags: Toolbox.mockTags(), Comments: Toolbox.mockComments(),
                Url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                Id: "6", FileName: "Photo 06", Title: "Photo 06", Extension: "png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: "9.99", Tags: Toolbox.mockTags(), Comments: Toolbox.mockComments(),
                Url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                Id: "7", FileName: "Photo 07", Title: "Photo 07", Extension: "png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: "9.99", Tags: Toolbox.mockTags(), Comments: Toolbox.mockComments(),
                Url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                Id: "8", FileName: "Photo 08", Title: "Photo 08", Extension: "png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: "9.99", Tags: Toolbox.mockTags(), Comments: Toolbox.mockComments(),
                Url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                Id: "9", FileName: "Photo 09", Title: "Photo 09", Extension: "png",
                CreationDate: new Date(), Height: 400, Width: 400, Album: null,
                Price: "9.99", Tags: Toolbox.mockTags(), Comments: Toolbox.mockComments(),
                Url: "https://via.placeholder.com/400x400"
            } as Photo
        ] as Photo[]
    }

    public static mockAlbums(): Album[]
    {
        return [
            { Id: "0", CreationDate: new Date(), Title: "Album 00", Photos: Toolbox.mockPhotos(), Cover: Toolbox.mockPhotos()[0], Category: { Name: "Test category" } } as Album,
            { Id: "1", CreationDate: new Date(), Title: "Album 01", Photos: Toolbox.mockPhotos(), Cover: Toolbox.mockPhotos()[1], Category: { Name: "Test category" } } as Album,
            { Id: "2", CreationDate: new Date(), Title: "Album 02", Photos: Toolbox.mockPhotos(), Cover: Toolbox.mockPhotos()[2], Category: { Name: "Test category" } } as Album,
            { Id: "3", CreationDate: new Date(), Title: "Album 03", Photos: Toolbox.mockPhotos(), Cover: Toolbox.mockPhotos()[3], Category: { Name: "Test category" } } as Album,
            { Id: "4", CreationDate: new Date(), Title: "Album 04", Photos: Toolbox.mockPhotos(), Cover: Toolbox.mockPhotos()[4], Category: { Name: "Test category" } } as Album,
            { Id: "5", CreationDate: new Date(), Title: "Album 05", Photos: Toolbox.mockPhotos(), Cover: Toolbox.mockPhotos()[5], Category: { Name: "Test category" } } as Album,
            { Id: "6", CreationDate: new Date(), Title: "Album 06", Photos: Toolbox.mockPhotos(), Cover: Toolbox.mockPhotos()[6], Category: { Name: "Test category" } } as Album,
            { Id: "7", CreationDate: new Date(), Title: "Album 07", Photos: Toolbox.mockPhotos(), Cover: Toolbox.mockPhotos()[7], Category: { Name: "Test category" } } as Album,
            { Id: "8", CreationDate: new Date(), Title: "Album 08", Photos: Toolbox.mockPhotos(), Cover: Toolbox.mockPhotos()[8], Category: { Name: "Test category" } } as Album,
            { Id: "9", CreationDate: new Date(), Title: "Album 09", Photos: Toolbox.mockPhotos(), Cover: Toolbox.mockPhotos()[9], Category: { Name: "Test category" } } as Album,
        ] as Album[]
    }

    public static mockTags(): Tag[]
    {
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

    public static mockComments(): Comment[]
    {
        return [
            { Id: "00", Author: "Author 00", Text: "Example comment 00", CreationDate: new Date() },
            { Id: "01", Author: "Author 01", Text: "Example comment 01", CreationDate: new Date() },
            { Id: "02", Author: "Author 02", Text: "Example comment 02", CreationDate: new Date() },
            { Id: "03", Author: "Author 03", Text: "Example comment 03", CreationDate: new Date() },
            { Id: "04", Author: "Author 04", Text: "Example comment 04", CreationDate: new Date() },
            { Id: "05", Author: "Author 05", Text: "Example comment 05", CreationDate: new Date() },
            { Id: "06", Author: "Author 06", Text: "Example comment 06", CreationDate: new Date() },
            { Id: "07", Author: "Author 07", Text: "Example comment 07", CreationDate: new Date() },
            { Id: "08", Author: "Author 08", Text: "Example comment 08", CreationDate: new Date() },
            { Id: "09", Author: "Author 09", Text: "Example comment 09", CreationDate: new Date() }
        ] as Comment[];
    }
}
