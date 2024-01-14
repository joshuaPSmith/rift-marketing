import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          {/* <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link> */}
        </li>
        <li>{/* <Link href="/">Sign in</Link> */}</li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The modern schudeling solution for\n'}
            <span className="text-primary-500">Pharmacy Admins</span>
          </>
        }
        description="The easiest way to build a schedules for your team."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Learn More</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
