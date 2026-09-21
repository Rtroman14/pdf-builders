"use server";

import { z } from "zod";

import { contactFormSchema } from "@/lib/validators";

/**
 * Handles a contact form submission.
 * Validation runs here rather than in the browser so the payload can be
 * trusted. For now the lead is only logged — email/CRM delivery is still TODO.
 * @param {Object} formData - Raw form values from the contact form
 * @returns {Promise<Object>} { success, message, fieldErrors? }
 */
export const submitContactForm = async (formData) => {
    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
        const { fieldErrors } = z.flattenError(result.error);
        console.warn("Contact form rejected:", fieldErrors);

        return {
            success: false,
            message: "Please double-check the details below and try again.",
            fieldErrors,
        };
    }

    // TODO: deliver the lead (email notification + CRM) instead of only logging.
    console.log("Contact form submission:", result.data);

    return {
        success: true,
        message: "Thank you! We'll be in touch soon.",
    };
};
