declare const writeFileSync: any;
declare const join: any;
declare const execFileSync: any;
declare const axios: any;
/**
 * Updates or downloads the youtube-dl binary.
 * @return {Promise<String>} - New version number
 */
declare function updateBinary(): Promise<string>;
