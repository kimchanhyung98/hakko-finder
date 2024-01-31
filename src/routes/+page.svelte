<script lang="ts">
    import { onMount } from 'svelte';
    import { checkNeedUpdate, updateStreamData } from '../utils/storage';

    onMount(() => {
        if (checkNeedUpdate()) updateStreamData();
        const streamData = JSON.parse(localStorage.stream_data);

        const randomStream = streamData[Math.floor(Math.random() * streamData.length)];
        const iframe = document.querySelector('iframe') as HTMLIFrameElement;
        iframe.src = `https://chzzk.naver.com/live/${randomStream.id}`;
    });
</script>

<style>
    .iframe-wrapper {
        overflow: hidden;
        position: relative;
        width: 100%;
        max-width: 770px;
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


<div id="container">
    <div class="iframe-wrapper">
        <iframe src="" title="chzzk" width="100%" height="1000px" allow="autoplay" allowfullscreen></iframe>
    </div>
</div>
