import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CONTACT } from "@/content/contact";

const fieldClass =
  "w-full rounded-lg border border-line bg-background px-4 py-3 text-base text-foreground placeholder:text-muted focus:border-primary focus:outline-none";

export default function Contact() {
  const { form, visitPanel } = CONTACT;

  return (
    <section id={CONTACT.id} className="bg-surface py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={CONTACT.eyebrow}
          title={CONTACT.title}
          subtitle={CONTACT.subtitle}
        />

        <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
          <div className="rounded-2xl bg-primary-dark p-6 text-white/90">
            <h3 className="text-xl font-semibold text-white">
              {visitPanel.heading}
            </h3>
            <dl className="mt-4 space-y-3 text-base">
              <div>
                <dt className="font-medium text-white">Cím</dt>
                <dd>{visitPanel.address}</dd>
              </div>
              <div>
                <dt className="font-medium text-white">Nyitva tartás</dt>
                <dd>{visitPanel.hours}</dd>
              </div>
              <div>
                <dt className="font-medium text-white">Telefon</dt>
                <dd>
                  <a href={visitPanel.phone.href} className="underline">
                    {visitPanel.phone.display}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <form className="grid gap-4 rounded-2xl bg-background p-6 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-primary-dark">
                {form.nameLabel}
              </label>
              <input id="contact-name" type="text" placeholder={form.namePlaceholder} className={fieldClass} />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium text-primary-dark">
                {form.phoneLabel}
              </label>
              <input id="contact-phone" type="tel" placeholder={form.phonePlaceholder} className={fieldClass} />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-primary-dark">
                {form.emailLabel}
              </label>
              <input id="contact-email" type="email" placeholder={form.emailPlaceholder} className={fieldClass} />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="contact-topic" className="mb-1 block text-sm font-medium text-primary-dark">
                {form.topicLabel}
              </label>
              <select id="contact-topic" className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Válasszon…
                </option>
                {form.topicOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-primary-dark">
                {form.messageLabel}
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder={form.messagePlaceholder}
                className={fieldClass}
              />
            </div>

            <div className="sm:col-span-2">
              {/* TODO: kösd be egy backendhez / email-küldéshez, ha az ügyfél kéri */}
              <Button type="button" variant="accent" className="w-full sm:w-auto">
                {form.submitLabel}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
