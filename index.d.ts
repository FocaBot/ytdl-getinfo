declare const _default: {
    update: any;
    /**
     * Gets information about a video url.
     *
     * By default, if you don't pass any args to the executable, the following
     * will be used: --default-search=ytsearch -i
     *
     * --dump-json will always be used no matter what.
     *
     * Unless wait is set to true, the promise will resolve when there's information
     * on at least one video.
     *
     * @param {string|string[]} query - URL(s) to find.
     * @param {string[]} args - Arguments passed to the youtube-dl executable.
     * @param {boolean} wait - Wait for all videos before resolving the promise.
     * @return {Promise<Playlist>} - A playlist object containing the video information.
     */
    getInfo(query: string | string[], args: string[], wait?: boolean): Promise<any[]>;
    /**
     * Resolves to the version string of the youtube-dl executable
     * @return {Promise<string>}
     */
    getVersion(): Promise<string>;
};
export default _default;
