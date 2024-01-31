<div id="app">
    <header class="header">
        <div class="logo">logo</div>
        <div>button</div>
    </header>

    <main class="main">
        <slot />
    </main>

    <footer class="footer">
        <div>
            Hello, I'm the footer.
        </div>

        <div>
            깃헙 | 치치직
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
        min-width: 580px;
        padding: 0 20px;
    }

    .header, .footer {
        width: 100%;
        max-width: 770px;
        min-width: 580px;
        margin: 0 auto;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        border-bottom: 1px solid #e6e6e6;
    }

    .main {
        padding: 10px 0;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px 0 85px;
        border-top: 1px solid #e6e6e6;
    }
</style>