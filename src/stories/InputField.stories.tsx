import { useState, type ComponentProps } from "react";
import InputField from "../components/InputField";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
// import { action } from "@storybook/addon-actions";

type InputFieldProps = ComponentProps<typeof InputField> & {
    value?: string;
};

const meta: Meta<InputFieldProps> = {
    title: "Components/InputField",
    tags: ["autodocs"],
    component: InputField,
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["text", "password", "email"]
        },
    },
}

export default meta;

type Story = StoryObj<InputFieldProps>;


export const DefaultControlledField: Story = {
    args: {
        type: "text",
        placeholder: "Enter text",
        name: "name",
        label: "label"
    },
    render: (args) => {
        const [value, setValue] = useState("");

        const handleChange = (newValue: string) => {
            setValue(newValue);
            console.log("Input value:", newValue);
        }
        return <InputField {...args} value={value} onChange={handleChange} />
    },
}
export const TypingTest: Story = {
    args: {
        type: "text",
        placeholder: "Enter text",
        name: "name",
        label: "Name",
        onChange: fn(),
    },
    // render: (args) => {
    //     const [value, setValue] = useState("");
    //     const handleChange = (newValue: string) => {
    //         setValue(newValue);
    //         console.log("Input value:", newValue);
    //     }
    //     return (
    //         <InputField
    //             {...args}
    //             value={value}
    //             onChange={handleChange}
    //         />
    //     );
    // },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const input = canvas.getByPlaceholderText("Enter text");

        await userEvent.type(input, "Hello");

        await expect(input).toHaveValue("Hello");
    },
};
export const OnChangeTest: Story = {
    args: {
        type: "text",
        placeholder: "Enter text",
        name: "name",
        label: "label",
        onChange: fn(),
    },
    play: async ({ args, canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByPlaceholderText("Enter text");

        await userEvent.type(input, "hi");
        expect(args.onChange).toHaveBeenCalled();
    }
};
export const PasswordField: Story = {
    args: {
        type: "password",
        placeholder: "Enter password",
        name: "password",
        label: "Password",
        onChange: fn(),
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByPlaceholderText("Enter password");
        await userEvent.type(input, "mysecretpassword");
        await expect(input).toHaveValue("mysecretpassword");
    }
};
export const LabelAccessibilityTest: Story = {
    args: {
        type: "text",
        placeholder: "Enter text",
        name: "name",
        label: "Name",
        onChange: fn(),
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByLabelText("Name");
        // const input = canvas.getByLabelText(/name/i);
        await expect(input).toBeInTheDocument();
    }

};
export const InputAccessibilityTest: Story = {
    args: {
        type: "text",
        placeholder: "Enter text",
        name: "name",
        label: "Name",
        onChange: fn(),
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole("textbox", { name: "Name" });
        // const input = canvas.getByLabelText(/name/i);
        await expect(input).toBeInTheDocument();
    }
};