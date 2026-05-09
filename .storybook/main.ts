import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    // Disable docgen to avoid crashes on complex app source files
    // and to speed up the build significantly
    reactDocgen: false,
  },
  viteFinal: async (config) => {
    config.build = config.build || {};
    config.build.sourcemap = false;
    // Exclude heavy rarely-changing deps from bundle splitting
    config.build.rollupOptions = config.build.rollupOptions || {};
    return config;
  },
};
export default config;

