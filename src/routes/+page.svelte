<script lang="ts">
    import { onMount } from 'svelte';
    import { fetchChzzk } from '../utils/stream';
    import { checkNeedUpdate } from '../utils/storage';
    import { fetchChzzkData } from '../utils/chzzkService';
    import type { MinorStream, NextPage } from '../types/chzzk';

    const fetchData = async (nextPage?: NextPage) => {
        try {
            return await fetchChzzk(nextPage);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    onMount(() => {
        if (checkNeedUpdate()) {
            let allStream: MinorStream[] = [];
            let nextPage: NextPage | undefined;

            for (let i = 0; i < 5; i++) {
                /*
                const data: { stream: MinorStream[]; nextPage: NextPage } | null = await fetchData(nextPage);
                allStream.push(...data.stream);
                nextPage = data.nextPage;
                */
            }

            localStorage.stream_data = JSON.stringify(allStream);
            localStorage.hakko_updated_at = Date.now();
        }
    });
</script>

<h1>Welcome to SvelteKit</h1>

<div class="iframe-wrapper">
    <iframe src="https://chzzk.naver.com/live/6e06f5e1907f17eff543abd06cb62891" title="chzzk"
            width="100%" height="1000px" allow="autoplay" allowfullscreen>
    </iframe>
</div>

<style>
    .iframe-wrapper {
        overflow: hidden;
        position: relative;
        width: 100%;
        max-width: 1050px;
        min-width: 580px;
        aspect-ratio: 16 / 9.005;
        margin: 0 auto;
        border: 1px solid #e6e6e6;
    }

    .iframe-wrapper iframe {
        overflow: hidden;
        position: absolute;
        top: -62px;
        left: -70px;
        z-index: 100;
        width: calc(104% + 397px);
    }
</style>
