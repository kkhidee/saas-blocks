import type { Meta, StoryObj } from '@storybook/react';
import Toggle from '@/components/toggle';
import { fn } from '@storybook/test';

const meta = {
  title: 'Example/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    enabled: true,
    onChange: fn(),
    label: 'Label',
  },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    enabled: true,
    onChange: fn(),
    label: 'Label',
  },
};
