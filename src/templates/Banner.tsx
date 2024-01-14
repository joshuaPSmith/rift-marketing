import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Get in touch with us to learn how Rift Scheduling can help you!"
      subtitle=""
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <Button>Connect</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
