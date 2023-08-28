# Nextjs13

My nextjs13 template.

### Details

**App framework**

``
Next13
``

**CSS libraries:**

``
Tailwind
``
``
ShadCN
``

**Frontend documentation:**

``
Storybook
``

**Testing Framework:**

``
Jest
``

## Versioning Guidelines

To maintain a consistent versioning scheme, all merges into the `master` branch should follow semantic versioning (SemVer) principles. The version number should consist of the following components:

- Major Version: Increment when making incompatible changes.
- Minor Version: Increment when adding functionality in a backward-compatible manner.
- Patch Version: Increment when making backward-compatible bug fixes.
- Pre-release Version (Optional): A hyphen followed by a pre-release identifier, such as alpha, beta, or rc.

Here's a breakdown of how to determine the version number:

- If you make incompatible changes, increment the **Major Version**.
- If you add new features in a backward-compatible way, increment the **Minor Version**.
- If you make backward-compatible bug fixes, increment the **Patch Version**.
- If you have pre-release versions (e.g., alpha, beta, rc) before a stable release, append a hyphen and the pre-release identifier.

For example:
- Major change: `1.0.0` -> `2.0.0`
- New feature: `1.0.0` -> `1.1.0`
- Bug fix: `1.0.0` -> `1.0.1`
- Pre-release: `1.0.0` -> `1.0.0-beta.1`

Following these versioning guidelines helps maintain clarity and consistency in the project's releases.

## Requirements

⚠️ Node


# How to run the application ▶️

In the terminal, clone the project;

Access the repository:
```
nextjs13-mytemplate
```

Install Node dependencies (you can use Yarn if preferred):
```
npm install
```

Start the application with:
```
npm run dev
```

## How to run tests ▶️

In the repository terminal run:
```
npm test
```

## How to run storybook ▶️

In the repository terminal run:
```
npm run storybook
```

## Frontend Development Guide

This Frontend Development Guide provides guidelines and standards for font sizes, colors, screen sizes, and font weights in your project. Use these predefined styles to maintain consistency and streamline your frontend development process.

### Font Sizes (`fontSize`):

- `'base'`: `.75rem` - Base font size.
- `'title'`: `1.625rem` - Size for main titles.
- `'sub-title'`: `1.425rem` - Size for subheadings.
- `'alert'`: `0.75rem` - Size for alert messages.
- `'table-content'`: `0.875rem` - Size for table content.
- `'table-title'`: `0.938rem` - Size for table titles.

### Colors (`colors`):

- `black`: `#000000` - Black color.
- `gray`:
  - `50`: `#F9F9F9` - Light gray shade.
  - `400`: `#ECECEC` - Medium gray shade.
  - `700`: `#676767` - Dark gray shade.
  - `900`: `#2D2D2D` - Very dark gray.
- `blue`:
  - `500`: `#3C4D5` - Medium blue.
  - `700`: `#232B54` - Dark blue.
  - `900`: `#13172f` - Very dark blue.
- `red`:
  - `400`: `#FF4545` - Medium red.
  - `700`: `#BF2424` - Dark red.
- `disabled`:
  - `200`: `#e9e9e9` - Light gray for disabled elements.
  - `400`: `#d4d4d4` - Medium gray for disabled elements.

### Screen Sizes (`screens`):

- `'4sm'`: `320px` - Extra small screen size.
- `'3sm'`: `380px` - Very small screen size.
- `'2sm'`: `420px` - Small screen size.
- `sm`: `480px` - Small screen size.
- `md`: `768px` - Medium screen size.
- `lg`: `976px` - Large screen size.
- `xl`: `1440px` - Extra-large screen size.
- `'2xl'`: `1780px` - Very large screen size.
- `'3xl'`: `1920px` - Extremely large screen size.
- `'4xl'`: `2560px` - Ultra-large screen size.

### Font Weights (`fontWeight`):

- `regular`: `400` - Regular font weight.
- `medium`: `500` - Medium font weight.
- `semibold`: `600` - Semibold font weight.
- `bold`: `700` - Bold font weight.


## Usage of ShadCN/UI

This section includes information on how to add and create ShadCN/UI components, along with an example of how to import and use a custom component. It also highlights the customization flexibility offered by the library.

ShadCN/UI is a custom UI library designed to provide a collection of pre-designed components that promote consistent and visually appealing user interfaces. Below is a quick guide on how to effectively integrate and utilize ShadCN/UI components in your project.

**Adding Components:**

ShadCN/UI components can be added via the CLI to the root directory of your project using the following command:

- `npx shadcn-ui@latest add button`

This will create a @ folder in the root directory containing the installed components.

**Creating Custom Components:**

In the src/components/ui folder create your custom component and work with the imports pre-created by ShadCN/UI in the @ folder.

```
import { Button } from '@';

<Button classNames="custom-colors custom-borders">
    {children}
</Button>
```
