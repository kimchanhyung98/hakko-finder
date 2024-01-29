<script lang="ts">
    // import { onMount } from 'svelte';
    import { fetchChzzkData } from '../utils/chzzkService';
    import type { MinorStream, NextPage } from '../types/chzzk';

    // Fetch data when the module is loaded
    const fetchData = async () => {
        try {
            const data: { stream: MinorStream[]; page: NextPage } | null = await fetchChzzkData();
            console.log('Chzzk API Response:', data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
</script>

<h1>Welcome to SvelteKit</h1>

<!--<iframe src="https://chzzk.naver.com/live/4d0b7d3f825ea982b95f0a5c2b4782d3" title="chzzk"-->
<!--        width="100%" height="1000px" allow="autoplay" allowfullscreen>-->
<!--</iframe>-->
