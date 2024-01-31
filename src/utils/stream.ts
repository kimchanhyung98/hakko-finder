import type { Chzzk, MinorStream, NextPage } from '../types/chzzk';

const originUrl = '/api/service/v1/lives?sortType=LATEST';

export async function fetchChzzk(
    nextPage?: NextPage
): Promise<{ stream: MinorStream[]; nextPage: NextPage } | null> {
    try {
        let apiUrl = originUrl;
        if (nextPage) {
            apiUrl += `&concurrentUserCount=${nextPage.concurrentUserCount}&liveId=${nextPage.liveId}`;
        }
        const response = await fetch(apiUrl);
        const responseData: Chzzk = await response.json();

        const MinorStreamData: MinorStream[] = responseData.content.data
            .map((data) => ({
                id: data.channel.channelId,
                name: data.channel.channelName,
                title: data.liveTitle,
                viewers: data.concurrentUserCount,
                adult: data.adult
            }))
            .filter((data) => data.viewers <= 5 && !data.adult);

        return {
            stream: MinorStreamData,
            nextPage: responseData.content.page.next
        };
    } catch (error) {
        console.error('Error fetching stream data: ', error);
        return null;
    }
}
