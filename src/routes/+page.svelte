<script lang="ts">
    import { getContext, onMount } from 'svelte';
    import {
        checkNeedUpdate,
        getRandomStream,
        updateStreamData
    } from '../utils/storage';

    const streamInfo = getContext('streamInfo');

    onMount(() => {
        if (checkNeedUpdate()) {
            updateStreamData().then(() => {
                $streamInfo = getRandomStream();
            });
        } else {
            $streamInfo = getRandomStream();
        }
    });
</script>

<div id="container">
    <div class="iframe-wrapper">
        <iframe
            src={$streamInfo?.id
                ? `https://chzzk.naver.com/live/${$streamInfo?.id}`
                : ''}
            title="chzzk"
            width="100%"
            height="1000px"
            allow="autoplay"
            allowfullscreen
        ></iframe>
    </div>

    <div class="stream-info">
        <h4 class="stream-title">{$streamInfo?.title || ''}</h4>
        <a
            class="chanel-id"
            href={$streamInfo?.id
                ? `https://chzzk.naver.com/${$streamInfo?.id}`
                : ''}
            target="_blank"
        >
            {$streamInfo?.name || ''}
        </a>
    </div>
</div>

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
        font-size: 24px;
        font-weight: bold;
        line-height: normal;
        color: #fff;
        margin: 0 0 10px;
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
