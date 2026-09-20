import { z } from "zod";

/**
 * Google Place ID validation schema
 * Place IDs typically start with "ChIJ" and contain alphanumeric characters, hyphens, and underscores
 * Format: ChIJ followed by base64-like characters
 */
export const placeIdSchema = z
    .string()
    .regex(
        /^ChIJ[A-Za-z0-9_-]+$/,
        "Invalid Google Place ID format. Place IDs must start with 'ChIJ' followed by alphanumeric characters."
    )
    .min(20, "Place ID is too short")
    .max(100, "Place ID is too long");

/**
 * Contact form submission schema. Mirrors the fields rendered by
 * components/contact-form.jsx and is enforced server-side, since the
 * browser-level required/pattern attributes are trivially bypassed.
 */
export const contactFormSchema = z.object({
    name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
    email: z.email("Please enter a valid email address"),
    phone: z
        .string()
        .trim()
        .min(10, "Please enter a valid phone number")
        .max(20, "Please enter a valid phone number"),
    street: z.string().trim().min(1, "Please enter your street address").max(200, "Street address is too long"),
    city: z.string().trim().min(1, "Please enter your city").max(100, "City is too long"),
    state: z
        .string()
        .trim()
        .regex(/^[A-Za-z]{2}$/, "Please use a two-letter state abbreviation"),
    zip: z.string().trim().regex(/^[0-9]{5}$/, "Please enter a five-digit zip code"),
    message: z
        .string()
        .trim()
        .min(1, "Please tell us about your project")
        .max(2000, "Message is too long"),
});

/**
 * Validates if a string is a valid Google Place ID
 * @param {string} placeId - The Place ID to validate
 * @returns {boolean} True if valid, false otherwise
 */
export const isValidPlaceId = (placeId) => {
    try {
        placeIdSchema.parse(placeId);
        return true;
    } catch {
        return false;
    }
};

/**
 * Safely validates and returns a Place ID, or null if invalid
 * @param {string} placeId - The Place ID to validate
 * @returns {string|null} The Place ID if valid, null otherwise
 */
export const validatePlaceId = (placeId) => {
    try {
        return placeIdSchema.parse(placeId);
    } catch (error) {
        console.error(`Invalid Place ID: ${placeId}`, error.errors);
        return null;
    }
};
