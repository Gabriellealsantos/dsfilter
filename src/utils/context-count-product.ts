import { createContext } from "react";

export type ContextCountProductType = {
    contextCountProduct: number;
    setContextCountProduct: (contextCountProduct: number) => void;
}

export const ContextCountProduct = createContext<ContextCountProductType>({
    contextCountProduct: 0,
    setContextCountProduct : () => {}
})