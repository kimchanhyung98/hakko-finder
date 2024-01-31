import type {MinorStream, NextPage} from "../types/chzzk";
import {fetchChzzk} from "./stream";

export function checkNeedUpdate() {
    if (!localStorage.hakko_updated_at) {
        return true;
    } else {
        const interval = 5 * 60 * 1000;
        const updatedAt = Date.parse(localStorage.hakko_updated_at);

        return Date.now() - updatedAt > interval;
    }
}

export async function updateStreamData() {
    const allStream: MinorStream[] = [];
    try {
        let nextPage: NextPage | undefined;
        for (let i = 0; i < 10; i++) {
            const data: { stream: MinorStream[]; nextPage: NextPage } | null = await fetchChzzk(nextPage);
            if (data === null) continue;

            allStream.push(...data.stream);
            if (allStream.length > 50) break;

            nextPage = data.nextPage;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    localStorage.stream_data = JSON.stringify(allStream);
    localStorage.hakko_updated_at = Date.now();
}