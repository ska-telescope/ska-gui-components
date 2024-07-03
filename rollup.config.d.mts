declare const _default: ({
    input: string;
    output: {
        file: any;
        format: string;
        sourcemap: boolean;
    }[];
    plugins: any[];
    external?: undefined;
} | {
    input: string;
    output: {
        file: string;
        format: string;
    }[];
    plugins: any[];
    external: RegExp[];
})[];
export default _default;
