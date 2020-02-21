export class SystemService {

    static get systemUser(): string {
        return process.env.username || process.env.user;
    }

}
