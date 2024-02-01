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
        min-width: 580px;
        aspect-ratio: 16 / 9.005;
        margin: 0 auto;
        border: 1px solid #00ffa3e6;
    }

    .iframe-wrapper iframe {
        overflow: hidden;
        position: absolute;
        top: -62px;
        left: -70px;
        z-index: 100;
        width: calc(104% + 397px);
    }

    .stream-info {
        margin-top: 20px;
    }

    .stream-info .stream-title {
        overflow: hidden;
        margin: 0;
        font-size: 24px;
        font-weight: bold;
        line-height: normal;
        color: #fff;
        margin-bottom: 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .stream-info .chanel-id {
        font-size: 16px;
        color: #fff;
        text-decoration: none;
    }

    .stream-info .chanel-id:hover {
        text-decoration: underline;
    }
</style>


<div id="container">
    <div class="iframe-wrapper">
        <iframe src="" title="chzzk" width="100%" height="1000px" allow="autoplay" allowfullscreen></iframe>
    </div>

    <div class="stream-info">
        <h4 class="stream-title">Title</h4>
        <a class="chanel-id"
           href="https://www.twitch.tv/" target="_blank"
        >name</a>
    </div>
</div>
