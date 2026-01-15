"use client";

import { Button } from "@/components/ui/Button";

export function ContactForm() {
  return (
    <form className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-md border border-default px-4 py-3 text-sm outline-none focus:border-primary"
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-md border border-default px-4 py-3 text-sm outline-none focus:border-primary"
        />
      </div>

      <div>
        <textarea
          placeholder="Tell us about your project"
          rows={4}
          className="w-full rounded-md border border-default px-4 py-3 text-sm outline-none focus:border-primary"
        />
      </div>

      <Button className="w-full">Send Message</Button>
    </form>
  );
}
