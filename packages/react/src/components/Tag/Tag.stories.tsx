import React from 'react';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Stack } from '../../../../../docs-components';

import type { TagProps } from '.';
import { Tag } from '.';

type Story = StoryObj<typeof Tag>;

export default {
  title: 'Kjernekomponenter/Tag',
  component: Tag,
  parameters: {
    status: {
      type: 'beta',
      url: 'http://www.url.com/status',
    },
  },
  decorators: [
    (Story) => (
      <Stack style={{ justifyContent: 'start' }}>
        <Story />
      </Stack>
    ),
  ],
} as Meta;

export const Preview: Story = {
  args: {
    children: 'New',
    size: 'medium',
    variant: 'outlined',
    color: 'neutral',
  },
};

const sizes: TagProps['size'][] = ['xsmall', 'small', 'medium'];
export const Sizes: StoryFn<typeof Tag> = ({ ...rest }): JSX.Element => {
  return (
    <>
      {sizes.map((size) => (
        <Tag
          key={size}
          size={size}
          {...rest}
        >
          {size}
        </Tag>
      ))}
    </>
  );
};

const variants: TagProps['variant'][] = ['filled', 'outlined'];
export const Variants: StoryFn<typeof Tag> = ({ ...rest }): JSX.Element => {
  return (
    <>
      {variants.map((variant) => (
        <Tag
          key={variant}
          variant={variant}
          {...rest}
        >
          {variant}
        </Tag>
      ))}
    </>
  );
};

const colors: TagProps['color'][] = [
  'neutral',
  'success',
  'warning',
  'danger',
  'info',
  'primary',
  'secondary',
  'tertiary',
];

export const Colors: StoryFn<typeof Tag> = ({ ...rest }): JSX.Element => {
  return (
    <>
      {colors.map((color) => (
        <Tag
          key={color}
          color={color}
          {...rest}
        >
          {color}
        </Tag>
      ))}
    </>
  );
};

export const ColorsOutlined: StoryFn<typeof Tag> = ({
  ...rest
}): JSX.Element => {
  return (
    <>
      {colors.map((color) => (
        <Tag
          key={color}
          color={color}
          variant='outlined'
          {...rest}
        >
          {color}
        </Tag>
      ))}
    </>
  );
};