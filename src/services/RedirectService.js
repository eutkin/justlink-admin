class RedirectService {
    async fetchRedirects() {
        const response = await fetch("http://localhost:8800/api/redirect", {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                Accept: 'application/json'
            }
        });
        const data = await response.json();
        return data;
    }
}
export default new RedirectService();
