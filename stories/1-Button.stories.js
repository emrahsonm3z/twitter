import React from "react";

import Button from "../components/button";

export default {
  title: "Button",
  component: Button,
};

export const Text = () => <Button>Hello Button</Button>;

export const Emoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
