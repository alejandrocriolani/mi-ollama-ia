export interface Model {
    models: OllamaModel [];
}

export interface OllamaModel {
    name: string;
    modified_at: Date;
    size: number;
    digest: string;
    details: {
        format: string;
        family: string;
        families: string;
        parameter_size: string;
        quantization_level: string;
    }
}