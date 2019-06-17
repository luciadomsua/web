import { Photo, Album, Tag, Comment } from '@/types';
export default class Toolbox {
    public static mockPhotos(): Photo[] {
        return [
            {
                id: "0", fileName: "Photo 00", title: "Photo 00", extension: "png",
                creationDate: new Date(), height: 400, width: 400, album: null,
                price: "9.99", tags: Toolbox.mockTags(), comments: Toolbox.mockComments(),
                url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                id: "1", fileName: "Photo 01", title: "Photo 01", extension: "png",
                creationDate: new Date(), height: 400, width: 400, album: null,
                price: "9.99", tags: Toolbox.mockTags(), comments: Toolbox.mockComments(),
                url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                id: "2", fileName: "Photo 02", title: "Photo 02", extension: "png",
                creationDate: new Date(), height: 400, width: 400, album: null,
                price: "9.99", tags: Toolbox.mockTags(), comments: Toolbox.mockComments(),
                url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                id: "3", fileName: "Photo 03", title: "Photo 03", extension: "png",
                creationDate: new Date(), height: 400, width: 400, album: null,
                price: "9.99", tags: Toolbox.mockTags(), comments: Toolbox.mockComments(),
                url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                id: "4", fileName: "Photo 04", title: "Photo 04", extension: "png",
                creationDate: new Date(), height: 400, width: 400, album: null,
                price: "9.99", tags: Toolbox.mockTags(), comments: Toolbox.mockComments(),
                url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                id: "5", fileName: "Photo 05", title: "Photo 05", extension: "png",
                creationDate: new Date(), height: 400, width: 400, album: null,
                price: "9.99", tags: Toolbox.mockTags(), comments: Toolbox.mockComments(),
                url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                id: "6", fileName: "Photo 06", title: "Photo 06", extension: "png",
                creationDate: new Date(), height: 400, width: 400, album: null,
                price: "9.99", tags: Toolbox.mockTags(), comments: Toolbox.mockComments(),
                url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                id: "7", fileName: "Photo 07", title: "Photo 07", extension: "png",
                creationDate: new Date(), height: 400, width: 400, album: null,
                price: "9.99", tags: Toolbox.mockTags(), comments: Toolbox.mockComments(),
                url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                id: "8", fileName: "Photo 08", title: "Photo 08", extension: "png",
                creationDate: new Date(), height: 400, width: 400, album: null,
                price: "9.99", tags: Toolbox.mockTags(), comments: Toolbox.mockComments(),
                url: "https://via.placeholder.com/400x400"
            } as Photo,
            {
                id: "9", fileName: "Photo 09", title: "Photo 09", extension: "png",
                creationDate: new Date(), height: 400, width: 400, album: null,
                price: "9.99", tags: Toolbox.mockTags(), comments: Toolbox.mockComments(),
                url: "https://via.placeholder.com/400x400"
            } as Photo
        ] as Photo[]
    }

    public static mockalbums(): Album[] {
        return [
            { id: "0", description: "", creationDate: new Date(), title: "album 00", photos: Toolbox.mockPhotos(), cover: Toolbox.mockPhotos()[0], category: { name: "Test category" } } as Album,
            { id: "1", description: "", creationDate: new Date(), title: "album 01", photos: Toolbox.mockPhotos(), cover: Toolbox.mockPhotos()[1], category: { name: "Test category" } } as Album,
            { id: "2", description: "", creationDate: new Date(), title: "album 02", photos: Toolbox.mockPhotos(), cover: Toolbox.mockPhotos()[2], category: { name: "Test category" } } as Album,
            { id: "3", description: "", creationDate: new Date(), title: "album 03", photos: Toolbox.mockPhotos(), cover: Toolbox.mockPhotos()[3], category: { name: "Test category" } } as Album,
            { id: "4", description: "", creationDate: new Date(), title: "album 04", photos: Toolbox.mockPhotos(), cover: Toolbox.mockPhotos()[4], category: { name: "Test category" } } as Album,
            { id: "5", description: "", creationDate: new Date(), title: "album 05", photos: Toolbox.mockPhotos(), cover: Toolbox.mockPhotos()[5], category: { name: "Test category" } } as Album,
            { id: "6", description: "", creationDate: new Date(), title: "album 06", photos: Toolbox.mockPhotos(), cover: Toolbox.mockPhotos()[6], category: { name: "Test category" } } as Album,
            { id: "7", description: "", creationDate: new Date(), title: "album 07", photos: Toolbox.mockPhotos(), cover: Toolbox.mockPhotos()[7], category: { name: "Test category" } } as Album,
            { id: "8", description: "", creationDate: new Date(), title: "album 08", photos: Toolbox.mockPhotos(), cover: Toolbox.mockPhotos()[8], category: { name: "Test category" } } as Album,
            { id: "9", description: "", creationDate: new Date(), title: "album 09", photos: Toolbox.mockPhotos(), cover: Toolbox.mockPhotos()[9], category: { name: "Test category" } } as Album,
        ] as Album[]
    }

    public static mockTags(): Tag[] {
        return [
            { id: "0", name: "Tag 00", creationDate: new Date() } as Tag,
            { id: "1", name: "Tag 01", creationDate: new Date() } as Tag,
            { id: "2", name: "Tag 02", creationDate: new Date() } as Tag,
            { id: "3", name: "Tag 03", creationDate: new Date() } as Tag,
            { id: "4", name: "Tag 04", creationDate: new Date() } as Tag,
            { id: "5", name: "Tag 05", creationDate: new Date() } as Tag,
            { id: "6", name: "Tag 06", creationDate: new Date() } as Tag,
            { id: "7", name: "Tag 07", creationDate: new Date() } as Tag,
            { id: "8", name: "Tag 08", creationDate: new Date() } as Tag,
            { id: "9", name: "Tag 09", creationDate: new Date() } as Tag,
        ] as Tag[]
    }

    public static mockComments(): Comment[] {
        return [
            { id: "00", author: "Anónimo", text: "Bonita foto!", creationDate: new Date().toLocaleDateString("es-ES") },
            { id: "01", author: "Anónimo", text: "¡Que buen recuerdo!", creationDate: new Date().toLocaleDateString("es-ES") },
            { id: "02", author: "Anónimo", text: "Esto es para el TFG?", creationDate: new Date().toLocaleDateString("es-ES") },
            { id: "03", author: "Anónimo", text: "k xulaaa <3", creationDate: new Date().toLocaleDateString("es-ES") },
            { id: "04", author: "Anónimo", text: "🤷🏻‍♂️", creationDate: new Date().toLocaleDateString("es-ES") },
        ] as Comment[];
    }
}
