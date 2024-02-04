<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { checkNeedUpdate, updateStreamData } from '../utils/storage';

    let streamSrc = '';

    onMount(() => {
        if (checkNeedUpdate()) updateStreamData();
        updateStreamIframe();
    });

    function updateStreamIframe() {
        const streamData = JSON.parse(localStorage.getItem('stream_data'));
    
        if (streamData) {
            const randomStream =
                streamData[Math.floor(Math.random() * streamData.length)];
            streamSrc = `https://chzzk.naver.com/live/${randomStream.id}`;
        }
    }
</script>

<div>
    <header class="header">
        <div class="logo">
            <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1vuhd1t"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="LiveTvIcon"
            >
                <path
                    d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2m0 14H3V8h18zM9 10v8l7-4z"
                ></path>
            </svg>
        </div>
        <div class="button-wrap">
            <button type="button" on:click={updateStreamIframe}>Refresh</button>
        </div>
    </header>

    <main class="main">
        <div id="container">
            <div class="iframe-wrapper">
                <iframe
                    src={streamSrc}
                    title="chzzk"
                    width="100%"
                    height="1000px"
                    allow="autoplay"
                    allowfullscreen
                ></iframe>
            </div>

            <div class="stream-info">
                <h4 class="stream-title">Title</h4>
                <a
                    class="chanel-id"
                    href="https://www.twitch.tv/"
                    target="_blank">name</a
                >
            </div>
        </div>
    </main>
</div>

<footer class="footer">
    <div>Hello, I'm the footer.</div>

    <div>깃헙 | 치치직</div>
</footer>

<style>
    .header,
    .footer {
        width: 100%;
        max-width: 770px;
        min-width: 580px;
        margin: 0 auto;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0 5px;
    }

    .logo svg {
        width: 40px;
        height: 40px;
        fill: #00ffa3e6;
    }

    .button-wrap button {
        box-sizing: border-box;
        height: 35px;
        padding: 0 20px;
        border: 0;
        border-radius: 5px;
        background: #00ffa3e6;
        font-size: 14px;
        font-weight: 700;
        color: #141516;
        cursor: pointer;
    }

    .main {
        padding: 10px 0;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px 0;
    }

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
