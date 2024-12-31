import { OllamaRequest } from "./ollama-request";

export class OllamaBasicRequest implements OllamaRequest {
    model: string;
    prompt: string;
    suffix: string;
    images?: string[] | undefined;
    format: string;
    options?: {} | undefined;
    system?: string | undefined;
    template?: string | undefined;
    stream: boolean;
    raw?: boolean | undefined;
    keep_alive?: number | undefined;

    constructor(model?: string, prompt?: string, images?: string []) {
        this.model = model || "";
        this.prompt = prompt || "";
        this.suffix = "";
        this.format = "json";
        this.stream = false;
        this.images = images || [];
    }
    
    setOptions(options: {}) {
        this.options = options;
    }
}