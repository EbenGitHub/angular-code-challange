import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export type Options = {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    context?: HttpContext;
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export type Actor = {
    name: string;
    height: string;
    birth_year: string;
    url: string;
}

export type ActorDetails = Actor & {
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    gender: string;
    films: string[];
}

export type PaginationParams = {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    page: number;
}

export type Pagination = {
    count: number;
    next: string | null;
    previous: string | null;
}

export type ActorsResponse = Pagination & {
    results: Actor[];
}

export type ActorDetailsResponse = ActorDetails;

export type Film = {
    title: string;
    director: string;
    producer: string;
    release_date: string;
}

export type FilmResponse = Film;