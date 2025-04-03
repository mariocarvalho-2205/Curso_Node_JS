import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
  	languageOptions: {
  		globals: globals.node,
  		ecmaVersion: "latest",
  		sourceType: "module",
  	},
  	rules: {
  		// Regras básicas para TDD
  		"no-multi-spaces": ["error"],
  		"indent": ["error", 2],
  		"semi": ["error", "always"],
  		"quotes": ["error", "double"],
  		"space-before-function-paren": ["error", "never"], // Não permite espaço antes dos parênteses
  		"space-in-parens": ["error", "never"], // Não permite espaço dentro dos parênteses
  		"comma-spacing": ["error", { before: false, after: true }], // Espaço após vírgulas
  	},
  },
  pluginJs.configs.recommended,
];
