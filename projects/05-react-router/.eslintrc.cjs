module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
  'react/jsx-no-target-blank': 'warn', // Advierte sobre el uso de target="_blank" sin rel="noreferrer"
  'react-hooks/rules-of-hooks': 'error', // Asegura que los hooks de React se usen correctamente
  'react-hooks/exhaustive-deps': 'warn', // Asegura que las dependencias de efectos sean correctas
  'semi': ['error', 'always'], // Requiere punto y coma al final de las declaraciones
  'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }], // Prefiere comillas simples, permite plantillas literales
  'indent': ['error', 2], // Indentación de 2 espacios
  'no-unused-vars': ['warn', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': true }], // Advierte sobre variables no utilizadas
  'no-console': 'warn', // Advierte sobre el uso de console.log
  'no-undef': 'error', // Error en caso de usar variables no definidas
  'no-extra-semi': 'error', // Error si hay puntos y comas extra
  'no-empty': 'warn', // Advierte sobre bloques vacíos
  'no-const-assign': 'error', // Error al reasignar constantes
  'no-constant-condition': 'warn', // Advierte sobre condiciones constantes
  'no-irregular-whitespace': 'error', // Error por espacios irregulares
  'no-unreachable': 'error', // Error por código inalcanzable
  'curly': ['error', 'multi-line'], // Requiere llaves para bloques multilínea
  'eqeqeq': ['error', 'always'], // Requiere el uso de === y !==
  'react/jsx-uses-react': 'off', // No necesario con React 17+
  'react/react-in-jsx-scope': 'off', // No necesario con React 17+
  'react/jsx-uses-vars': 'warn', // Advierte sobre variables JSX no utilizadas
  'react/prop-types': 'off', // Desactivado si se usa TypeScript
  'react/display-name': 'off', // Desactivado, puede ser innecesario para algunos proyectos
  'react/no-unescaped-entities': 'warn', // Advierte sobre entidades HTML no escapadas
  'react/no-children-prop': 'warn', // Advierte sobre el uso incorrecto de la prop children
  'react/jsx-key': 'warn', // Advierte si falta la key en listas
  'react/jsx-filename-extension': ['warn', { 'extensions': ['.jsx', '.tsx'] }], // Advierte sobre la extensión de archivo de los componentes JSX
},
}
