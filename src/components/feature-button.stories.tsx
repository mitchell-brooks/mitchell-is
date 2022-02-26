import { Story, Meta } from '@storybook/react';
import { FeatureButton, FeatureButtonProps } from './feature-button';

export default {
  component: FeatureButton,
  title: 'FeatureButton',
} as Meta;

const Template: Story<FeatureButtonProps> = (args) => (
  <FeatureButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
