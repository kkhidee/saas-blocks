import type { Meta, StoryObj } from '@storybook/react';
import CheckboxList from '@/components/checkbox-list';

const meta = {
  title: 'Example/CheckboxList',
  component: CheckboxList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    items: [
      { label: 'First item', name: 'first' },
      { label: 'Second item', name: 'second' },
      { label: 'Third item', name: 'third' },
    ],
    legend: 'This is checkbox list',
  },
} satisfies Meta<typeof CheckboxList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'First item', name: 'first' },
      { label: 'Second item', name: 'second' },
      { label: 'Third item', name: 'third' },
    ],
    legend: 'This is checkbox list',
  },
};
