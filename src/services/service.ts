import PhotosService from "./photos";
import AlbumService from "./albums";
import TagsService from './tags';

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
