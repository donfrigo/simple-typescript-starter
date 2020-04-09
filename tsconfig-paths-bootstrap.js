const tsConfigPaths = require("tsconfig-paths");
 
const baseUrl = "./";
tsConfigPaths.register({
    baseUrl,
    paths: {
        "*": [
            "node_modules/*",
            "dist/*"
        ]
    }
});
