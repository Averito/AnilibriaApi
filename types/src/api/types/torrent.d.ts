export interface Torrent {
    id: number;
    hash: string;
    leechers: number;
    seeders: number;
    completed: number;
    quality: {
        string: string;
    };
    series: {
        string: string;
    };
    total_size: number;
    url: string;
}
