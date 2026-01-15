import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { companyInfo } from "@/data/company";
import { navigation } from "@/data/navigation";
import { services } from "@/data/services";
import { Mail, Phone, MapPin } from "lucide-react";
import { Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-default bg-soft">
            <Container className="py-20">
                <div className="grid gap-12 md:grid-cols-4">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-lg font-bold">{companyInfo.name}</h3>

                        <p className="mt-4 text-sm text-muted">
                            {companyInfo.description}
                        </p>

                        {/* Social Icons */}
                        <div className="mt-6 flex items-center gap-4">
                            <a
                                href={companyInfo.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-primary transition"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>

                            <a
                                href={companyInfo.socials.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-primary transition"
                                aria-label="X (Twitter)"
                            >
                                <Twitter size={18} />
                            </a>

                            <a
                                href={companyInfo.socials.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-primary transition"
                                aria-label="YouTube"
                            >
                                <Youtube size={18} />
                            </a>

                            <a
                                href={companyInfo.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-primary transition"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>


                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold">Company</h4>
                        <ul className="mt-4 space-y-2 text-sm">
                            {navigation
                                .filter((item) => item.href)
                                .map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href!}
                                            className="text-muted hover:text-primary"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-semibold">Services</h4>
                        <ul className="mt-4 space-y-2 text-sm">
                            {services.slice(0, 5).map((service) => (
                                <li key={service.id}>
                                    <Link
                                        href={service.href}
                                        className="text-muted hover:text-primary"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold">Contact</h4>
                        <ul className="mt-4 space-y-3 text-sm text-muted">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="mt-0.5" />
                                <span>{companyInfo.address}</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Phone size={16} />
                                <span>{companyInfo.phone}</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Mail size={16} />
                                <a
                                    href={`mailto:${companyInfo.email}`}
                                    className="hover:text-primary"
                                >
                                    {companyInfo.email}
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </Container>

            {/* Bottom Bar */}
            <div className="border-t border-default">
                <Container className="py-6 flex flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
                    <p>
                        © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href="/terms-of-service"
                            className="hover:text-primary"
                        >
                            Terms of Service
                        </Link>
                        <span>|</span>
                        <Link
                            href="/privacy-policy"
                            className="hover:text-primary"
                        >
                            Privacy Policy
                        </Link>
                    </div>

                </Container>
            </div>
        </footer>
    );
}
