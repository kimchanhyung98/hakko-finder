interface ChzzkResponse {
    code: number;
    message: null | string;
    content: {
        size: number;
        page: {
            next: NextPage;
        };
        data: StreamData[];
    };
}

interface StreamData {
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
    channel: Channel;
}

interface Channel {
    channelId: string;
    channelName: string;
    channelImageUrl: string;
    verifiedMark: boolean;
}
interface NextPage {
    concurrentUserCount: number;
    liveId: number;
}

export type { ChzzkResponse, Channel, StreamData, NextPage };
