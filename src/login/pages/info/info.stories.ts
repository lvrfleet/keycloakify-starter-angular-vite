import { Meta, StoryObj } from '@storybook/angular';
import { decorators, KcPageStory } from '../../KcPageStory';

const meta: Meta<KcPageStory> = {
  title: 'login/info.ftl',
  component: KcPageStory,
  decorators: decorators,
  globals: {
    pageId: 'info.ftl',
  },
};

export default meta;
type Story = StoryObj<KcPageStory>;

export const Default: Story = {
  globals: {
    kcContext: {
      message: {
        summary: 'Server info message',
      },
    },
  },
};

export const WithLinkBack: Story = {
  globals: {
    kcContext: {
      message: {
        summary: 'Server message',
      },
      actionUri: undefined,
    },
  },
};

export const WithRequiredActions: Story = {
  globals: {
    kcContext: {
      message: {
        summary: 'Required actions: ',
      },
      requiredActions: ['CONFIGURE_TOTP', 'UPDATE_PROFILE', 'VERIFY_EMAIL', 'CUSTOM_ACTION'],
      'x-keycloakify': {
        messages: {
          'requiredAction.CUSTOM_ACTION': 'Custom action',
        },
      },
    },
  },
};

export const WithPageRedirect: Story = {
  globals: {
    kcContext: {
      message: { summary: 'You will be redirected shortly.' },
      pageRedirectUri: 'https://example.com',
    },
  },
};

export const WithoutClientBaseUrl: Story = {
  globals: {
    kcContext: {
      message: { summary: 'No client base URL defined.' },
      client: { baseUrl: undefined },
    },
  },
};

export const WithMessageHeader: Story = {
  globals: {
    kcContext: {
      messageHeader: 'Important Notice',
      message: { summary: 'This is an important message.' },
    },
  },
};

export const WithAdvancedMessage: Story = {
  globals: {
    kcContext: {
      message: {
        summary: 'Please take note of this <strong>important</strong> information.',
      },
    },
  },
};
