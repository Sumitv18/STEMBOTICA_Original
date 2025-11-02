import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";

/**
 * Submit a contact form inquiry
 */
export const submitContactForm = mutation({
  args: {
    name: v.string(),
    schoolName: v.string(),
    email: v.string(),
    phone: v.string(),
    service: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const contactId = await ctx.db.insert("contacts", {
      name: args.name,
      schoolName: args.schoolName,
      email: args.email,
      phone: args.phone,
      service: args.service,
      message: args.message,
      status: "new",
    });

    // Schedule email sending in the background
    await ctx.scheduler.runAfter(
      0,
      internal.emails.sendContactEmail,
      {
        name: args.name,
        schoolName: args.schoolName,
        email: args.email,
        phone: args.phone,
        service: args.service,
        message: args.message,
      }
    );

    return { success: true, contactId };
  },
});

/**
 * Get all contact form submissions (for admin use)
 */
export const getAllContacts = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("contacts")
      .order("desc")
      .collect();
  },
});

/**
 * Mark a contact as read
 */
export const markContactAsRead = mutation({
  args: {
    contactId: v.id("contacts"),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.contactId, {
      status: "read",
    });

    return { success: true };
  },
});