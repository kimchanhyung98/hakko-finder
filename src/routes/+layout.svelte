<script lang="ts">
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import { getRandomStream } from '../utils/storage';

    const streamInfo = writable({});

    function updateStream() {
        const streamData = getRandomStream();
        streamInfo.set(streamData);
    }

    setContext('streamInfo', streamInfo);
</script>

<div id="app">
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
                <button type="button" on:click={updateStream}>Refresh</button>
            </div>
        </header>

        <main class="main">
            <slot />
        </main>
    </div>

    <footer class="footer">
        <div>
            <address class="copyright">
                © 2024 kimchanhyung98. All rights reserved.
            </address>
            <p class="caution">
                The use of the API is not authorized by Naver(Chzzk). It is
                solely for non-commercial purposes.
            </p>
        </div>

        <div class="link-wrapper">
            <a
                href="https://github.com/kimchanhyung98/hakko-finder"
                class="btn-github"
                target="_blank">Github</a
            >
            <a href="https://chzzk.naver.com/" class="btn-chzzk" target="_blank"
                >치지직</a
            >
        </div>
    </footer>
</div>

<style>
    :global(body) {
        margin: 0;
        background: #141516;
        color: #dfe2ea;
    }

    #app {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        max-width: 770px;
        min-width: 580px;
        height: 100vh;
        margin: 0 auto;
        padding: 0 20px;
    }

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
        padding: 25px 0;
        font-size: 12px;
    }

    .link-wrapper {
        display: flex;
    }

    .link-wrapper a {
        display: block;
        overflow: hidden;
        position: relative;
        text-indent: -9999px;
        width: 20px;
        height: 20px;
        margin: 0 5px;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .link-wrapper a.btn-github {
        background-image: url('/images/github.png');
    }

    .link-wrapper a.btn-chzzk {
        box-sizing: border-box;
        border: 1px solid #fff;
        border-radius: 50%;
        background-image: url('/images/chzzk.png');
    }

    .footer .copyright {
        display: block;
        font-size: 12px;
        color: #6e7681;
    }

    .footer .caution {
        margin: 0;
        font-size: 10px;
        color: #484f58;
    }
</style>
