export function checkNeedUpdate() {
    if (!localStorage.hakko_updated_at) {
        return true;
    } else {
        const interval = 5 * 60 * 1000;
        const updatedAt = Date.parse(localStorage.hakko_updated_at);

        return Date.now() - updatedAt > interval;
    }
}
