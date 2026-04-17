import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        onClick: { action: "clicked" },
        variant: {
            options: ["primary", "secondary"],
            control: { type: "select" }
        },
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"]
        },
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        children: "Click Me",
        variant: "primary",
        size: "medium",
    },
    render: (args) => {
        return <Button {...args}>
            {args.children}
        </Button>
    }
};
export const Secondary: Story = {
    args: {
        children: "Click Me",
        variant: "secondary",
        size: "medium",
    },
    render: (args) => {
        return <Button {...args}>
            {args.children}
        </Button>
    }
};
export const Small: Story = {
    args: {
        children: "Small Button",
        size: "small"
    },
    render: (args) => {
        return <Button {...args} />
    }
};
export const Medium: Story = {
    args: {
        children: "Medium Button",
        size: "medium"
    },
    render: (args) => {
        return <Button {...args} />
    }
};
export const Large: Story = {
    args: {
        children: "Large Button",
        size: "large",
        variant: "secondary"
    },
    render: (args) => {
        return <Button {...args} />
    }
};
