<script lang="ts">
    import { onMount } from 'svelte';
    import { fetchChzzk } from '../utils/stream';
    import { checkNeedUpdate } from '../utils/storage';
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

<!--<iframe src="https://chzzk.naver.com/live/4d0b7d3f825ea982b95f0a5c2b4782d3" title="chzzk"-->
<!--        width="100%" height="1000px" allow="autoplay" allowfullscreen>-->
<!--</iframe>-->
