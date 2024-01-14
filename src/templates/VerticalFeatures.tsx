import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Rift Scheduling"
    description="Pharmacy scheduling is important but is also a huge time investment for managers. Let Rift scheduling take away all of the busy work!"
  >
    <VerticalFeatureRow
      title="Guarantee Coverage"
      description="Making sure you have coverage is key as a Pharmacy Leader. Rift makes this simple so you can focus on what matters."
      image="/assets/images/feature.svg"
      imageAlt="Second feature alt text"
    />
    <VerticalFeatureRow
      title="Save Money"
      description="Double booking or paying overtime can cost your $$$. Let Rift help you simplify scheduling!."
      image="/assets/images/feature2.svg"
      imageAlt="First feature alt text"
      reverse
    />

    <VerticalFeatureRow
      title="Easy Access"
      description="With logins for your team, Rift makes it easy for your employees to know what is coming!"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
