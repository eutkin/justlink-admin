class RedirectService {
    async fetchRedirects() {
        return await fetch("http://localhost:8800/api/redirect", {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        })
            .then(response => response.json())
            .then(body => body
                .map(redirect => {
                    return {
                        ...redirect,
                        destinations: this.mapDestination(redirect['destinations']),
                        defaultDestination: this.mapDestination(redirect['defaultDestination'])
                    }
                })
            );
    }

    mapDestination(destination) {
        return destination.url
    }
}

export default new RedirectService();
