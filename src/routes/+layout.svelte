<div id="app">
    <slot />
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
</style>