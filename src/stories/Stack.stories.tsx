import type { ComponentProps } from "react";
import Stack from "../components/Stack";
import type { Meta, StoryObj } from "@storybook/react";


type StackProps = ComponentProps<typeof Stack> & {
    numberOfChildren: number;
};

const meta: Meta<StackProps> = {
    title: "Components/Stack",
    component: Stack,
    tags: ["autodocs"],
    argTypes: {
        orientation: {
            control: { type: "select" },
            options: ["horizontal", "vertical"]
        },
        numberOfChildren: {
            control: { type: "select" },
            options: [4, 8, 12]
        }
    },
    args: {
        numberOfChildren: 3,
    }
}

export default meta;

type Story = StoryObj<StackProps>;

export const Horizontal: Story = {
    args: {
        orientation: "horizontal",
    },
    render: ({ numberOfChildren, ...args }) => {
        return <Stack {...args}>
            {createStackChildren(numberOfChildren)}
        </Stack>
    }
};

export const Vertical: Story = {
    args: {
        orientation: "vertical",
    },
    render: ({ numberOfChildren, ...args }) => {
        return <Stack {...args}>
            {createStackChildren(numberOfChildren)}
        </Stack>
    }
};

//helper function for stack component testing 
function createStackChildren(numberOfChildren: number) {
    return Array(numberOfChildren).fill(null).map((_, index) => {
        return (
            <div
                key={index}
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'green'
                }}
            />
        )
    })
}