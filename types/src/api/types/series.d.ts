export interface Series {
    serie: number;
    preview: string;
    hls: {
        fhd?: string;
        hd: string;
        sd: string;
    };
}
