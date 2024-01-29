import type { ChzzkResponse, NextPage } from '../types/chzzk';

const originUrl =
    'https://api.chzzk.naver.com/service/v1/lives?sortType=LATEST';

export async function fetchChzzkData(
    nextPage?: NextPage
): Promise<ChzzkResponse | null> {
    try {
        let apiUrl = originUrl;
        if (nextPage) {
            apiUrl += `&concurrentUserCount=${nextPage.concurrentUserCount}&liveId=${nextPage.liveId}`;
        }

        const response = await fetch(apiUrl);
        return await response.json();
    } catch (error) {
        console.error('API Error : ', error);
        return null;
    }
}
