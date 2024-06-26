import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '@/components/checkbox';
import { fn } from '@storybook/test';

const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { label: 'Label', onChange: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    onChange: fn(),
  },
};
