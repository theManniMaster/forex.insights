/**
 * Interface for the country type.
 */
interface Country {
    /**
     * Currency code.
     */
    currency: string;

    /**
     * Country name.
     */
    name: string;

    /**
     * Country flag.
     */
    flag: string;
}

export type { Country };