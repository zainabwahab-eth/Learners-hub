export interface CurrentUserPayload {
    id: string;
    email: string;
    name: string | null;
}
export declare const CurrentUser: (...dataOrPipes: unknown[]) => ParameterDecorator;
