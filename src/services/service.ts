import PhotosService from "@/services/photos";
import AlbumService from "@/services/albums";
import TagsService from '@/services/tags';

export default class Service
{
    public photos: PhotosService;
    public albums: AlbumService;
    public tags: TagsService;

    public constructor()
    {
        this.photos = new PhotosService();
        this.albums = new AlbumService();
        this.tags = new TagsService();
    }
}
