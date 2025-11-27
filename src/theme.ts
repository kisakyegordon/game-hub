import { createSystem, defaultBaseConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
    theme:{
        tokens: {
            colors: {
                primary: {value: "#fff"},
                secondary: {value: "#191919ff"}
            }
        }
    },
})

const customSystem = createSystem(defaultBaseConfig, customConfig);

export default customSystem;