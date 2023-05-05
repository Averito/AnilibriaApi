export interface ObjectSeries {
    [key: number | string]: {
        preview: string;
        serie: number;
        hls: {
            hd: string;
            sd: string;
        };
    };
}
