import { OllamaRequest } from "./ollama-request";

export class OllamaStreamedRequest implements OllamaRequest {

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
        this.stream = true;
        this.images = images || [];
    }
    
}