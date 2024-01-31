export type { Chzzk, Stream, NextPage, MinorStream };

interface Chzzk {
    code: number;
    message: null | string;
    content: {
        size: number;
        page: {
            next: NextPage;
        };
        data: Stream[];
    };
}

interface Stream {
    liveId: number;
    liveTitle: string;
    liveImageUrl: string | null;
    defaultThumbnailImageUrl: string | null;
    concurrentUserCount: number;
    accumulateCount: number;
    openDate: string;
    adult: boolean;
    categoryType: string;
    liveCategory: string;
    liveCategoryValue: string;
    channel: {
        channelId: string;
        channelName: string;
        channelImageUrl: string;
        verifiedMark: boolean;
    };
}

interface NextPage {
    concurrentUserCount: number;
    liveId: number;
}

interface MinorStream {
    title: string;
    viewers: number;
    adult: boolean;
    id: string;
    name: string;
}
