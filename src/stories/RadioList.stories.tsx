import type { Meta, StoryObj } from '@storybook/react';
import RadioList from '@/components/radio-list';
import { fn } from '@storybook/test';

const meta = {
  title: 'Example/RadioList',
  component: RadioList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    items: [
      { label: 'First item', value: 'first', onChange: fn() },
      { label: 'Second item', value: 'second', onChange: fn() },
      { label: 'Third item', value: 'third', onChange: fn() },
    ],
    legend: 'This is radio list',
  },
} satisfies Meta<typeof RadioList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'First item', value: 'first', onChange: fn() },
      { label: 'Second item', value: 'second', onChange: fn() },
      { label: 'Third item', value: 'third', onChange: fn() },
    ],
    legend: 'This is radio list',
  },
};
